## SPEC-SDD — Fusão dos Projetos Desmistificando IA

Fonte de verdade para a fusão dos repositórios `Guia-para-criacao-de-agentes` e `Material-de-estudo` em um único repositório `desmistificando-ia`, e para a evolução do produto unificado em HTML/CSS/JS.

---

### Contexto do Problema

Dois repositórios complementares coexistem sob o mesmo domínio (`desmistificando-ia.com`) e compartilham o mesmo autor, stack, i18n e identidade visual, mas são mantidos de forma independente:

| Repositório | Papel atual | Pontos de fricção |
|---|---|---|
| `Guia-para-criacao-de-agentes` | Landing page / guia introdutório de 7 etapas | i18n e dark mode duplicados; sem link direto para a plataforma |
| `Material-de-estudo` (`estudos/`) | Plataforma de lições, quiz, casos práticos e histórico | i18n e CSS duplicados; sem link de retorno ao guia |

Manter dois repositórios gera:

- Código duplicado (engine i18n, dark mode, tipografia, variáveis CSS).
- Deploy e versionamento desacoplados, dificultando consistência visual.
- Ausência de navegação entre as duas seções no mesmo domínio.
- Overhead de manutenção duplicado a cada evolução de componentes comuns.

---

### Objetivos de Produto

1. Fundir os dois projetos em um único repositório `desmistificando-ia`.
2. O Guia vira a raiz do domínio (`/index.html`), funcionando como landing page e ponto de entrada.
3. A Plataforma de Estudos fica em `/estudos/`, preservando toda a sua estrutura interna.
4. Um único diretório `/assets/` serve ambas as seções, eliminando duplicações.
5. Navegação cruzada explícita entre o Guia e a Plataforma, em ambas as direções.
6. Preservar o histórico de commits de ambos os repositórios de origem.

---

### Não Objetivos (Fora de Escopo deste ciclo)

- Migrar para qualquer framework (React, Vue, Astro, etc.).
- Redesenhar a identidade visual além do necessário para unificação.
- Adicionar novas funcionalidades além das já existentes em ambos os projetos.
- Alterar o conteúdo das lições markdown.
- Implementar autenticação ou sincronização cloud (escopo já definido na SPEC original da Plataforma).
- Emitir certificados, badges ou trilhas gamificadas.

---

### Stakeholders e Usuários

- **Autor / dono do conteúdo:** Fernando Jorge da Silva — responsável por evoluir guia e lições.
- **Aluno / usuário final:** consome o guia, acessa lições, realiza avaliações e acompanha progresso.
- **Operação técnica:** valida integridade da build, disponibilidade do domínio e ausência de regressões.

---

### Decisões Arquiteturais (ADRs)

**ADR-001 — Repositório de destino**
- Decisão: criar novo repositório `desmistificando-ia` (owner: `fjorge9-arch`).
- Racional: evitar que um dos repos "absorva" o outro assimetricamente; nome reflete o domínio unificado.

**ADR-002 — Estrutura de diretórios**

```
desmistificando-ia/
├── index.html              # Guia (landing page do domínio)
├── robots.txt
├── sitemap.xml
├── README.md
├── assets/
│   ├── css/
│   │   └── styles.css      # CSS unificado (compartilhado + overrides por seção)
│   ├── js/
│   │   ├── i18n.js         # dicionário unificado PT/EN/ES (Guia + Plataforma)
│   │   └── main.js         # utilitários compartilhados (dark mode, scroll, clipboard)
│   └── images/
│       ├── favicon.svg
│       └── og-image.png
└── estudos/
    ├── index.html          # Plataforma de Estudos
    ├── app.js
    ├── content.js
    ├── content/            # markdowns de lições (sem alteração)
    │   ├── agil/
    │   ├── arquitetura/
    │   ├── dados/
    │   ├── dynamics365/
    │   ├── engenharia/
    │   ├── erp/
    │   ├── ia/
    │   ├── power-platform/
    │   ├── qa/
    │   ├── requisitos/
    │   └── sdlc-agentes/
    ├── CONSTITUICAO.md     # (pode apontar para raiz como fonte de verdade)
    ├── SPEC-SDD.md         # (pode apontar para raiz como fonte de verdade)
    ├── TASKS.md
    └── OWASP-CHECKLIST.md
```

- Racional: separação clara de responsabilidades; `/assets/` na raiz é referenciado por ambas as seções com paths relativos.

**ADR-003 — Unificação de CSS**
- Decisão: auditar seletores comuns entre `assets/css/styles.css` (Guia) e `estudos/styles.css` (Plataforma); extrair tokens compartilhados (variáveis CSS custom properties, tipografia, dark mode) para o `assets/css/styles.css` unificado; manter overrides específicos de seção em classes prefixadas (`.guide-*` para o Guia, `.estudos-*` para a Plataforma dentro do mesmo arquivo).
- Racional: um único arquivo reduz drift visual e simplifica manutenção.

**ADR-004 — Unificação de i18n**
- Decisão: fundir os dois dicionários (PT/EN/ES) em um único `assets/js/i18n.js`; namespaces de chaves existentes são preservados; conflitos de chave com mesmo nome e valor diferente são resolvidos manualmente antes do merge.
- Racional: engine de i18n idêntica em ambos os projetos — não há razão para mantê-las duplicadas.

**ADR-005 — Unificação de main.js**
- Decisão: fundir os utilitários comuns (dark mode toggle, `localStorage` persistence, scroll-to-top, clipboard) em um único `assets/js/main.js`; lógica exclusiva de cada seção (TOC com IntersectionObserver do Guia; abas, quiz, progresso da Plataforma) permanece nos arquivos JS próprios de cada seção (`estudos/app.js`).
- Racional: evitar duplicação de lógica de dark mode que já usa a mesma chave `theme` em ambos.

**ADR-006 — Preservação de histórico git**
- Decisão: usar `git subtree` para importar os commits de origem de cada repositório no novo repositório, preservando autoria e timestamps.
- Racional: rastreabilidade completa da evolução do código; sem `squash` de histórico.

**ADR-007 — localStorage compartilhada**
- Decisão: chaves `theme` e `lang` são compartilhadas (mesma chave, mesmo domínio — o browser já as compartilha por origem); chaves de progresso da Plataforma (`studyProgress`, etc.) permanecem isoladas e inalteradas.
- Racional: o usuário que alternava dark mode no Guia já esperaria que a preferência persistisse — agora persiste de forma explícita e documentada.

**ADR-008 — Hospedagem em Cloudflare Pages (Git integration)**
- Decisão: o site unificado é publicado em **Cloudflare Pages** com integração direta ao repositório `desmistificando-ia` no GitHub. Build command vazio (sem step de build — RNF4); output directory = raiz do repositório (`/`). Produção é o branch `main`; demais branches e Pull Requests geram **Preview Deployments** automáticos em URLs `<hash>.<projeto>.pages.dev`.
- Racional: o conteúdo é 100% estático; Pages oferece CDN global, HTTPS automático, previews por PR sem custo adicional e integra-se nativamente ao DNS da Cloudflare, que já hospeda a zona `desmistificando-ia.com`. Evita-se a dependência do GitHub Pages e mantém-se infra concentrada em um único provedor.

**ADR-009 — DNS e custom domain**
- Decisão: o domínio `desmistificando-ia.com` já está delegado à Cloudflare (DNS + proxy ativo). O custom domain é vinculado ao projeto Pages via Pages → Custom domains, gerando automaticamente registros DNS gerenciados (CNAME flattening na apex). Não há nameservers externos a alterar.
- Racional: aproveita a zona já existente; HTTPS via certificado universal Cloudflare; sem migração de DNS.

**ADR-010 — Cutover sem downtime**
- Decisão: o deploy em produção é validado primeiro no domínio de preview (`<projeto>.pages.dev`) e em uma URL `staging.desmistificando-ia.com` apontada ao mesmo projeto, antes de promover o apex para o novo Pages. A troca DNS/custom-domain do apex ocorre apenas após smoke test verde. O repositório/host atual em produção permanece servindo até a promoção; em caso de regressão, o custom domain é desvinculado do Pages, restaurando o destino anterior.
- Racional: o site já está em produção; usuários reais consomem o domínio. O risco de servir um build quebrado é mitigado por validar o conteúdo idêntico em um hostname secundário antes do swap.

---

### Requisitos Funcionais

**RF1 — Migração do Guia para a raiz**
Todos os arquivos do Guia (`index.html`, `assets/css/styles.css`, `assets/js/i18n.js`, `assets/js/main.js`, `assets/images/*`, `robots.txt`, `sitemap.xml`) devem compor a raiz do novo repositório. Paths relativos dentro do `index.html` do Guia devem permanecer funcionais após a migração.

**RF2 — Migração da Plataforma de Estudos para `/estudos/`**
Todos os arquivos da Plataforma (`estudos/index.html`, `estudos/app.js`, `estudos/content.js`, `estudos/i18n.js`, `estudos/styles.css`, `estudos/content/**`) devem ser migrados para `/estudos/` no novo repositório, com paths relativos corrigidos.

**RF3 — Unificação de CSS**
O arquivo `assets/css/styles.css` do repositório unificado deve cobrir os estilos de ambas as seções, com variáveis CSS compartilhadas (cores, tipografia, dark mode) e overrides específicos de seção em classes prefixadas onde necessário. O arquivo `estudos/styles.css` original é eliminado após a unificação.

**RF4 — Unificação de i18n**
O arquivo `assets/js/i18n.js` do repositório unificado deve conter os dicionários PT/EN/ES de ambos os projetos em um único objeto, sem duplicação de chaves. A engine de tradução (função `t()`, detecção de idioma, persistência em `localStorage`) é compartilhada.

**RF5 — Unificação de utilitários JS comuns**
O arquivo `assets/js/main.js` do repositório unificado deve conter os utilitários compartilhados: dark mode toggle, persistência de preferências em `localStorage`, scroll-to-top e clipboard. A inicialização de features específicas de cada seção permanece nos arquivos JS da respectiva seção.

**RF6 — Navegação cruzada entre seções**
O Guia (`/index.html`) deve conter um link visível para a Plataforma de Estudos (`/estudos/`). A Plataforma deve conter um link visível de retorno ao Guia (`/`). Ambos os links devem ser acessíveis em desktop e mobile.

**RF7 — Preservação de todas as features existentes no Guia**
Após a fusão, as seguintes features do Guia devem continuar funcionando sem regressão: i18n (PT/EN/ES), dark mode, TOC lateral com IntersectionObserver, TOC mobile via drawer, copiar prompt com feedback visual, voltar ao topo, layout responsivo (desktop/mobile).

**RF8 — Preservação de todas as features existentes na Plataforma**
Após a fusão, as seguintes features da Plataforma devem continuar funcionando sem regressão: i18n (PT/EN/ES), dark mode, abas (Início, Lições, Quiz, Simulado, Histórico), busca e filtro de lições, quiz com registro de tentativas, casos práticos com rubrica e autoavaliação, progresso persistido em `localStorage`.

**RF9 — Conteúdo markdown preservado sem alteração**
Todos os arquivos markdown em `estudos/content/**/*.md` devem ser migrados bit a bit para `/estudos/content/**/*.md` sem qualquer alteração de conteúdo, nome de arquivo ou estrutura de diretórios.

**RF10 — robots.txt e sitemap.xml atualizados**
O `robots.txt` e `sitemap.xml` na raiz do novo repositório devem cobrir tanto as URLs do Guia quanto as da Plataforma (`/estudos/`), garantindo correta indexação do domínio unificado.

**RF11 — Paths internos corrigidos**
Todas as referências a arquivos (CSS, JS, imagens, fontes) dentro dos HTMLs de ambas as seções devem apontar corretamente para `/assets/` após a unificação, sem links quebrados.

**RF12 — Projeto Cloudflare Pages provisionado**
Um projeto Cloudflare Pages deve ser criado e conectado ao repositório `desmistificando-ia` no GitHub, com: production branch = `main`; build command = vazio; build output directory = `/` (raiz); framework preset = "None"; node version = não aplicável. Cada push em `main` deve disparar deploy de produção automaticamente.

**RF13 — Preview Deployments por Pull Request**
Toda PR aberta contra `main` deve gerar automaticamente uma URL de preview no formato `<hash>.<projeto>.pages.dev`. A URL de preview deve ser comentada na PR pelo bot do Cloudflare Pages (integração GitHub padrão) e deve refletir o build da branch da PR sem afetar produção.

**RF14 — Custom domain apex e www**
O custom domain `desmistificando-ia.com` (apex) deve ser vinculado ao projeto Pages via Pages → Custom domains, com certificado universal Cloudflare ativo. O hostname `www.desmistificando-ia.com` deve resolver para o mesmo destino (redirect 301 para o apex ou bind direto, conforme decisão operacional). Adicionalmente, um hostname `staging.desmistificando-ia.com` deve ser vinculado ao mesmo projeto para validação pré-cutover.

**RF15 — Headers e cache de assets estáticos**
O projeto Pages deve servir os assets com headers adequados a um site estático: `Cache-Control` longo (≥ 1 ano) para arquivos em `/assets/` (imutáveis com hash de versão quando aplicável); `Cache-Control` curto/no-cache para `index.html` e `estudos/index.html` (para que mudanças sejam refletidas imediatamente). Configurado via arquivo `_headers` na raiz do repositório.

**RF16 — Redirects de compatibilidade**
Um arquivo `_redirects` na raiz do repositório deve cobrir: redirect de `www.desmistificando-ia.com/*` para `https://desmistificando-ia.com/:splat` (301); quaisquer URLs antigas conhecidas das duas seções de origem que mudaram de path durante a fusão. Sem redirects, nenhuma URL pública previamente indexada pode retornar 404.

---

### Requisitos Não Funcionais

**RNF1 — Zero perda de dados**
Nenhum arquivo de conteúdo, código ou configuração deve ser perdido durante a fusão.

**RNF2 — Histórico git preservado**
Os commits de ambos os repositórios de origem devem estar acessíveis no histórico do novo repositório, com autoria e timestamps originais.

**RNF3 — Zero regressão funcional**
Todas as features listadas em RF7 e RF8 devem passar por validação explícita antes do encerramento de cada fase da migração.

**RNF4 — Stack restrita**
HTML, CSS e JavaScript puros. Nenhuma dependência de framework, bundler ou step de build é introduzida neste ciclo.

**RNF5 — Conformidade OWASP**
Aderência ao OWASP Top 10 vigente e ao baseline OWASP ASVS L1. Nenhuma vulnerabilidade crítica ou alta em aberto no momento da entrega de cada fase.

**RNF6 — Zero segredos hard-coded**
Nenhuma credencial, token ou chave de API pode ser adicionada a qualquer artefato versionado.

**RNF7 — Operabilidade local**
Ambas as seções devem funcionar corretamente a partir de servidor local (Live Server, `python -m http.server`, `npx serve`), sem erros de CORS ou paths quebrados.

**RNF8 — Compatibilidade de domínio**
Após a migração para produção, nenhuma URL pública existente deve retornar 404 sem redirect adequado configurado.

**RNF9 — Cutover sem downtime**
A promoção do novo projeto Cloudflare Pages para o apex `desmistificando-ia.com` deve ocorrer apenas após validação verde em `staging.desmistificando-ia.com` e em uma URL `*.pages.dev`. Em caso de regressão crítica detectada após o cutover, deve existir caminho de rollback documentado e executável em ≤ 15 minutos (desvincular custom domain do novo projeto e restaurar o destino anterior).

**RNF10 — Segredos do pipeline fora do repositório**
Tokens da Cloudflare API (caso usados para deploy via Wrangler em CI fora da Git integration nativa) devem residir exclusivamente em GitHub Actions Secrets ou em Cloudflare Pages environment variables (escopo de produção e preview separados). Nenhum token pode ser commitado, nem mesmo em arquivos de exemplo.

**RNF11 — HTTPS obrigatório e HSTS**
O domínio de produção deve servir exclusivamente via HTTPS (Cloudflare SSL/TLS mode = Full strict). Recomenda-se HSTS habilitado com `max-age` ≥ 6 meses após validação inicial de estabilidade (não obrigatório no primeiro deploy, mas registrado como follow-up).

---

### Contratos de Dados e Interfaces

**localStorage (compartilhado por origem — mesmo domínio)**

| Chave | Proprietário | Valores | Regra |
|---|---|---|---|
| `theme` | Compartilhado | `"light"` \| `"dark"` | Persist dark mode — já idêntico em ambos |
| `lang` | Compartilhado | `"pt"` \| `"en"` \| `"es"` | Persist idioma |
| `studyProgress` | Plataforma | objeto JSON | Não alterado pela migração |
| Outros da Plataforma | Plataforma | — | Não alterados |

**Paths de referência entre seções**

| De | Para | Path relativo |
|---|---|---|
| `/index.html` | `/estudos/index.html` | `./estudos/` |
| `/estudos/index.html` | `/index.html` | `../` |
| `/index.html` | `/assets/css/styles.css` | `./assets/css/styles.css` |
| `/estudos/index.html` | `/assets/css/styles.css` | `../assets/css/styles.css` |
| `/estudos/index.html` | `/assets/js/i18n.js` | `../assets/js/i18n.js` |

---

### Fluxos de Usuário (Happy Path após fusão)

1. Usuário acessa `desmistificando-ia.com` → vê o Guia (landing page) com link visível para a Plataforma.
2. Usuário clica em "Acessar Plataforma de Estudos" → navega para `/estudos/` sem recarregamento de preferências (dark mode e lang já persistidos).
3. Usuário seleciona lição, realiza quiz, registra caso prático — tudo como antes da fusão.
4. Usuário volta ao Guia pelo link na Plataforma → preferências mantidas.

### Fluxos de Exceção

1. **Path quebrado após migração:** link retorna 404 → identificado no checklist de validação pré-entrega; corrigido antes de fechar a task.
2. **Conflito de chave i18n:** mesma chave com valor diferente nos dois dicionários → resolvido manualmente antes do merge; decisão registrada na task correspondente.
3. **Regressão de feature:** feature deixa de funcionar após unificação de CSS ou JS → task bloqueada até correção e re-validação.
4. **Falha de segurança detectada:** vulnerabilidade classificada como crítica ou alta → bloqueia entrega da fase até correção ou mitigação formal aprovada.

---

### Critérios de Aceite (Definition of Done da Fusão)

**CA1:** O repositório `desmistificando-ia` existe no GitHub com histórico de commits de ambos os repositórios de origem preservado.

**CA2:** `https://desmistificando-ia.com/` exibe o Guia completo sem erros no console e com todas as features do RF7 operacionais.

**CA3:** `https://desmistificando-ia.com/estudos/` exibe a Plataforma completa sem erros no console e com todas as features do RF8 operacionais.

**CA4:** Existe link funcional do Guia para a Plataforma e da Plataforma para o Guia, testados em desktop e mobile.

**CA5:** Não existe mais de uma cópia dos arquivos `i18n.js` (unificado em `/assets/js/i18n.js`); `styles.css` da Plataforma foi eliminado e substituído pela referência ao `/assets/css/styles.css` unificado.

**CA6:** `sitemap.xml` e `robots.txt` incluem as URLs de ambas as seções.

**CA7:** Checklist OWASP (`OWASP-CHECKLIST.md`) revisado e sem item crítico/alto em aberto.

**CA8:** Nenhum arquivo dos repositórios de origem foi perdido — verificação por diff completo de arquivos.

**CA9:** Projeto Cloudflare Pages conectado ao repositório `desmistificando-ia` está deployando `main` automaticamente em produção, com último build verde visível no dashboard Pages.

**CA10:** Pelo menos uma PR de exemplo (real ou de teste) gerou Preview Deployment funcional em `<hash>.<projeto>.pages.dev`, com URL comentada na PR pela integração Cloudflare/GitHub.

**CA11:** `https://desmistificando-ia.com/` e `https://desmistificando-ia.com/estudos/` estão servidos pelo novo projeto Pages, com HTTPS válido (cadeado verde, SSL/TLS = Full strict), sem mixed content e sem 404 em recursos referenciados.

**CA12:** Arquivos `_headers` e `_redirects` estão na raiz do repositório, versionados, e seu efeito foi verificado em produção (cache headers corretos via `curl -I`; redirect 301 de `www` para apex).

**CA13:** Procedimento de rollback documentado em `fusion/TASKS.md` (T15) e validado em ensaio (dry run ou execução real durante validação de staging).

---

### Fases de Migração

| Fase | Nome | Requisitos cobertos | Critérios de aceite |
|---|---|---|---|
| 1 | Setup do novo repositório | — | CA1 (parcial) |
| 2 | Importar Guia (raiz) | RF1, RF9 (imagens) | CA2 (parcial) |
| 3 | Importar Plataforma (`/estudos/`) | RF2, RF9 | CA3 (parcial) |
| 4 | Unificação de assets | RF3, RF4, RF5, RF11 | CA5 |
| 5 | Navegação cruzada | RF6 | CA4 |
| 6 | Validação funcional completa | RF7, RF8 | CA2, CA3 |
| 7 | robots.txt + sitemap.xml | RF10 | CA6 |
| 8 | Gate OWASP e encerramento | RNF5, RNF6 | CA7, CA8 |
| 9 | Provisionamento do projeto Cloudflare Pages | RF12, RF13, RF15, RF16, RNF10 | CA9, CA10, CA12 |
| 10 | Validação em staging.desmistificando-ia.com | RNF9 | CA11 (parcial), CA13 |
| 11 | Cutover do apex para Cloudflare Pages | RF14, RNF8, RNF9, RNF11 | CA11 |
