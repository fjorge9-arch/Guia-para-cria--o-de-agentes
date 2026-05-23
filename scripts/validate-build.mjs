#!/usr/bin/env node
// Valida invariantes dos HTMLs apos build:css e build:i18n.
// Roda localmente e no CI para garantir que o build esta correto.
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const FILES = [
  'index.html',
  'en/index.html',
  'es/index.html',
  'estudos/index.html',
];

function check(file, html) {
  const isEstudos = file === 'estudos/index.html';
  const cssPrefix = isEstudos ? '../assets/css/' : '/assets/css/';
  const jsPrefix  = isEstudos ? '../assets/js/'  : '/assets/js/';

  return {
    'tem </html>': html.includes('</html>'),
    'tem <style> critico inline': /<style[^>]*>[^<]{100,}<\/style>/.test(html),
    'CSS proprio e sincrono (rel=stylesheet)':
      html.includes(`href="${cssPrefix}styles.css"`) &&
      html.includes('rel="stylesheet"'),
    'CSS proprio NAO tem onload (nao e async)':
      !new RegExp(`${cssPrefix.replace(/\//g,'\\/')}(output|styles)\\.css[^"]*onload`).test(html),
    'scripts proprios tem defer':
      new RegExp(`defer src="${jsPrefix.replace(/\//g,'\\/')}i18n\\.js"`).test(html),
    'sem cdn.jsdelivr.net (marked nao e CDN)':
      !html.includes('cdn.jsdelivr.net'),
    'hreflang presente':
      html.includes('hreflang='),
    'canonical presente':
      html.includes('rel="canonical"'),
    'JSON-LD Article presente':
      html.includes('"@type": "Article"'),
  };
}

let allOk = true;
for (const file of FILES) {
  const abs = resolve(ROOT, file);
  if (!existsSync(abs)) {
    console.error(`MISSING  ${file}`);
    allOk = false;
    continue;
  }
  const html = readFileSync(abs, 'utf8');
  const results = check(file, html);
  const failures = Object.entries(results).filter(([, ok]) => !ok).map(([k]) => k);
  if (failures.length) {
    console.error(`FAIL  ${file}`);
    failures.forEach(f => console.error(`       - ${f}`));
    allOk = false;
  } else {
    console.log(`OK    ${file}`);
  }
}

if (!allOk) {
  console.error('\n[validate] FALHOU — corrija os itens acima antes de fazer deploy.');
  process.exit(1);
} else {
  console.log('\n[validate] Todos os checks passaram.');
}
