# Seu primeiro agente de IA, sem mistério

Guia educacional, em português, que ensina qualquer pessoa (mesmo sem ser de TI) a criar seu primeiro agente de IA do zero, em 7 etapas, partindo de um problema real do dia a dia.

O guia é uma **single-page** estática em HTML, com CSS e JavaScript puros, estilizada com [Tailwind CSS](https://tailwindcss.com/) (via CDN) e ícones do [Font Awesome](https://fontawesome.com/).

## Como rodar localmente

Não precisa de build. Basta abrir `index.html` no navegador.

Recomendado servir via servidor local para evitar restrições de CORS (do clipboard e do `IntersectionObserver`):

```powershell
# Opção 1: extensão "Live Server" do VS Code (botão "Go Live")

# Opção 2: Python
python -m http.server 8000

# Opção 3: Node
npx serve .
```

Depois acesse <http://localhost:8000>.

## Estrutura

```
.
├── index.html              # página principal
├── README.md
├── .gitignore
├── assets/
│   ├── css/styles.css      # estilos customizados
│   ├── js/main.js          # dark mode, copiar prompt, TOC ativo, voltar ao topo
│   └── images/
│       ├── favicon.svg
│       └── og-image.png    # imagem para compartilhamento (Open Graph)
└── bkp/                    # versões anteriores do HTML
```

## Funcionalidades

- Modo claro / escuro com preferência salva em `localStorage`
- Índice (TOC) lateral com destaque do item ativo conforme o scroll
- TOC mobile via drawer
- Botões "Copiar prompt" em todos os exemplos
- Botão "Voltar ao topo"
- Responsivo (timeline zigue-zague em desktop, vertical à esquerda em mobile)

## Créditos

Autor: [Fernando Jorge](https://www.linkedin.com/in/fernandojorge/)
