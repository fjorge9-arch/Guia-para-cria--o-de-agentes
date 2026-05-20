## Backlog de Tasks — Fusão Desmistificando IA

Legenda de prioridade:
- **P0:** crítico para a existência do produto unificado
- **P1:** necessário para completude e qualidade da entrega
- **P2:** melhoria pós-fusão, evolutiva

Vínculos: RF = Requisito Funcional | RNF = Requisito Não Funcional | CA = Critério de Aceite (ver SPEC-SDD.md)

---

## FASE 1 — Setup do Novo Repositório

### T01 — Criar repositório `desmistificando-ia` no GitHub [P0]

- **Objetivo:** provisionar o repositório de destino da fusão.
- **Vínculo SPEC:** ADR-001, CA1.
- **DoD:**
  1. Repositório criado em `github.com/fjorge9-arch/desmistificando-ia`.
  2. Branch padrão: `main`.
  3. Arquivo `README.md` inicial com nome e propósito do projeto.
  4. `.gitignore` para macOS, Windows e VS Code adicionado.
- **Dependências:** nenhuma.

---

## FASE 2 — Importar Guia (raiz)

### T02 — Importar histórico do Guia via git subtree [P0]

- **Objetivo:** trazer o código e histórico de commits do `Guia-para-criacao-de-agentes` para a raiz do novo repositório.
- **Vínculo SPEC:** RF1, RNF2, ADR-006.
- **Passos sugeridos:**
  ```bash
  # No novo repositório local:
  git remote add guia https://github.com/fjorge9-arch/Guia-para-cria--o-de-agentes.git
  git fetch guia
  git merge --allow-unrelated-histories guia/main
  ```
- **DoD:**
  1. Commits do Guia visíveis no `git log` do novo repositório.
  2. Arquivos `index.html`, `assets/`, `robots.txt`, `sitemap.xml`, `README.md` presentes na raiz.
  3. Guia abre corretamente via servidor local (`Live Server` ou `python -m http.server`).
  4. Nenhum arquivo do Guia perdido (verificar por diff com repo de origem).
- **Dependências:** T01.

---

## FASE 3 — Importar Plataforma de Estudos (`/estudos/`)

### T03 — Importar histórico da Plataforma via git subtree [P0]

- **Objetivo:** trazer o código e histórico de commits da subpasta `estudos/` do repositório `Material-de-estudo` para `/estudos/` no novo repositório, preservando histórico de commits.
- **Vínculo SPEC:** RF2, RF9, RNF2, ADR-006.
- **Passos sugeridos:**
  ```bash
  # Adicionar remote do Material-de-estudo
  git remote add estudos https://github.com/fjorge9-arch/Material-de-estudo.git
  git fetch estudos

  # Usar git subtree para trazer apenas a subpasta estudos/
  git subtree add --prefix=estudos estudos/main --squash
  # Nota: se preferir histórico completo (sem squash), remover --squash e resolver conflitos manualmente.
  ```
- **DoD:**
  1. Commits da Plataforma visíveis no `git log`.
  2. Diretório `/estudos/` contém `index.html`, `app.js`, `content.js`, `i18n.js`, `styles.css`, `content/`, `SPEC-SDD.md`, `TASKS.md`, `OWASP-CHECKLIST.md`.
  3. Plataforma abre corretamente em `http://localhost:PORT/estudos/` via servidor local.
  4. Nenhum arquivo da Plataforma perdido (verificar por diff com repo de origem).
- **Dependências:** T01, T02.

---

## FASE 4 — Unificação de Assets

### T04 — Auditar e unificar CSS [P0]

- **Objetivo:** produzir um único `assets/css/styles.css` que cubra ambas as seções sem duplicação.
- **Vínculo SPEC:** RF3, RF11, CA5, ADR-003.
- **Passos:**
  1. Comparar `assets/css/styles.css` (Guia) com `estudos/styles.css` (Plataforma) — identificar blocos idênticos ou equivalentes (variáveis CSS, dark mode, tipografia Inter, reset, topbar, botões comuns).
  2. Extrair variáveis e tokens compartilhados para a seção `:root` / `[data-theme]` do arquivo unificado.
  3. Manter overrides de seção com prefixo `.guide-` (se necessário) e `.estudos-` para evitar colisão.
  4. Atualizar `index.html` (Guia) para referenciar `./assets/css/styles.css`.
  5. Atualizar `estudos/index.html` para referenciar `../assets/css/styles.css`.
  6. Remover `estudos/styles.css`.
- **DoD:**
  1. Apenas um arquivo `styles.css` no repositório (em `assets/css/`).
  2. Visual do Guia sem regressão (inspecionar visualmente todas as seções da página).
  3. Visual da Plataforma sem regressão (inspecionar todas as abas: Início, Lições, Quiz, Simulado, Histórico).
  4. Dark mode funcional em ambas as seções.
- **Dependências:** T02, T03.

### T05 — Auditar e unificar dicionários i18n [P0]

- **Objetivo:** produzir um único `assets/js/i18n.js` com todos os textos PT/EN/ES de ambas as seções.
- **Vínculo SPEC:** RF4, CA5, ADR-004.
- **Passos:**
  1. Comparar `assets/js/i18n.js` (Guia) com `estudos/i18n.js` (Plataforma).
  2. Identificar chaves com mesmo nome — validar se os valores são idênticos ou conflitantes.
  3. Registrar na task quaisquer conflitos de chave encontrados e a resolução adotada.
  4. Fundir os objetos de tradução nos três idiomas em um único arquivo, mantendo todos os namespaces existentes.
  5. Manter a engine de i18n (função `t()`, detecção de idioma, `localStorage`) em uma única implementação.
  6. Atualizar `index.html` (Guia) para referenciar `./assets/js/i18n.js`.
  7. Atualizar `estudos/index.html` para referenciar `../assets/js/i18n.js`.
  8. Remover `estudos/i18n.js`.
- **DoD:**
  1. Apenas um arquivo `i18n.js` no repositório (em `assets/js/`).
  2. Troca de idioma funcional no Guia (PT ↔ EN ↔ ES) sem texto faltante.
  3. Troca de idioma funcional na Plataforma (PT ↔ EN ↔ ES) sem texto faltante.
  4. Conflitos de chave documentados e resolvidos.
- **Dependências:** T02, T03.

### T06 — Unificar utilitários JS (main.js) [P0]

- **Objetivo:** consolidar utilitários compartilhados (dark mode, scroll, clipboard) em um único `assets/js/main.js`.
- **Vínculo SPEC:** RF5, ADR-005.
- **Passos:**
  1. Comparar `assets/js/main.js` (Guia) com `estudos/app.js` (Plataforma) — identificar blocos duplicados (dark mode toggle, scroll-to-top, clipboard).
  2. Extrair os utilitários comuns para `assets/js/main.js`.
  3. Manter em `estudos/app.js` apenas a lógica específica da Plataforma (abas, quiz, progresso, casos práticos).
  4. Ajustar a ordem de carregamento de scripts em ambos os HTMLs: `main.js` antes dos scripts específicos de cada seção.
- **DoD:**
  1. `assets/js/main.js` contém dark mode, scroll-to-top e clipboard sem duplicação.
  2. Dark mode funcional em ambas as seções com a mesma chave `theme` em `localStorage`.
  3. Preferência de dark mode persiste ao navegar entre Guia e Plataforma.
  4. Funcionalidades específicas de cada seção não sofrem regressão.
- **Dependências:** T04, T05.

### T07 — Corrigir todos os paths internos [P0]

- **Objetivo:** garantir que todos os links internos (CSS, JS, imagens, fontes) estejam corretos após a unificação.
- **Vínculo SPEC:** RF11, RNF7.
- **Passos:**
  1. Auditar `index.html` (Guia) — verificar todos os `href`, `src` e `url()` em CSS.
  2. Auditar `estudos/index.html` — verificar todos os `href`, `src` e `url()` (atenção ao prefixo `../assets/`).
  3. Verificar `estudos/app.js` e `estudos/content.js` — paths para arquivos markdown em `estudos/content/`.
  4. Abrir DevTools no browser e confirmar ausência de erros 404 no painel Network em ambas as seções.
- **DoD:**
  1. Console do browser sem erros 404 no Guia.
  2. Console do browser sem erros 404 na Plataforma.
  3. Todas as imagens, ícones e fontes carregam corretamente em ambas as seções.
- **Dependências:** T04, T05, T06.

---

## FASE 5 — Navegação Cruzada

### T08 — Adicionar link do Guia para a Plataforma [P0]

- **Objetivo:** permitir que o usuário que chega ao Guia saiba que existe a Plataforma de Estudos e possa acessá-la diretamente.
- **Vínculo SPEC:** RF6, CA4.
- **Critérios de design:**
  - Link deve ser visível sem scroll (acima da dobra) ou acessível via header/nav.
  - Texto do link deve ser internacionalizado (PT/EN/ES).
  - Link deve ser `href="./estudos/"`.
- **DoD:**
  1. Link visível no Guia em desktop (≥ 768 px) e mobile (< 768 px).
  2. Clique navega corretamente para `/estudos/`.
  3. Texto do link traduzido nos três idiomas.
- **Dependências:** T06, T07.

### T09 — Adicionar link da Plataforma para o Guia [P0]

- **Objetivo:** permitir que o usuário na Plataforma retorne ao Guia facilmente.
- **Vínculo SPEC:** RF6, CA4.
- **Critérios de design:**
  - Link integrado à topbar existente da Plataforma (ex.: ao lado do brand `Desmistificando IA`).
  - Texto internacionalizado (PT/EN/ES).
  - Link deve ser `href="../"`.
- **DoD:**
  1. Link visível na topbar da Plataforma em desktop e mobile.
  2. Clique navega corretamente para `/` (Guia).
  3. Texto do link traduzido nos três idiomas.
- **Dependências:** T08.

---

## FASE 6 — Validação Funcional Completa

### T10 — Validar todas as features do Guia [P0]

- **Objetivo:** confirmar zero regressão em todas as funcionalidades do Guia após a fusão.
- **Vínculo SPEC:** RF7, RNF3, CA2.
- **Checklist de validação:**
  - [ ] i18n PT → EN → ES → PT: todos os textos traduzidos corretamente.
  - [ ] Dark mode: toggle funciona; preferência persiste ao recarregar.
  - [ ] TOC lateral: destaca a seção visível conforme scroll (desktop).
  - [ ] TOC mobile: drawer abre e fecha; links navegam para as seções.
  - [ ] Copiar prompt: botão copia texto; feedback visual exibido temporariamente.
  - [ ] Voltar ao topo: botão aparece após 400 px de scroll; clique rola ao topo.
  - [ ] Layout responsivo: sem quebras em 320 px, 768 px e 1280 px.
  - [ ] Nenhum erro 404 no painel Network.
  - [ ] Nenhum erro no console JavaScript.
- **DoD:** todos os itens do checklist marcados como OK; evidência registrada (ex.: screenshot ou nota na task).
- **Dependências:** T08.

### T11 — Validar todas as features da Plataforma [P0]

- **Objetivo:** confirmar zero regressão em todas as funcionalidades da Plataforma após a fusão.
- **Vínculo SPEC:** RF8, RNF3, CA3.
- **Checklist de validação:**
  - [ ] i18n PT → EN → ES → PT: todos os textos traduzidos corretamente.
  - [ ] Dark mode: toggle funciona; preferência persiste ao recarregar.
  - [ ] Preferência de dark mode compartilhada com o Guia (navegar entre seções mantém o tema).
  - [ ] Aba Início: conteúdo exibido corretamente.
  - [ ] Aba Lições: catálogo carrega; busca e filtro por tópico funcionam.
  - [ ] Aba Quiz: questões carregam; resposta registrada; resultado exibido.
  - [ ] Aba Simulado: fluxo completo funciona.
  - [ ] Aba Histórico: tentativas anteriores exibidas.
  - [ ] Reset de progresso: funciona e limpa dados corretamente.
  - [ ] Nenhum erro 404 no painel Network.
  - [ ] Nenhum erro no console JavaScript.
- **DoD:** todos os itens do checklist marcados como OK; evidência registrada.
- **Dependências:** T09.

---

## FASE 7 — robots.txt e sitemap.xml

### T12 — Atualizar robots.txt e sitemap.xml [P1]

- **Objetivo:** garantir indexação correta do domínio unificado pelos mecanismos de busca.
- **Vínculo SPEC:** RF10, CA6.
- **Passos:**
  1. Revisar `robots.txt` — garantir que não bloqueia `/estudos/`.
  2. Atualizar `sitemap.xml` — incluir URL `https://desmistificando-ia.com/estudos/` além das URLs do Guia já existentes.
  3. Validar XML do sitemap com ferramenta online (ex.: XML Sitemap Validator).
- **DoD:**
  1. `robots.txt` permite crawling de `/` e `/estudos/`.
  2. `sitemap.xml` contém entradas para ambas as seções com `<lastmod>` atualizado.
  3. XML do sitemap válido sem erros de sintaxe.
- **Dependências:** T10, T11.

---

## FASE 8 — Gate OWASP e Encerramento

### T13 — Revisar OWASP-CHECKLIST.md para o repositório unificado [P0]

- **Objetivo:** garantir que a fusão não introduziu nenhuma vulnerabilidade nova e que o checklist cobre ambas as seções.
- **Vínculo SPEC:** RNF5, CA7.
- **Passos:**
  1. Copiar `estudos/OWASP-CHECKLIST.md` para a raiz do novo repositório (ou manter em `/estudos/` e criar um novo na raiz para o Guia).
  2. Revisar os itens do checklist considerando o contexto unificado (dois HTMLs, um único conjunto de assets).
  3. Verificar especificamente: ausência de `innerHTML` com entrada de usuário sem sanitização; CSP adequado; nenhum `eval()` ou `Function()` dinâmico; nenhum segredo em JS client-side.
  4. Fechar ou documentar formalmente cada item aberto.
- **DoD:**
  1. Nenhum item crítico ou alto em aberto sem mitigação formal.
  2. Checklist atualizado cobre tanto o Guia quanto a Plataforma.
- **Dependências:** T12.

### T14 — Verificação final de integridade dos arquivos [P1]

- **Objetivo:** confirmar que nenhum arquivo dos repositórios de origem foi perdido durante a fusão.
- **Vínculo SPEC:** RNF1, CA8.
- **Passos:**
  1. Listar todos os arquivos relevantes dos repos de origem (`git ls-files` em cada um).
  2. Confirmar presença de cada arquivo no novo repositório (exceto arquivos deliberadamente consolidados, como `estudos/styles.css` e `estudos/i18n.js`, que foram eliminados após unificação).
  3. Documentar a lista de arquivos eliminados intencionalmente e o racional.
- **DoD:**
  1. Nenhum arquivo não intencional ausente no novo repositório.
  2. Lista de arquivos eliminados intencionalmente documentada nesta task.
- **Dependências:** T13.

### T15 — Publicar no GitHub Pages / domínio de produção [P1]

- **Objetivo:** colocar o repositório unificado em produção no domínio `desmistificando-ia.com`.
- **Vínculo SPEC:** RNF8.
- **Passos:**
  1. Configurar GitHub Pages no repositório `desmistificando-ia` (branch `main`, pasta raiz `/`).
  2. Configurar CNAME / DNS para apontar `desmistificando-ia.com` para o GitHub Pages.
  3. Validar HTTPS ativo.
  4. Validar que `https://desmistificando-ia.com/` carrega o Guia.
  5. Validar que `https://desmistificando-ia.com/estudos/` carrega a Plataforma.
  6. Configurar redirects se necessário (arquivo `_redirects` para Netlify ou equivalente).
- **DoD:**
  1. Ambas as URLs públicas carregam sem erro, com HTTPS.
  2. Nenhuma URL pública existente retorna 404.
- **Dependências:** T14.

### T16 — Arquivar repositórios de origem [P2]

- **Objetivo:** sinalizar que `Guia-para-criacao-de-agentes` e `Material-de-estudo` não são mais os repositórios ativos.
- **Vínculo SPEC:** ADR-001.
- **Passos:**
  1. Adicionar aviso no `README.md` de cada repositório de origem apontando para o novo repo.
  2. Arquivar os repositórios no GitHub (Settings → Archive this repository) — sem deletar.
- **DoD:**
  1. Ambos os repos de origem marcados como arquivados no GitHub.
  2. README de cada um contém link para `desmistificando-ia`.
- **Dependências:** T15.

---

## Itens Futuros (Pós-fusão, escopo herdado da Plataforma)

> Estes itens existem na SPEC original da Plataforma e devem ser retomados após a conclusão da fusão. Não são bloqueantes para a entrega da fusão.

- **T-F1 (P0):** Criar pipeline de manifesto de conteúdo (RF-orig-1, RF-orig-2, RF-orig-10).
- **T-F2 (P0):** Implementar validação de integridade do manifesto (RNF-orig-2).
- **T-F3 (P0):** Integrar catálogo dinâmico na tela de Lições (RF-orig-3, RF-orig-10).
- **T-F4 (P0):** Implementar módulo de casos práticos com rubrica (RF-orig-5, RF-orig-6).
- **T-F5 (P0):** Consolidar score composto por tópico (RF-orig-6).
- **T-F6 (P1):** Autenticação + sincronização cloud com fallback local (RF-orig-7, RF-orig-8).
