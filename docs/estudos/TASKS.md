## Backlog de Tasks da SPEC

Legenda:
- P0: critico para viabilizar o produto
- P1: importante para robustez e experiencia
- P2: melhoria evolutiva

### P0 - Base Obrigatoria
1. Criar pipeline de manifesto de conteudo
- Objetivo: gerar catalogo dinamico de licoes a partir de markdowns da raiz.
- Vinculo SPEC: RF1, RF2, RF10.
- DoD:
1. Arquivo de manifesto gerado automaticamente.
2. Metadados minimos por licao presentes.
3. Nenhum cadastro manual hard-coded necessario para novos markdowns.
- Dependencias: nenhuma.

2. Implementar validacao de integridade do manifesto
- Objetivo: prevenir quebra da UI por dados inconsistentes.
- Vinculo SPEC: RNF2, CA1, CA2.
- DoD:
1. Validacao de campos obrigatorios.
2. Deteccao de duplicidade por id/origem.
3. Erros reportados com mensagem acionavel.
- Dependencias: Task 1.

3. Integrar catalogo dinamico na tela de licoes
- Objetivo: substituir fonte hard-coded do catalogo atual.
- Vinculo SPEC: RF3, RF10.
- DoD:
1. Busca e filtro por topico funcionais com dados dinamicos.
2. Total de licoes no dashboard refletindo base real.
3. Exibicao de rastreabilidade da fonte por licao.
- Dependencias: Tasks 1 e 2.

4. Implementar modulo de casos praticos com rubrica
- Objetivo: habilitar avaliacao pratica alem do quiz.
- Vinculo SPEC: RF5, RF6.
- DoD:
1. Caso pratico com criterios e pesos.
2. Registro de autoavaliacao e observacoes.
3. Persistencia da tentativa.
- Dependencias: Task 3.

5. Consolidar score composto por topico
- Objetivo: unificar resultado objetivo e pratico.
- Vinculo SPEC: RF6, CA3.
- DoD:
1. Formula inicial 60/40 aplicada.
2. Exibicao por topico no dashboard/historico.
3. Compatibilidade com dados legados locais.
- Dependencias: Task 4.

6. Implementar autenticacao e persistencia cloud
- Objetivo: permitir continuidade multi-dispositivo.
- Vinculo SPEC: RF7, RF9, CA4.
- DoD:
1. Login funcional.
2. Leitura e escrita de progresso por usuario.
3. Recuperacao de historico em segunda sessao/dispositivo.
- Dependencias: Task 5.

7. Implementar sync idempotente com fallback local
- Objetivo: resiliencia em cenarios offline/online.
- Vinculo SPEC: RF8, RNF1, CA5.
- DoD:
1. Tentativas offline salvas localmente.
2. Reconciliacao automatica na reconexao.
3. Sem duplicacao de tentativas apos sync.
- Dependencias: Task 6.

8. Implementar baseline OWASP Top 10 e ASVS L1
- Objetivo: garantir conformidade de seguranca obrigatoria no produto.
- Vinculo SPEC: RNF6, RNF7, CA7, CA8.
- DoD:
1. Controles mapeados e implementados para OWASP Top 10 aplicavel.
2. Checklist ASVS L1 aplicavel preenchido com evidencias.
3. Sem vulnerabilidade critica/alta aberta sem mitigacao aprovada.
- Dependencias: Tasks 3, 6 e 7.

### P1 - Qualidade e Operacao
9. Criar smoke tests de fluxo principal
- Vinculo SPEC: CA3, CA6.
- DoD:
1. Fluxo licao -> quiz -> caso pratico -> historico validado.
2. Execucao em desktop e mobile.
- Dependencias: Tasks 3, 4, 5.

10. Adicionar monitoramento basico de erros
- Vinculo SPEC: RNF4.
- DoD:
1. Captura de erro de carga/sync/auth.
2. Registro com contexto minimo para diagnostico.
- Dependencias: Tasks 6 e 7.

11. Criar checklist operacional de entrada de novo conteudo
- Vinculo SPEC: CA1, CA2.
- DoD:
1. Checklist documentado no projeto.
2. Inclui validacao de manifesto e cobertura minima por topico.
- Dependencias: Tasks 1 e 2.

12. Criar checklist e evidencia de seguranca OWASP por release
- Vinculo SPEC: RNF6, RNF8, CA7.
- DoD:
1. Checklist de seguranca versionado no projeto.
2. Evidencias de execucao anexadas por release.
3. Bloqueio de release se houver severidade critica/alta.
- Dependencias: Task 8.

### P2 - Evolucao
13. Calibrar distribuicao de questoes por topico
- Vinculo SPEC: RF4, RF6.
- DoD:
1. Simulado com equilibrio minimo por topico.
2. Reducao de vies de aleatoriedade.
- Dependencias: Task 5.

14. Melhorar UX de feedback de lacunas de estudo
- Vinculo SPEC: objetivos de produto.
- DoD:
1. Recomendacoes claras por topico fraco.
2. Navegacao direta para licoes relacionadas.
- Dependencias: Task 5.

15. Expandir cobertura de avaliacao por topico
- Vinculo SPEC: politicas de conteudo.
- DoD:
1. Minimo de 3 questoes objetivas por topico ativo.
2. Alerta para topicos abaixo da cobertura minima.
- Dependencias: Tasks 1 e 13.

## Ordem Recomendada de Execucao
1. 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
2. 9, 10, 11 e 12 em paralelo apos blocos de dependencia
3. 13, 14 e 15 como ciclo evolutivo continuo
