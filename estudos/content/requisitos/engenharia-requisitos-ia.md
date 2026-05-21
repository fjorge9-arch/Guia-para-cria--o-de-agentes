# Engenharia de Requisitos Impulsionada por Inteligência Artificial

A combinação de Modelos de Linguagem de Grande Escala (LLMs) com arquiteturas de Sistemas Multi-Agentes (MAS) estabelece um novo paradigma para a Engenharia de Requisitos. A automação da extração de dados estruturados a partir de transcrições de reuniões vai além da simples sumarização: trata-se da capacidade de categorizar intenções de negócios, identificar restrições operacionais ocultas e traduzir necessidades latentes em especificações técnicas formais.

## Fundamentos Metodológicos

O pipeline de IA deve ser ancorado em quatro frameworks consolidados que garantem determinismo, atomicidade, rastreabilidade e testabilidade:

### ISO/IEC/IEEE 29148 — Estrutura Documental

A norma ISO/IEC/IEEE 29148:2018 estabelece o template padrão para Software Requirements Specification (SRS). O documento compreende seções para Introdução (propósito, escopo, glossário), Descrição Geral (perspectiva do produto, funções, perfis de usuário, restrições), Requisitos Funcionais (funções atômicas com entradas/processos/saídas), Requisitos Não Funcionais (desempenho, segurança, confiabilidade, usabilidade) e Requisitos de Interface Externa (UI, hardware, APIs, protocolos de comunicação).

### BABOK v3 — Taxonomia de Classificação

O BABOK v3 fornece o esquema de classificação que organiza informações extraídas de conversas em categorias precisas: Requisitos de Negócio (metas estratégicas), Requisitos dos Stakeholders (necessidades operacionais de grupos específicos), Requisitos da Solução (funcionais e não funcionais) e Requisitos de Transição (capacidades temporárias para migração do estado atual ao futuro).

A identificação automatizada de Requisitos de Transição é um vetor de alta maturidade — stakeholders frequentemente negligenciam estratégias de migração de dados e desligamento de sistemas legados.

### Volere — Especificações Atômicas (Snow Cards)

A metodologia Volere exige que cada requisito possua atributos completos: Descrição (declaração em linguagem ativa), Justificativa (conexão com a dor de negócio), Origem (identificação do interlocutor via diarização), e Critério de Adequação (Fit Criterion — limites mensuráveis que eliminam subjetividade).

O Fit Criterion é o diferenciador crítico. Exemplo: se o cliente diz "queremos que o onboarding seja extremamente fácil", a IA calibrada traduz para "Um usuário novato sem treinamento prévio deve concluir o cadastro completo em menos de 3 minutos, com taxa de abandono assistido inferior a 2%".

### IREB CPRE — Níveis de Granularidade Funcional

O IREB define três níveis de decomposição: Nível de Sumarização (grupos lógicos de operações), Nível de Objetivo do Usuário (menor processo com valor tangível ao usuário — onde a maioria dos requisitos deve residir) e Nível de Subfunção (comportamentos lógicos compartilhados por múltiplas transações).

## Arquitetura do Pipeline de Processamento

### Camada 1 — Transcrição e Diarização

Modelos de transcrição de alta fidelidade (Whisper large-v3 ou equivalentes) com marcações temporais em milissegundos e diarização profunda (identificação individual de locutores). O formato JSON estruturado com Speaker IDs permite inferir prioridade baseada no papel hierárquico do interlocutor.

### Camada 2 — Chunking Semântico

Transcrições de 60-120 minutos (15.000-30.000 palavras) excedem a capacidade atencional dos LLMs, causando o fenômeno "Lost in the Middle". A segmentação semântica baseada em transições de tópicos e intervalos temporais, seguida de projeção em embeddings vetoriais densos, resolve este gargalo.

### Camada 3 — Clusterização de Tópicos

Algoritmos não supervisionados (K-Means ou DBSCAN) aplicados aos embeddings agrupam menções correlatas em clusters temáticos nomeados. Estes clusters fornecem contexto concentrado e livre de ruído aos agentes de extração.

### Camada 4 — Extração Multi-Agente (MAS)

Quatro agentes especializados operam em padrão Manager-Worker:

1. **Agente Analista de Negócio:** Classifica requisitos pela taxonomia BABOK v3, focando em metas estratégicas e necessidades operacionais.
2. **Agente Modelador de Especificações:** Aplica IREB e Volere para gerar especificações atômicas com Fit Criterion, decompondo épicos em requisitos no nível de Objetivo do Usuário.
3. **Agente Arquiteto NFR:** Converte declarações informais de qualidade em métricas formais quantificáveis, conforme ISO 29148 seções 4-5.
4. **Agente Revisor QA:** Audita completude, rastreabilidade, testabilidade e ausência de ambiguidade. Rejeita e solicita retrabalho iterativo até atingir limiar de qualidade.

### Camada 5 — Validação e Consolidação

Protocolo Human-in-the-Loop para resolução de conflitos, métricas CLASSic (Cost, Latency, Accuracy, Security, Stability) e grafo de rastreabilidade vetorial baseado em similaridade cosseno.

## Engenharia de Prompts — Framework KERNEL

O framework KERNEL (Keep it simple, Easy to verify, Reproducible, Narrow scope, Explicit constraints, Logical structure) governa a construção de prompts:

- **Keep it Simple:** Um prompt extrai apenas um tipo taxonômico por vez.
- **Easy to Verify:** Todo requisito gerado deve conter o timestamp de origem e citação literal da transcrição.
- **Reproducible:** Temperatura ≈ 0, top_p = 1.0 para consistência determinística.
- **Narrow Scope:** Tarefas atômicas — um prompt para "Atores e Entidades", outro para "Regras de Negócio".
- **Explicit Constraints:** Instruções negativas explícitas sobre o que a IA jamais deve inferir.
- **Logical Structure:** Delimitadores XML para seções, saída em JSON estruturado.

### Processamento Multi-Estágio (Chain-of-Thought)

1. **Depuração Semântica:** Remoção de disfluências vocais, digressões e ambiguidades pronominais.
2. **Mapeamento Analítico:** Isolamento de relações de dependência, condicionais e intenções expressas, classificados por BABOK.
3. **Formatação Estruturada:** Projeção das intenções validadas em Snow Cards Volere, seções ISO 29148 ou tabelas DMN.

## Descoberta de Requisitos Latentes — Elicitron

O framework Elicitron descobre requisitos implícitos e latentes através de simulação de personas:

1. **Geração de Personas:** Agentes virtuais representando perfis diversos de usuário final, selecionados por clustering com otimização de Silhouette Score.
2. **Simulação de Experiência:** Cada persona percorre mentalmente as jornadas extraídas usando a tríade Ação-Observação-Desafio. Os desafios geram cenários de borda que stakeholders tipicamente omitem.
3. **Formalização:** Requisitos latentes são documentados como Snow Cards marcados `[LATENTE - REQUER VALIDAÇÃO]` para revisão humana.

## Artefatos de Saída

### Tabelas DMN (Decision Model and Notation)

Pipeline em 4 estágios: (1) Parse de parâmetros decisórios, (2) Identificação de condicionalidades excludentes, (3) Geração de triplas Entrada-Condição-Saída em formato XML/JSON com expressões FEEL, (4) Validação de integridade contra contradições, incompletude e caminhos órfãos.

### Cenários BDD/Gherkin

Critérios de aceite em sintaxe Given-When-Then vinculados às User Stories extraídas. Configurações otimizadas por modelo: GPT-4 (Zero-shot), Claude 3 (Chain-of-Thought), Gemini (Few-shot com 2-3 exemplos). Temperatura fixada em 0 para reprimir estocasticidade.

## Validação e Governança

### Grafo de Rastreabilidade Vetorial

Cada segmento de transcrição e cada requisito gerado são projetados como embeddings densos. A similaridade cosseno entre segmentos-fonte e requisitos garante rastreabilidade bidirecional. Requisitos sem correspondência vetorial forte são sinalizados como potenciais alucinações.

### Protocolo Human-in-the-Loop

A IA detecta e registra conflitos (stakeholder vs. stakeholder, requisito vs. restrição, NFR vs. NFR), gera listas de perguntas pendentes e escala para mediação humana. A IA nunca possui autonomia para resolver conflitos de natureza política ou estratégica.

### Métricas CLASSic

Framework de avaliação em 5 dimensões: Cost (consumo de tokens), Latency (tempo de processamento), Accuracy (precisão vs. baseline humano, meta > 90%), Security (proteção contra vazamento de PII e prompt injection) e Stability (consistência de output, meta > 95%).

## Referências Bibliográficas

- ISO/IEC/IEEE 29148:2018 — Systems and software engineering — Life cycle processes — Requirements engineering
- IIBA — BABOK v3 (Business Analysis Body of Knowledge)
- Robertson, S. & Robertson, J. — Mastering the Requirements Process (Volere)
- IREB — CPRE Certified Professional for Requirements Engineering
- OMG — Decision Model and Notation (DMN) Specification
- Framework Elicitron — LLM Agent-Based Simulation for Design Requirements Elicitation
- Framework KERNEL — Keep it simple, Easy to verify, Reproducible, Narrow scope, Explicit constraints, Logical structure
