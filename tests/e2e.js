// E2E test for desmistificando-ia
// Usage: node e2e.js <BASE_URL>
//   ex: node e2e.js http://127.0.0.1:8765
//       node e2e.js https://desmistificando-ia.fjorge9.workers.dev

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE = (process.argv[2] || 'http://127.0.0.1:8765').replace(/\/$/, '');
const HEADLESS = process.env.HEADLESS !== 'false';

// Extract lesson files from estudos/content.js (regex on raw source)
const contentJs = fs.readFileSync(path.join(__dirname, '..', 'estudos', 'content.js'), 'utf8');
const LESSON_FILES = [...contentJs.matchAll(/file:\s*"([^"]+)"/g)].map(m => m[1]);
const LESSON_TITLES = [...contentJs.matchAll(/title:\s*"([^"]+)"/g)].map(m => m[1]);

console.log(`\n=== E2E :: ${BASE} ===`);
console.log(`Lessons declared in content.js: ${LESSON_FILES.length}\n`);

const results = {
  base: BASE,
  startedAt: new Date().toISOString(),
  pages: {},
  lessons: { passed: [], failed: [] },
  tabs: {},
  i18n: {},
  hero: { guide: null, plataforma: null },
  consoleErrors: [],
  networkErrors: [],
  pageErrors: [],
};

const OUT_DIR = path.join(__dirname, 'out');
fs.mkdirSync(OUT_DIR, { recursive: true });

/**
 * Mede o hero (banner roxo) da página atual.
 *  - kind === 'guide'      → <header.shadow-lg> do Guia (Tailwind)
 *  - kind === 'plataforma' → <header.topbar> + <section.topbar-hero>
 */
async function measureHero(page, kind) {
  return await page.evaluate((kind) => {
    const round = (n) => Math.round(n * 10) / 10;
    const rect = (el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return {
        x: round(r.x), y: round(r.y), w: round(r.width), h: round(r.height),
        top: round(r.top), bottom: round(r.bottom),
        paddingTop: cs.paddingTop, paddingBottom: cs.paddingBottom,
        paddingLeft: cs.paddingLeft, paddingRight: cs.paddingRight,
        fontSize: cs.fontSize, lineHeight: cs.lineHeight,
        fontWeight: cs.fontWeight, color: cs.color,
        background: cs.backgroundColor,
        gap: cs.gap || cs.rowGap || cs.columnGap,
      };
    };
    let hero, title, paragraphs, topbar;
    if (kind === 'guide') {
      hero = document.querySelector('header.shadow-lg');
      title = hero?.querySelector('h1.hero-title-desktop') || hero?.querySelector('h1');
      paragraphs = [...(hero?.querySelectorAll('p') || [])];
      topbar = document.querySelector('.fixed.top-4');
    } else {
      topbar = document.querySelector('header.topbar');
      hero = document.querySelector('section.topbar-hero');
      title = hero?.querySelector('.topbar-hero-title-desktop');
      paragraphs = [...(hero?.querySelectorAll('.topbar-hero-text') || [])];
    }
    const titleR = rect(title);
    const pRects = paragraphs.map(rect);
    const gaps = [];
    for (let i = 1; i < pRects.length; i++) gaps.push(round(pRects[i].top - pRects[i - 1].bottom));
    let nextSibling = null;
    if (hero?.nextElementSibling) {
      const ns = hero.nextElementSibling;
      const nr = ns.getBoundingClientRect();
      nextSibling = {
        tag: ns.tagName.toLowerCase(),
        cls: (ns.className || '').toString().split(' ')[0] || '',
        gap: round(nr.top - hero.getBoundingClientRect().bottom),
      };
    }
    return {
      viewport: { w: window.innerWidth, h: window.innerHeight },
      topbar: rect(topbar),
      hero: rect(hero),
      title: titleR,
      paragraphs: pRects,
      gapsBetweenParagraphs: gaps,
      titleToFirstParagraphTopDelta: titleR && pRects[0] ? round(pRects[0].top - titleR.top) : null,
      heroToNextSibling: nextSibling,
    };
  }, kind);
}

function writeHeroReport() {
  const g = results.hero.guide;
  const p = results.hero.plataforma;
  if (!g || !p) return;
  const fmt = (v) => (v === null || v === undefined) ? '—' : v;
  const lines = [];
  lines.push(`# Hero layout report`);
  lines.push(``);
  lines.push(`- Base: ${BASE}`);
  lines.push(`- Viewport: ${g.viewport.w}×${g.viewport.h}`);
  lines.push(``);
  lines.push(`## Bloco roxo (hero)`);
  lines.push(`| metric | Guia | Plataforma | delta |`);
  lines.push(`|---|---|---|---|`);
  const dh = p.hero.h - g.hero.h;
  lines.push(`| hero height | ${g.hero.h}px | ${p.hero.h}px | ${dh > 0 ? '+' : ''}${dh}px |`);
  lines.push(`| hero padding-top | ${g.hero.paddingTop} | ${p.hero.paddingTop} | |`);
  lines.push(`| hero padding-bottom | ${g.hero.paddingBottom} | ${p.hero.paddingBottom} | |`);
  lines.push(`| topbar height (acima) | ${fmt(g.topbar?.h)}px | ${fmt(p.topbar?.h)}px | |`);
  lines.push(``);
  lines.push(`## Título`);
  lines.push(`| metric | Guia | Plataforma |`);
  lines.push(`|---|---|---|`);
  lines.push(`| font-size | ${g.title?.fontSize} | ${p.title?.fontSize} |`);
  lines.push(`| line-height | ${g.title?.lineHeight} | ${p.title?.lineHeight} |`);
  lines.push(`| font-weight | ${g.title?.fontWeight} | ${p.title?.fontWeight} |`);
  lines.push(`| largura coluna | ${g.title?.w}px | ${p.title?.w}px |`);
  lines.push(`| altura | ${g.title?.h}px | ${p.title?.h}px |`);
  lines.push(`| top (y) | ${g.title?.top}px | ${p.title?.top}px |`);
  lines.push(``);
  lines.push(`## Parágrafos`);
  lines.push(`| metric | Guia | Plataforma |`);
  lines.push(`|---|---|---|`);
  lines.push(`| count | ${g.paragraphs.length} | ${p.paragraphs.length} |`);
  lines.push(`| font-size | ${g.paragraphs[0]?.fontSize} | ${p.paragraphs[0]?.fontSize} |`);
  lines.push(`| line-height | ${g.paragraphs[0]?.lineHeight} | ${p.paragraphs[0]?.lineHeight} |`);
  lines.push(`| font-weight | ${g.paragraphs[0]?.fontWeight} | ${p.paragraphs[0]?.fontWeight} |`);
  lines.push(`| gap entre parágrafos | ${fmt(g.gapsBetweenParagraphs[0])}px | ${fmt(p.gapsBetweenParagraphs[0])}px |`);
  lines.push(`| título → 1º p (top delta) | ${fmt(g.titleToFirstParagraphTopDelta)}px | ${fmt(p.titleToFirstParagraphTopDelta)}px |`);
  lines.push(``);
  lines.push(`## Hero → próximo elemento`);
  lines.push(`| | Guia | Plataforma |`);
  lines.push(`|---|---|---|`);
  lines.push(`| próximo | ${fmt(g.heroToNextSibling?.tag)}.${fmt(g.heroToNextSibling?.cls)} | ${fmt(p.heroToNextSibling?.tag)}.${fmt(p.heroToNextSibling?.cls)} |`);
  lines.push(`| gap | ${fmt(g.heroToNextSibling?.gap)}px | ${fmt(p.heroToNextSibling?.gap)}px |`);
  const md = lines.join('\n');
  fs.writeFileSync(path.join(OUT_DIR, 'hero-report.md'), md);
  fs.writeFileSync(path.join(OUT_DIR, 'hero-report.json'), JSON.stringify(results.hero, null, 2));
  console.log('\n' + md);
}

function rec(label, ok, extra) {
  const icon = ok ? '✓' : '✗';
  console.log(`  ${icon} ${label}${extra ? ' — ' + extra : ''}`);
}

(async () => {
  const browser = await chromium.launch({ headless: HEADLESS });
  const ctx = await browser.newContext({ locale: 'pt-BR', viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();

  // Capture console + network + page errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      results.consoleErrors.push({ text: msg.text(), location: msg.location() });
    }
  });
  page.on('pageerror', err => {
    results.pageErrors.push({ message: err.message, stack: err.stack });
  });
  page.on('response', resp => {
    const url = resp.url();
    const status = resp.status();
    if (status >= 400 && url.startsWith(BASE)) {
      results.networkErrors.push({ url, status });
    }
  });

  // === 1) Home /
  console.log('[1] Home /');
  try {
    const resp = await page.goto(BASE + '/', { waitUntil: 'load', timeout: 30000 });
    results.pages['/'] = { status: resp.status() };
    rec('GET /', resp.ok(), `HTTP ${resp.status()}`);
    const title = await page.title();
    rec('has <title>', !!title, JSON.stringify(title));
    // Hero measurement + screenshots (Guia)
    try {
      await page.waitForSelector('header.shadow-lg', { timeout: 5000 });
      await page.waitForTimeout(250);
      results.hero.guide = await measureHero(page, 'guide');
      await page.locator('header.shadow-lg').first().screenshot({ path: path.join(OUT_DIR, 'hero-guide.png') });
      await page.screenshot({ path: path.join(OUT_DIR, 'top-guide.png'), clip: { x: 0, y: 0, width: 1440, height: 460 } });
      rec('hero medido (Guia)', true, `${results.hero.guide.hero.h}px alt.`);
    } catch (e) {
      rec('hero (Guia)', false, e.message);
    }
  } catch (e) {
    rec('GET /', false, e.message);
    results.pages['/'] = { error: e.message };
  }

  // === 2) /estudos/
  console.log('\n[2] /estudos/');
  try {
    const resp = await page.goto(BASE + '/estudos/', { waitUntil: 'load', timeout: 30000 });
    results.pages['/estudos/'] = { status: resp.status() };
    rec('GET /estudos/', resp.ok(), `HTTP ${resp.status()}`);
    // wait for app shell to render
    await page.waitForSelector('nav.tabs', { timeout: 10000 });
    rec('nav.tabs presente', true);
    await page.waitForSelector('.tab[data-view="licoes"]', { timeout: 5000 });
    rec('aba Lições presente', true);
    // Hero measurement + screenshots (Plataforma)
    try {
      await page.waitForSelector('section.topbar-hero', { timeout: 5000 });
      await page.waitForTimeout(250);
      results.hero.plataforma = await measureHero(page, 'plataforma');
      const tb = await page.locator('header.topbar').boundingBox();
      const hb = await page.locator('section.topbar-hero').boundingBox();
      const totalH = (hb.y + hb.height) - tb.y;
      await page.screenshot({
        path: path.join(OUT_DIR, 'hero-plataforma.png'),
        clip: { x: 0, y: tb.y, width: 1440, height: totalH },
      });
      await page.screenshot({ path: path.join(OUT_DIR, 'top-plataforma.png'), clip: { x: 0, y: 0, width: 1440, height: 460 } });
      rec('hero medido (Plataforma)', true, `${results.hero.plataforma.hero.h}px alt.`);
      writeHeroReport();
    } catch (e) {
      rec('hero (Plataforma)', false, e.message);
    }
  } catch (e) {
    rec('GET /estudos/', false, e.message);
    results.pages['/estudos/'] = { error: e.message };
  }

  // === 3) Abrir Lições e validar lista
  console.log('\n[3] Aba Lições');
  try {
    await page.click('.tab[data-view="licoes"]');
    await page.waitForSelector('.lesson-item', { timeout: 5000 });
    const itemCount = await page.locator('.lesson-item').count();
    rec(`itens .lesson-item renderizados`, itemCount === LESSON_FILES.length, `${itemCount} / ${LESSON_FILES.length}`);
    results.tabs.licoes = { count: itemCount, expected: LESSON_FILES.length };
  } catch (e) {
    rec('aba Lições', false, e.message);
    results.tabs.licoes = { error: e.message };
  }

  // === 4) Cada lição: click → conteúdo renderiza
  console.log(`\n[4] Validando ${LESSON_FILES.length} lições (click + render)`);
  for (let i = 0; i < LESSON_FILES.length; i++) {
    const file = LESSON_FILES[i];
    const title = LESSON_TITLES[i] || file;
    try {
      // CSS attribute selector needs escaping for special chars; use evaluate-based click instead
      const clicked = await page.evaluate(targetFile => {
        const el = Array.from(document.querySelectorAll('.lesson-item'))
          .find(d => d.getAttribute('data-file') === targetFile);
        if (!el) return false;
        el.click();
        return true;
      }, file);
      if (!clicked) throw new Error('.lesson-item nao encontrado');

      // Wait for either .lesson-prose (ok) or .lesson-load-error (fail)
      await page.waitForFunction(() => {
        return !!document.querySelector('.lesson-prose') ||
               !!document.querySelector('.lesson-load-error');
      }, { timeout: 15000 });

      const errorVisible = await page.locator('.lesson-load-error').count();
      if (errorVisible > 0) {
        results.lessons.failed.push({ file, title, reason: 'lesson-load-error' });
        rec(`(${i + 1}/${LESSON_FILES.length}) ${title}`, false, 'load-error');
      } else {
        // check rendered content has substantive length
        const proseLen = await page.locator('.lesson-prose').first().innerText().then(t => t.length).catch(() => 0);
        if (proseLen < 50) {
          results.lessons.failed.push({ file, title, reason: `prose too short (${proseLen} chars)` });
          rec(`(${i + 1}/${LESSON_FILES.length}) ${title}`, false, `prose ${proseLen} chars`);
        } else {
          results.lessons.passed.push({ file, title, proseLen });
          // Don't spam — only print every 10th OK
          if ((i + 1) % 5 === 0 || i === LESSON_FILES.length - 1) {
            rec(`(${i + 1}/${LESSON_FILES.length}) ok`, true);
          }
        }
      }
    } catch (e) {
      results.lessons.failed.push({ file, title, reason: e.message });
      rec(`(${i + 1}/${LESSON_FILES.length}) ${title}`, false, e.message);
    }
  }

  // === 5) Quiz
  console.log('\n[5] Aba Quiz');
  try {
    await page.click('.tab[data-view="quiz"]');
    await page.waitForTimeout(500);
    const hasQuizContent = await page.locator('#app').innerText().then(t => t.length > 50);
    rec('Quiz renderizou conteúdo', hasQuizContent);
    results.tabs.quiz = { rendered: hasQuizContent };
  } catch (e) {
    rec('Quiz', false, e.message);
    results.tabs.quiz = { error: e.message };
  }

  // === 6) Simulado
  console.log('\n[6] Aba Simulado');
  try {
    await page.click('.tab[data-view="simulado"]');
    await page.waitForTimeout(500);
    const hasContent = await page.locator('#app').innerText().then(t => t.length > 50);
    rec('Simulado renderizou conteúdo', hasContent);
    results.tabs.simulado = { rendered: hasContent };
  } catch (e) {
    rec('Simulado', false, e.message);
    results.tabs.simulado = { error: e.message };
  }

  // === 7) Histórico
  console.log('\n[7] Aba Histórico');
  try {
    await page.click('.tab[data-view="historico"]');
    await page.waitForTimeout(500);
    const hasContent = await page.locator('#app').innerText().then(t => t.length > 20);
    rec('Histórico renderizou conteúdo', hasContent);
    results.tabs.historico = { rendered: hasContent };
  } catch (e) {
    rec('Histórico', false, e.message);
    results.tabs.historico = { error: e.message };
  }

  // === 8) Idiomas
  console.log('\n[8] Troca de idioma (PT/EN/ES)');
  for (const lang of ['en', 'es', 'pt']) {
    try {
      await page.click(`.lang-btn[data-lang="${lang}"]`);
      await page.waitForTimeout(300);
      const html = await page.locator('html').getAttribute('lang');
      const tabText = await page.locator('.tab[data-view="licoes"]').innerText();
      results.i18n[lang] = { htmlLang: html, licoesLabel: tabText.trim() };
      rec(`troca para ${lang}`, !!tabText, `html.lang=${html}, label="${tabText.trim()}"`);
    } catch (e) {
      rec(`troca para ${lang}`, false, e.message);
      results.i18n[lang] = { error: e.message };
    }
  }

  // === Resumo
  console.log('\n=== Resumo ===');
  console.log(`Lições OK:    ${results.lessons.passed.length} / ${LESSON_FILES.length}`);
  console.log(`Lições FALHA: ${results.lessons.failed.length}`);
  console.log(`Console errors: ${results.consoleErrors.length}`);
  console.log(`Page errors:    ${results.pageErrors.length}`);
  console.log(`Network 4xx/5xx: ${results.networkErrors.length}`);

  if (results.lessons.failed.length) {
    console.log('\nFalhas de lições:');
    for (const f of results.lessons.failed) console.log(`  - ${f.title}: ${f.reason}`);
  }
  if (results.consoleErrors.length) {
    console.log('\nConsole errors:');
    for (const e of results.consoleErrors.slice(0, 10)) console.log(`  - ${e.text}`);
  }
  if (results.networkErrors.length) {
    console.log('\nNetwork 4xx/5xx:');
    for (const e of results.networkErrors.slice(0, 20)) console.log(`  - ${e.status} ${e.url}`);
  }

  // Save full JSON
  const tag = BASE.includes('127.0.0.1') ? 'local' : 'prod';
  const outPath = path.join(__dirname, `report-${tag}.json`);
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  console.log(`\nRelatório completo: ${outPath}`);

  await browser.close();

  const failed = results.lessons.failed.length + results.pageErrors.length;
  process.exit(failed > 0 ? 1 : 0);
})().catch(e => {
  console.error('FATAL:', e);
  process.exit(2);
});
