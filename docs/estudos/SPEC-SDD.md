## Spec: Plataforma de Estudos Orientada por SDD

Fonte de verdade para evolucao do website em HTML/CSS/JS, com ingestao automatica de documentos markdown, avaliacao mista (quiz + caso pratico) e sincronizacao cloud com autenticacao.

**Contexto do Problema**
- O repositório cresce continuamente com novos markdowns e o MVP atual depende de cadastro manual em JavaScript.
- A avaliacao atual e majoritariamente objetiva e nao mede aplicacao pratica com rubrica.
- O progresso local isolado impede continuidade multi-dispositivo.

**Objetivos de Produto**
- Transformar a base de conhecimento em experiencia de estudo continua, com atualizacao automatica de licoes.
- Medir conhecimento com dois formatos complementares: multipla escolha e casos praticos.
- Permitir historico e progresso sincronizados por usuario autenticado.

**Nao Objetivos (Fora de Escopo deste ciclo)**
- Renderizar markdown completo dentro da UI de licao.
- Emitir certificados, badges formais ou trilhas gamificadas completas.
- Construir CMS editorial completo para autoria de conteudo.

**Stakeholders e Usuarios**
- Dono do conteudo: responsavel por adicionar markdowns no repositorio.
- Aluno/usuario final: consome licoes, realiza avaliacoes e acompanha progresso.
- Operacao tecnica: valida integridade da base e disponibilidade do sync.

**Decisoes Arquiteturais (ADRs resumidos)**
- ADR-001 Stack: manter HTML/CSS/JS puro para evolucao incremental e baixo custo de entrada.
- ADR-002 Conteudo de licao: exibir resumo + rastreabilidade da fonte, sem parsing/renderizacao full markdown.
- ADR-003 Avaliacao: adotar modelo misto com score consolidado por topico.
- ADR-004 Persistencia: incluir autenticacao + nuvem com fallback local resiliente.

**Requisitos Funcionais**
1. Catalogo de licoes deve ser gerado automaticamente a partir de todos os arquivos markdown da raiz.
2. Cada licao deve possuir id estavel, titulo, topico, resumo, origem e metadados minimos.
3. A pagina de licoes deve suportar busca textual e filtro por topico usando dados dinamicos.
4. Quiz rapido e simulado devem continuar disponiveis e registrar tentativas por usuario.
5. Casos praticos devem registrar enunciado, rubrica, autoavaliacao e observacoes.
6. O sistema deve calcular score composto por topico considerando modos objetivo e pratico.
7. Usuario autenticado deve ter progresso e historico sincronizados em nuvem.
8. Em falha de rede, o sistema deve operar em modo degradado local e reconciliar depois.
9. Historico deve preservar timestamp, versao de conteudo e origem da tentativa.
10. Novos markdowns devem aparecer no catalogo sem edicao manual de arquivos de dados hard-coded.

**Requisitos Nao Funcionais**
1. Confiabilidade: nao perder tentativas em transicoes offline/online.
2. Integridade: detectar inconsistencias de manifesto antes de carregar a UI.
3. Usabilidade: fluxo completo de estudo em desktop e mobile sem bloqueios funcionais.
4. Observabilidade minima: registrar erros de carga, sync e autenticacao.
5. Evolutividade: suportar crescimento da base sem alteracoes estruturais manuais.
6. Seguranca OWASP: aderencia ao OWASP Top 10 e controles do OWASP ASVS L1 como baseline minimo.
7. Gestao de segredos: proibido hard-code de credenciais, chaves e tokens em qualquer artefato versionado.
8. Qualidade de dependencias: nenhuma dependencia com vulnerabilidade critica/alta aberta no momento do release.

**Contratos de Dados (Spec de Dominio)**
- Entidade Lesson
- Campos obrigatorios: id, title, file, topic, summary, sourceHash, updatedAt.
- Regra: id deve ser deterministico por caminho de origem; mudanca de titulo nao quebra historico.
- Entidade ObjectiveAttempt
- Campos obrigatorios: id, userId, mode, total, correct, percent, topicStats, createdAt, contentVersion.
- Entidade PracticalAttempt
- Campos obrigatorios: id, userId, caseId, topic, rubricScores, selfAssessment, notes, percent, createdAt, contentVersion.
- Entidade UserProgress
- Campos obrigatorios: userId, completedLessons, objectiveAttempts, practicalAttempts, lastSyncAt.
- Regra de reconciliacao: upsert por id e merge por timestamp mais recente para conflito simples.

**Fluxos de Usuario (Happy Path)**
1. Usuario abre o site, autentica, acessa catalogo atualizado automaticamente.
2. Usuario seleciona licao por topico, marca conclusao e avanca para avaliacao.
3. Usuario realiza quiz/simulado e recebe resultado imediato por topico.
4. Usuario realiza caso pratico, aplica rubrica e registra autoavaliacao.
5. Dashboard exibe score composto e historico sincronizado.

**Fluxos de Excecao**
1. Sem rede no momento da tentativa: salvar localmente com status pendente de sync.
2. Falha de autenticacao: manter acesso de leitura local e bloquear operacoes cloud sensiveis.
3. Markdown invalido/incompleto: ocultar item quebrado e registrar erro de integridade.
4. Falha de controle de seguranca: bloquear release e abrir correcao prioritaria.

**Criterios de Aceite (Definition of Done)**
1. Adicionar um novo markdown na raiz resulta em nova licao visivel apos atualizar pipeline, sem editar lista manual.
2. Dashboard apresenta total de licoes igual ao total real de markdowns validos.
3. Fluxo completo de estudo (licao -> quiz -> caso pratico -> historico) funciona sem erro em desktop e mobile.
4. Usuario autenticado recupera historico em segundo navegador/dispositivo.
5. Em modo offline, tentativas sao preservadas e sincronizadas quando a conexao retorna.
6. Nenhuma regressao critica nas abas Inicio, Licoes, Quiz, Simulado e Historico.
7. Checklist OWASP do projeto concluido e sem pendencias criticas/altas sem mitigacao aprovada.
8. Nenhum segredo exposto em codigo, configuracao ou historico de artefatos versionados.

**Plano de Entrega por Fases**
1. Fase A - Pipeline de manifesto de conteudo
- Gerar manifesto automatico de licoes e validacao de integridade.
- Dependencia: nenhuma.
2. Fase B - Integracao dinamica na UI
- Consumir manifesto no frontend e remover dependencia de catalogo hard-coded.
- Dependencia: Fase A.
3. Fase C - Avaliacao mista
- Implementar casos praticos + score composto por topico.
- Dependencia: Fase B.
4. Fase D - Auth e sincronizacao cloud
- Persistencia por usuario com reconciliacao local-cloud.
- Dependencia: Fase C.
5. Fase E - Hardening
- Testes de regressao, responsividade e checklist operacional.
- Dependencia: Fase D.

**Estrategia de Verificacao**
1. Verificacao automatizada de integridade de manifesto a cada atualizacao de conteudo.
2. Smoke test funcional de fluxos principais em todas as abas.
3. Teste de sincronizacao com cenarios online, offline e reconexao.
4. Teste de consistencia de score composto por topico.
5. Teste de regressao visual e responsiva em breakpoints principais.

**Matriz de Riscos e Mitigacoes**
1. Risco: descompasso entre novos documentos e cobertura de questoes.
- Mitigacao: politica minima de cobertura por topico e alerta de lacuna.
2. Risco: conflitos de sincronizacao entre dispositivos.
- Mitigacao: estrategia de merge deterministica com timestamp e id estavel.
3. Risco: perda de dados por indisponibilidade cloud.
- Mitigacao: fila local de pendencias e reenvio idempotente.
4. Risco: classificacao de topico inconsistente.
- Mitigacao: taxonomia canonica e validacao em pipeline.

**Rastreabilidade (Objetivo -> Requisito -> Aceite)**
1. Atualizacao automatica de conteudo -> RF1/RF2/RF10 -> CA1/CA2.
2. Avaliacao de conhecimento robusta -> RF4/RF5/RF6 -> CA3.
3. Continuidade multi-dispositivo -> RF7/RF8/RF9 -> CA4/CA5.
4. Confianca operacional -> RNF1/RNF2/RNF4 -> CA6.

**Escopo de Arquivos Esperados para Execucao**
- d:/Projetos/Material-de-estudo/site-estudos/index.html
- d:/Projetos/Material-de-estudo/site-estudos/app.js
- d:/Projetos/Material-de-estudo/site-estudos/content.js
- d:/Projetos/Material-de-estudo/site-estudos/styles.css
- d:/Projetos/Material-de-estudo/site-estudos/README.md
- d:/Projetos/Material-de-estudo/site-estudos (novos artefatos de manifesto/sync, a definir na implementacao)

**Open Decisions para inicio da execucao**
1. Provedor cloud preferencial para auth/sync: Supabase como padrao recomendado.
2. Politica inicial de score composto: peso 60% objetivo e 40% pratico.
3. Politica de cobertura por topico para liberacao: minimo de 3 questoes objetivas.
