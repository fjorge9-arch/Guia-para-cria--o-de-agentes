# Site de Estudos - Base de Conhecimento

MVP de plataforma de estudo com:
- Licoes por tema
- Quiz rapido
- Simulado cronometrado
- Avaliacao de desempenho por topico
- Historico local (localStorage)

## Como executar localmente

Opcao 1 (Python):

```powershell
cd d:\Projetos\Material-de-estudo\site-estudos
python -m http.server 8080
```

Abrir: http://localhost:8080

Opcao 2 (VS Code Live Server):
- Abra a pasta `site-estudos`
- Clique em `index.html`
- Execute "Open with Live Server"

## Estrutura

- `index.html`: estrutura da interface
- `styles.css`: estilo visual
- `content.js`: base de licoes e banco de questoes
- `app.js`: logica de navegacao, quiz, simulado e avaliacao
