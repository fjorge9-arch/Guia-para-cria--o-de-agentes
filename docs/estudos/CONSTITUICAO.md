## Constituicao do Projeto

Documento normativo da Plataforma de Estudos orientada por SDD.

### 1. Proposito
Garantir evolucao segura, rastreavel e incremental do produto, mantendo a SPEC como fonte de verdade de requisitos e aceite.

### 2. Fonte de Verdade
- A especificacao oficial e o documento [SPEC-SDD.md](SPEC-SDD.md).
- Em caso de conflito entre implementacao e especificacao, prevalece a especificacao ate que seja formalmente revisada.

### 3. Principios Inegociaveis
1. SDD-first: toda mudanca relevante precisa de vinculacao explicita com requisito e criterio de aceite.
2. Rastreabilidade ponta a ponta: objetivo -> requisito -> task -> validacao -> entrega.
3. Evolucao incremental: priorizar passos pequenos, reversiveis e testaveis.
4. Integridade de dados: nenhuma mudanca pode comprometer historico, sincronizacao ou consistencia de progresso.
5. UX funcional: fluxos principais devem permanecer operacionais em desktop e mobile.

### 4. Guardrails Tecnicos
1. Stack atual obrigatoria neste ciclo: HTML, CSS e JavaScript.
2. Nao migrar framework sem ADR aprovado.
3. Conteudo de licao neste ciclo: resumo + rastreabilidade de fonte; sem render full markdown.
4. Persistencia deve suportar fallback local quando cloud estiver indisponivel.
5. Sync deve ser idempotente e tolerante a reconexao.

### 5. Politicas de Conteudo
1. Novos markdowns na raiz devem entrar no catalogo sem cadastro manual hard-coded.
2. Cada licao precisa de metadados minimos validos (id, titulo, topico, resumo, origem).
3. Cobertura minima de avaliacao por topico: pelo menos 3 questoes objetivas para liberacao de conteudo.

### 6. Politicas de Avaliacao
1. Modelo misto obrigatorio: multipla escolha + caso pratico com rubrica.
2. Score composto inicial: 60% objetivo e 40% pratico.
3. Resultado deve exibir desempenho por topico e historico temporal.

### 7. Qualidade e Pronto para Entrega
Uma task so pode ser concluida quando:
1. Requisito da SPEC associado estiver atendido.
2. Criterio de aceite correspondente estiver validado.
3. Nao houver regressao critica nas abas Inicio, Licoes, Quiz, Simulado e Historico.
4. Evidencias de validacao estiverem registradas (teste manual ou automatizado).

### 8. Gestao de Mudancas
1. Mudancas de escopo exigem atualizacao da SPEC antes da implementacao.
2. Mudancas estruturais exigem ADR.
3. Toda decisao tecnica relevante deve ser documentada em linguagem objetiva e verificavel.

### 9. Politica de Excecao
Se houver urgencia operacional, pode-se aplicar mitigacao temporaria somente quando:
1. O risco de indisponibilidade for maior que o risco da excecao.
2. Houver registro da excecao, prazo de reversao e task de correcao definitiva.

### 10. Vigencia
Esta constituicao entra em vigor imediatamente e permanece valida ate substituicao formal.

### 11. Politica de Seguranca OWASP (Obrigatoria)
1. Todas as entregas devem atender ao OWASP Top 10 vigente e ao baseline OWASP ASVS L1 para aplicacoes web.
2. Nenhuma funcionalidade segue para entrega com falha de seguranca classificada como critica ou alta.
3. Entradas de usuario devem ser validadas por allowlist e saidas devem ser tratadas para evitar injecao e XSS.
4. Segredos nunca podem ser hard-coded em codigo, markdown, commits ou arquivos de configuracao versionados.
5. Fluxos de autenticacao e sessao devem usar principios de minimo privilegio, expiracao de sessao e revogacao.
6. Dependencias devem passar por verificacao de vulnerabilidade antes de release.
7. Toda excecao de seguranca exige registro formal de risco, prazo de correcao e aprovacao humana explicita.

### 12. Gate de Seguranca para Release
Uma release so pode ser aprovada quando:
1. Checklist de seguranca OWASP estiver 100% concluido.
2. Nao houver vulnerabilidades abertas de severidade critica/alta sem mitigacao aprovada.
3. Evidencias de testes de seguranca estiverem anexadas ao ciclo da entrega.
