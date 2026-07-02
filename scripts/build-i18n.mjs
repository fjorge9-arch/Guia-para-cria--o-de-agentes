#!/usr/bin/env node
// Gera versoes estaticas pre-traduzidas /en/index.html e /es/index.html
// a partir do index.html (fonte PT) e do objeto TRANSLATIONS em assets/js/i18n.js.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createContext, Script } from 'node:vm';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SRC_HTML = resolve(ROOT, 'index.html');
const I18N_JS = resolve(ROOT, 'assets/js/i18n.js');
const SITE_URL = 'https://desmistificando-ia.com';

const LOCALE_MAP = { pt: 'pt-BR', en: 'en-US', es: 'es-419' };
const OG_LOCALE = { pt: 'pt_BR', en: 'en_US', es: 'es_419' };
const PATH_FOR = { pt: '/', en: '/en/', es: '/es/' };

function extractTranslations(src) {
  const marker = 'const TRANSLATIONS = ';
  const start = src.indexOf(marker);
  if (start < 0) throw new Error('TRANSLATIONS nao encontrado em i18n.js');
  const objStart = src.indexOf('{', start);
  let depth = 0, inStr = false, strCh = '', esc = false, end = -1;
  for (let i = objStart; i < src.length; i++) {
    const c = src[i];
    if (esc) { esc = false; continue; }
    if (inStr) {
      if (c === '\\') esc = true;
      else if (c === strCh) inStr = false;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { inStr = true; strCh = c; continue; }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) { end = i + 1; break; } }
  }
  if (end < 0) throw new Error('Nao consegui delimitar o objeto TRANSLATIONS');
  // Avalia o literal num contexto V8 isolado (sem process/require/fs) em vez de eval/Function,
  // para que codigo injetado em i18n.js nao consiga escapar para o sistema durante o build.
  const sandbox = createContext(Object.create(null));
  const script = new Script('(' + src.slice(objStart, end) + ')');
  return script.runInContext(sandbox, { timeout: 2000 });
}

function lookup(translations, key) {
  return key.split('.').reduce((o, k) => (o == null ? undefined : o[k]), translations);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

// Substitui o conteudo (text ou HTML) de cada elemento marcado com data-i18n / data-i18n-html.
function replaceI18nContent(html, dict, mode /* 'text' | 'html' */) {
  const attrName = mode === 'html' ? 'data-i18n-html' : 'data-i18n';
  // Regex que casa <tag ...attr="key"...>...</tag> para tags simples (a/button/h\d/li/p/span)
  const re = new RegExp(
    '<(a|button|h[1-6]|li|p|span)\\b([^>]*?)\\s' + attrName + '="([^"]+)"([^>]*)>([\\s\\S]*?)</\\1>',
    'g'
  );
  return html.replace(re, (match, tag, pre, key, post, inner) => {
    const lang = dict[key];
    if (lang === undefined) return match; // sem traducao -> mantem original
    const replacement = mode === 'html' ? lang : escapeHtml(lang);
    return `<${tag}${pre} ${attrName}="${key}"${post}>${replacement}</${tag}>`;
  });
}

// Atualiza aria-label de elementos com data-i18n-aria.
function replaceAria(html, dict) {
  // Para cada data-i18n-aria="key" presente, troca o aria-label vizinho no mesmo elemento.
  return html.replace(
    /<([a-z][a-z0-9]*)\b([^>]*?)data-i18n-aria="([^"]+)"([^>]*)>/g,
    (match, tag, pre, key, post) => {
      const val = dict[key];
      if (val === undefined) return match;
      const combined = pre + post;
      const withAria = /aria-label="[^"]*"/.test(combined)
        ? match.replace(/aria-label="[^"]*"/, `aria-label="${escapeAttr(val)}"`)
        : match.replace('>', ` aria-label="${escapeAttr(val)}">`);
      return withAria;
    }
  );
}

function buildLangHtml(srcHtml, translations, lang) {
  const dict = {};
  // achata TRANSLATIONS[lang] em chaves "a.b.c" para lookup rapido
  (function walk(obj, prefix) {
    for (const k of Object.keys(obj)) {
      const v = obj[k];
      const key = prefix ? `${prefix}.${k}` : k;
      if (v && typeof v === 'object' && !Array.isArray(v)) walk(v, key);
      else dict[key] = v;
    }
  })(translations[lang] || {}, '');

  let html = srcHtml;

  // 1. data-i18n-html (innerHTML)
  html = replaceI18nContent(html, dict, 'html');
  // 2. data-i18n (textContent)
  html = replaceI18nContent(html, dict, 'text');
  // 3. data-i18n-aria
  html = replaceAria(html, dict);

  // 4. <html lang="...">
  html = html.replace(/<html\s+lang="[^"]*"/i, `<html lang="${LOCALE_MAP[lang]}"`);

  // 5. <title>
  const title = lookup(translations[lang], 'meta.title');
  if (title) html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);

  // 6. meta description
  const desc = lookup(translations[lang], 'meta.description');
  if (desc) {
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeAttr(desc)}">`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${escapeAttr(desc)}">`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${escapeAttr(desc)}">`
    );
  }

  // 7. OG title / Twitter title
  if (title) {
    html = html.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${escapeAttr(title)}">`
    );
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${escapeAttr(title)}">`
    );
  }

  // 8. canonical + og:url
  const selfUrl = SITE_URL + PATH_FOR[lang];
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${selfUrl}">`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${selfUrl}">`
  );

  // 9. og:locale principal + alternates
  html = html.replace(
    /<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:locale" content="${OG_LOCALE[lang]}">`
  );
  // Reescreve TODOS os og:locale:alternate para os outros idiomas
  const others = ['pt', 'en', 'es'].filter((l) => l !== lang);
  const altBlock = others.map((l) => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}">`).join('\n    ');
  html = html.replace(
    /(<meta\s+property="og:locale:alternate"\s+content="[^"]*"\s*\/?>\s*)+/,
    altBlock + '\n    '
  );

  // 10. JSON-LD Article: url e mainEntityOfPage.@id apontam para selfUrl
  html = html.replace(
    /("url":\s*")https:\/\/desmistificando-ia\.com\/(")/,
    `$1${selfUrl}$2`
  );
  html = html.replace(
    /("@id":\s*")https:\/\/desmistificando-ia\.com\/(")/,
    `$1${selfUrl}$2`
  );

  // 11. JSON-LD BreadcrumbList: reescreve "item" da posicao 1 para selfUrl
  // (BreadcrumbList raiz tem um unico ListItem apontando para "/")
  html = html.replace(
    /("item":\s*")https:\/\/desmistificando-ia\.com\/(")/g,
    `$1${selfUrl}$2`
  );

  return html;
}

// ──────────────────────────────────────────────────────────────────────────
const srcHtml = readFileSync(SRC_HTML, 'utf8');
const i18nSrc = readFileSync(I18N_JS, 'utf8');
const TRANSLATIONS = extractTranslations(i18nSrc);

for (const lang of ['en', 'es']) {
  const out = buildLangHtml(srcHtml, TRANSLATIONS, lang);
  const dir = resolve(ROOT, lang);
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, 'index.html'), out, 'utf8');
  console.log(`[i18n] gerado ${lang}/index.html (${out.length} bytes)`);
}
