# Seu Primeiro Agente de IA, Sem Mistério · Your First AI Agent, No Mystery

> 🇧🇷 **Português** | 🇺🇸 [English below](#your-first-ai-agent-no-mystery)

---

## Seu Primeiro Agente de IA, Sem Mistério

Guia educacional que ensina qualquer pessoa — mesmo sem formação em TI — a criar seu primeiro agente de IA do zero, em 7 etapas claras, partindo de um problema real do dia a dia.

A proposta é simples: você não precisa saber programar. Você precisa de um problema real e disposição para seguir os passos. O resto se aprende fazendo.

O projeto é uma **single-page** estática em HTML, construída com CSS e JavaScript puros, estilizada com [Tailwind CSS](https://tailwindcss.com/) via CDN e ícones do [Font Awesome](https://fontawesome.com/). Sem frameworks, sem build step, sem dependências a instalar.

### Funcionalidades

- **Internacionalização (i18n)** — suporte completo a Português, Inglês (US) e Espanhol (LatAm); idioma detectado automaticamente pelo navegador, com preferência salva em `localStorage`
- **Modo claro / escuro** — alternância manual com persistência via `localStorage`; respeita a preferência do sistema operacional na primeira visita
- **Índice lateral (TOC)** — destaca automaticamente a seção visível conforme o scroll, usando `IntersectionObserver`
- **TOC mobile** — acessível via drawer deslizante, sem ocupar espaço em tela pequena
- **Copiar prompt** — botão em todos os blocos de exemplo para copiar o texto com um clique, com feedback visual temporário
- **Voltar ao topo** — botão flutuante que aparece após 400 px de scroll
- **Layout responsivo** — timeline em zigue-zague no desktop, vertical à esquerda no mobile

### Estrutura de arquivos

```
.
├── index.html              # página principal (bindings data-i18n, data-i18n-html)
├── README.md
├── .gitignore
├── assets/
│   ├── css/
│   │   └── styles.css      # estilos customizados (dark mode, TOC, lang-switcher, hero)
│   ├── js/
│   │   ├── i18n.js         # dicionário de traduções PT/EN/ES + engine de i18n
│   │   └── main.js         # dark mode, copiar prompt, TOC ativo, voltar ao topo
│   └── images/
│       ├── favicon.svg
│       └── og-image.png    # imagem Open Graph para compartilhamento
└── bkp/                    # versões anteriores preservadas
```

### Como rodar localmente

Não há etapa de build. Basta servir os arquivos via servidor local (necessário para o clipboard e o `IntersectionObserver` funcionarem corretamente):

```powershell
# Opção 1: extensão "Live Server" do VS Code → clique em "Go Live"

# Opção 2: Python
python -m http.server 8000

# Opção 3: Node
npx serve .
```

Acesse em <http://localhost:8000>.

### Créditos

Autor: [Fernando Jorge da Silva](https://www.linkedin.com/in/fernandojorge/)

---

## Your First AI Agent, No Mystery

<a name="your-first-ai-agent-no-mystery"></a>

An educational guide that teaches anyone — regardless of technical background — how to build their first AI agent from scratch, following 7 clear steps, starting from a real everyday problem.

The premise is straightforward: you don't need to know how to code. You need a real problem and the willingness to follow the steps. The rest you learn by doing.

The project is a static **single-page** application built with plain HTML, CSS, and JavaScript, styled with [Tailwind CSS](https://tailwindcss.com/) via CDN and icons from [Font Awesome](https://fontawesome.com/). No frameworks, no build step, no dependencies to install.

### Features

- **Internationalization (i18n)** — full support for Portuguese, English (US), and Spanish (LatAm); language is detected automatically from the browser, with preference saved in `localStorage`
- **Light / dark mode** — manual toggle with `localStorage` persistence; respects the OS preference on first visit
- **Sidebar table of contents (TOC)** — automatically highlights the visible section as you scroll, powered by `IntersectionObserver`
- **Mobile TOC** — accessible via a slide-in drawer, keeping small screens uncluttered
- **Copy prompt** — one-click copy button on every example block, with temporary visual feedback
- **Back to top** — floating button that appears after 400 px of scroll
- **Responsive layout** — zigzag timeline on desktop, left-aligned vertical on mobile

### File structure

```
.
├── index.html              # main page (data-i18n and data-i18n-html bindings)
├── README.md
├── .gitignore
├── assets/
│   ├── css/
│   │   └── styles.css      # custom styles (dark mode, TOC, lang-switcher, hero)
│   ├── js/
│   │   ├── i18n.js         # PT/EN/ES translation dictionary + i18n engine
│   │   └── main.js         # dark mode, copy prompt, active TOC, back to top
│   └── images/
│       ├── favicon.svg
│       └── og-image.png    # Open Graph image for social sharing
└── bkp/                    # preserved previous versions
```

### Running locally

No build step required. Just serve the files through a local server (required for clipboard and `IntersectionObserver` to work correctly):

```bash
# Option 1: VS Code "Live Server" extension → click "Go Live"

# Option 2: Python
python -m http.server 8000

# Option 3: Node
npx serve .
```

Then open <http://localhost:8000>.

### Credits

Author: [Fernando Jorge da Silva](https://www.linkedin.com/in/fernandojorge/)
