#!/usr/bin/env node
// Extrai CSS critico above-the-fold de cada pagina e o inline no HTML,
// adiando o restante via preload+onload (ja presente no HTML fonte).
//
// Estrategia: usamos `critical` em modo `inline` apontando para os arquivos
// HTML estaticos ja gerados (PT/EN/ES + /estudos/). O `critical` carrega o
// HTML em um Chrome headless, descobre o CSS necessario no above-the-fold,
// e o injeta como <style> no <head>. As tags <link rel="preload" ...> ja
// existentes garantem o carregamento assincrono do restante.

import { generate } from 'critical';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// (rota_html, [larguras]) — mobile-first; usamos 2 viewports para cobrir LCP
const PAGES = [
  { src: 'index.html',         base: ROOT, ignore: [] },
  { src: 'en/index.html',      base: ROOT, ignore: [] },
  { src: 'es/index.html',      base: ROOT, ignore: [] },
  { src: 'estudos/index.html', base: ROOT, ignore: [] },
];

const DIMENSIONS = [
  { width: 414, height: 896 },   // mobile (iPhone XR-ish)
  { width: 1280, height: 720 },  // desktop comum
];

const CRITICAL_OPTS = {
  inline: true,            // injeta <style> no <head>
  extract: false,          // mantemos as folhas externas (preload+onload)
  dimensions: DIMENSIONS,
  penthouse: { timeout: 60000 },
  ignore: {
    atrule: ['@font-face'], // font-face NAO deve ir para o inline (peso alto)
    rule: [/print/, /\.dark\s/], // ignora dark mode e print no inline critico
  },
};

let hadError = false;
for (const p of PAGES) {
  const full = resolve(p.base, p.src);
  if (!existsSync(full)) {
    console.warn(`[critical] pulando (nao existe): ${p.src}`);
    continue;
  }
  try {
    console.log(`[critical] processando ${p.src} ...`);
    await generate({
      ...CRITICAL_OPTS,
      base: p.base,
      src: p.src,
      target: { html: p.src }, // sobrescreve in-place
    });
    console.log(`[critical] OK ${p.src}`);
  } catch (e) {
    hadError = true;
    console.error(`[critical] FALHOU ${p.src}:`, e.message);
  }
}
if (hadError) process.exit(1);
