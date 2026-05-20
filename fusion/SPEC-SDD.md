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
