# **Compêndio Definitivo de Engenharia de Requisitos: Teoria, Prática e Gestão Avançada em Sistemas Complexos**

A Engenharia de Requisitos (ER) transcende a simples definição de uma fase preliminar no desenvolvimento de software; ela constitui a fundação epistemológica e técnica sobre a qual sistemas sustentáveis, úteis e seguros são edificados. No cenário contemporâneo, caracterizado pela ubiquidade da transformação digital e pela complexidade crescente das soluções tecnológicas, a disciplina evoluiu de uma atividade burocrática de documentação para um processo dinâmico de gestão do conhecimento e mitigação de riscos.1 Este relatório oferece uma análise exaustiva e profundada da Engenharia de Requisitos, abordando desde os princípios fundamentais estabelecidos por organismos internacionais como o IREB (International Requirements Engineering Board) até as práticas mais avançadas de modelagem, gestão ágil e a revolução impulsionada pela Inteligência Artificial.

## **Fundamentos Epistemológicos e Econômicos da Engenharia de Requisitos**

A essência da Engenharia de Requisitos reside na compreensão e na transformação. É o processo de traduzir necessidades vagas, muitas vezes expressas em linguagem natural e carregadas de ambiguidade, em especificações técnicas precisas, verificáveis e viáveis.3 A literatura e a prática industrial convergem para um ponto crítico: o custo do erro. Dados históricos e estudos contínuos demonstram que falhas na definição de requisitos são responsáveis por uma parcela significativa — estimada entre 40% e 60% — dos defeitos encontrados em projetos de software.5 Mais alarmante é o fato de que um erro de requisito não detectado nas fases iniciais pode custar até 100 vezes mais para ser corrigido após a implementação do que se tivesse sido identificado durante a fase de análise ou elicitação.1

### **O Papel do Engenheiro de Requisitos e a Profissionalização (IREB)**

A complexidade da tarefa exigiu a profissionalização da figura do Engenheiro de Requisitos. O International Requirements Engineering Board (IREB), sediado na Alemanha, estabeleceu-se como a autoridade global na padronização deste conhecimento, oferecendo o esquema de certificação CPRE (Certified Professional for Requirements Engineering).1 O currículo do CPRE, dividido em níveis Fundamental, Praticante e Especialista, delineia não apenas as técnicas, mas a postura ética e analítica necessária ao profissional.7

O papel deste profissional é multifacetado. Ele atua como um tradutor entre o domínio do problema (o negócio, o usuário, o contexto regulatório) e o domínio da solução (a arquitetura de software, o código, os testes). O IREB enfatiza que o engenheiro de requisitos deve dominar habilidades de comunicação, análise crítica, moderação de conflitos e modelagem técnica.8 A certificação CPRE-FL (Foundation Level), por exemplo, exige o domínio de nove princípios fundamentais que governam a disciplina, assegurando que o profissional entenda não apenas "como" modelar um caso de uso, mas "por que" aquela técnica específica é adequada para o contexto do projeto.8

### **A Taxonomia dos Requisitos: Uma Classificação Estrutural**

Para gerenciar a complexidade, os requisitos devem ser categorizados com precisão. A distinção clássica entre requisitos funcionais e não funcionais é apenas a ponta do iceberg em uma taxonomia mais rica que envolve requisitos de negócio, requisitos de usuário e restrições de sistema.4

#### **Requisitos de Negócio e a Visão Estratégica**

No topo da hierarquia situam-se os Requisitos de Negócio. Eles não descrevem o sistema em si, mas as motivações organizacionais para a sua criação. Exemplos incluem metas como "aumentar a participação de mercado em 5% no próximo ano fiscal" ou "reduzir o tempo de processamento de pedidos em 30%".11 Sem a clareza destes objetivos, o projeto corre o risco de entregar um software tecnicamente perfeito, mas estrategicamente irrelevante. A técnica de modelagem de objetivos (Goal Modeling), utilizando árvores AND/OR, é frequentemente empregada para decompor esses objetivos de alto nível em submetas tangíveis que o sistema deve apoiar.11

#### **Requisitos Funcionais: O Comportamento do Sistema**

Os Requisitos Funcionais (RFs) descrevem as funções que o sistema deve executar para apoiar os objetivos de negócio. Eles são a descrição do comportamento observável do software. A literatura técnica sugere que estes devem ser expressos de forma determinística: dada uma entrada X e um estado Y, o sistema deve produzir a saída Z.10 Exemplos práticos incluem "O sistema deve permitir o cadastro de clientes com CPF válido" ou "O sistema deve calcular o imposto automaticamente baseado na região do usuário".12 A granularidade destes requisitos pode variar desde descrições de alto nível (Épicos em Agile) até especificações detalhadas de algoritmos.14

#### **Requisitos Não Funcionais (RNF): A Arquitetura da Qualidade**

Frequentemente negligenciados ou mal definidos, os Requisitos Não Funcionais (RNFs), também conhecidos como Atributos de Qualidade, definem *como* o sistema deve operar, impondo restrições ao design e à implementação.10 A norma ISO/IEC 25010 fornece um modelo robusto para classificar esses requisitos em categorias como Desempenho, Segurança, Confiabilidade, Usabilidade e Manutenibilidade.12

A grande armadilha na definição de RNFs é a subjetividade. Declarações como "o sistema deve ser rápido" ou "o sistema deve ser fácil de usar" são inúteis para a engenharia. A prática recomendada é a quantificação rigorosa: "O sistema deve processar 1.000 transações por minuto com latência inferior a 2 segundos" ou "Novos usuários devem ser capazes de completar a tarefa de cadastro em menos de 3 minutos sem consultar o manual".12 A falha em especificar RNFs adequadamente é uma causa comum de rejeição de sistemas, pois um software funcionalmente correto que demora 5 minutos para carregar uma tela é, na prática, inutilizável.16

**Tabela 1: Comparativo Detalhado de Tipos de Requisitos e Impactos**

| Tipo de Requisito | Definição Core | Exemplo Vago (A Evitar) | Exemplo Preciso (Técnico) | Impacto no Ciclo de Vida |
| :---- | :---- | :---- | :---- | :---- |
| **Funcional** | Comportamento/Ação | "O usuário faz login." | "O sistema deve validar as credenciais do usuário contra o diretório LDAP corporativo e conceder token de sessão." 10 | Base para desenvolvimento de código e testes funcionais. |
| **Desempenho (RNF)** | Métricas de Tempo/Recurso | "O sistema deve ser rápido." | "O tempo de resposta para consultas de banco de dados não deve exceder 200ms sob carga de 500 usuários simultâneos." 12 | Define arquitetura de servidor, cache e otimização de queries. |
| **Segurança (RNF)** | Proteção de Dados/Acesso | "O sistema deve ser seguro." | "Todos os dados em repouso devem ser criptografados usando AES-256 e o tráfego via TLS 1.3." 13 | Orienta protocolos de segurança e conformidade (LGPD/GDPR). |
| **Disponibilidade (RNF)** | Tempo de Atividade | "O sistema não pode cair." | "O sistema deve garantir 99,99% de disponibilidade anual, permitindo no máximo 52 minutos de downtime não planejado." 10 | Exige redundância de hardware e estratégias de failover. |
| **Usabilidade (RNF)** | Facilidade de Uso | "Deve ser intuitivo." | "A taxa de erro do usuário na primeira tentativa de uso do módulo de relatórios deve ser inferior a 5%." 13 | Impacta design de interface (UI) e experiência do usuário (UX). |

## **O Processo de Elicitação: A Arte da Descoberta**

A elicitação de requisitos é frequentemente a fase mais desafiadora da engenharia de requisitos, pois envolve a interação humana intensa e a extração de conhecimento que muitas vezes é tácito. Diferente da simples "coleta" — termo que sugere que os requisitos estão prontos e visíveis, apenas esperando para serem pegos — a elicitação (do latim *elicitare*, trazer para fora) implica um processo ativo de descoberta, provocação e dedução.17

### **Fontes de Requisitos e Stakeholders**

O primeiro passo na elicitação é a identificação exaustiva das fontes de requisitos. Estas não se limitam aos usuários finais. Elas incluem proprietários de processos, equipe de manutenção, documentos legados, regulamentações governamentais e até sistemas concorrentes.4 A "Teoria da Atividade" sugere que entender o contexto social, as regras e a divisão de trabalho onde o sistema será inserido é crucial para uma elicitação completa.19 Ignorar um grupo de stakeholders, como a equipe de suporte técnico, pode resultar em um sistema que atende ao usuário, mas é impossível de ser mantido operacionalmente.

### **Técnicas Avançadas de Elicitação**

A escolha da técnica de elicitação deve ser estratégica, baseada no tipo de informação necessária e na disponibilidade dos stakeholders. O analista experiente utiliza uma combinação de métodos para triangular a verdade, visto que o que o usuário *diz* que faz, o que ele *realmente* faz e o que ele *deveria* fazer são frequentemente coisas distintas.17

1. **Entrevistas e Questionários:** As entrevistas, estruturadas ou semiestruturadas, permitem aprofundar o entendimento sobre os "porquês" das necessidades. No entanto, elas sofrem de viés de recência e da subjetividade do entrevistado. Questionários são úteis para validar hipóteses com uma grande base de usuários, mas carecem de profundidade contextual.4  
2. **Workshops e Sessões de Criatividade:** Workshops de requisitos reúnem múltiplos stakeholders para resolver conflitos em tempo real e promover consenso. Técnicas de criatividade, como Brainstorming, são aplicadas nestas sessões para gerar inovações e descobrir requisitos de "entusiasmo" (conforme o Modelo de Kano).4 A facilitação profissional é essencial aqui para evitar que vozes dominantes suprimam as opiniões de especialistas mais introvertidos.  
3. **Observação e Etnografia:** A observação direta (job shadowing) ou a etnografia organizacional permitem ao analista ver o trabalho "como ele é". Frequentemente, usuários desenvolvem "gambiarras" ou processos manuais invisíveis para contornar limitações dos sistemas atuais. A observação revela esses requisitos ocultos que raramente surgem em entrevistas formais.17  
4. **Prototipagem Exploratória:** Em situações de alta incerteza, construir um protótipo descartável ou evolutivo ajuda a tangibilizar os requisitos. Isso permite que o usuário interaja com a solução proposta e ofereça feedback sobre requisitos que ele não conseguia verbalizar abstratamente.4

### **O Modelo de Kano na Elicitação**

Uma ferramenta analítica poderosa durante a elicitação é o Modelo de Kano, que classifica as preferências do cliente em cinco categorias. Compreender essas categorias evita o desperdício de recursos em funcionalidades que não trazem satisfação proporcional.9

* **Qualidade Obrigatória (Must-be):** Requisitos que, se ausentes, causam insatisfação total, mas se presentes, não aumentam a satisfação (ex: o freio de um carro). O sistema *tem* que ter.  
* **Qualidade Unidimensional (Performance):** A satisfação é proporcional ao desempenho do atributo (ex: velocidade da internet, economia de bateria). Quanto mais, melhor.  
* **Qualidade Atrativa (Delighters):** Atributos inesperados que causam grande satisfação se presentes, mas cuja ausência não gera insatisfação (ex: brinde surpresa). Com o tempo, atributos atrativos tendem a se tornar obrigatórios.

## **Análise, Negociação e Resolução de Conflitos**

Uma vez elicitados, os requisitos brutos devem ser analisados. Raramente os desejos dos stakeholders são perfeitamente alinhados, completos ou tecnicamente viáveis desde o início. A fase de análise serve como um filtro de realidade e um mecanismo de alinhamento.20

### **Detectando e Resolvendo Conflitos**

Conflitos de requisitos surgem de diversas fontes: departamentos com objetivos opostos (ex: Marketing quer cadastro rápido com poucos campos; Compliance quer cadastro detalhado para verificação de identidade), restrições orçamentárias versus escopo desejado, ou limitações técnicas.16 A engenharia de requisitos propõe métodos formais para a resolução:

* **Matriz de Priorização (BASICO/MoSCoW):** Técnicas como a Matriz BASICO (Benefícios, Abrangência, Satisfação, Investimento, Cliente, Operacionalidade) ou o método MoSCoW (Must have, Should have, Could have, Won't have) ajudam a racionalizar a decisão, removendo a emoção da negociação.20  
* **Negociação Baseada em Interesses (Win-Win):** Em vez de focar nas posições ("eu quero o botão azul"), o analista busca o interesse subjacente ("eu quero que o botão seja visível"). Isso abre espaço para soluções criativas que atendam a ambos os lados sem comprometer a integridade do sistema.16

A análise também envolve a verificação de completude e consistência. O uso de listas de verificação (checklists) baseadas em qualidade, muitas vezes automatizadas por ferramentas de IA, ajuda a identificar requisitos órfãos ou contraditórios antes que eles cheguem ao desenvolvimento.25

## **Especificação e Documentação: Da Linguagem Natural aos Modelos Formais**

A documentação dos requisitos é o artefato persistente que comunica o acordo estabelecido. Existem diversos padrões e níveis de formalidade, dependendo da metodologia (Ágil vs. Tradicional) e da criticidade do sistema.4

### **Documentação Tradicional: SRS e Notação EARS**

Em ambientes regulados ou tradicionais (Waterfall), o padrão IEEE 830 para Especificação de Requisitos de Software (SRS \- Software Requirements Specification) é amplamente utilizado. Este documento monolítico tenta descrever o sistema completo antes da codificação. Para mitigar a ambiguidade inerente à linguagem natural, recomenda-se o uso de sintaxes controladas como o EARS (Easy Approach to Requirements Syntax). O EARS propõe estruturas de frase padronizadas, como: "Quando \[Gatilho\], o deve \[Ação\]" ou "Enquanto \[Estado\], o deve \[Ação\]".4 Essa padronização facilita a leitura por humanos e a análise automática por ferramentas de processamento de linguagem natural (NLP).

#### **EARS — os 5 padrões de sintaxe controlada (mais o composto)**

O EARS foi criado em 2009 pela Rolls-Royce para resolver a "síndrome da página em branco" na escrita de requisitos. Em vez de instruir o autor a "escrever bem", ele fornece **cinco estruturas frasais pré-aprovadas** (mais uma sexta, composta). Todo requisito funcional deve caber em uma delas — o que elimina ambiguidade estrutural e torna o texto auditável por algoritmos simples de PLN.

| # | Padrão | Quando usar | Template canônico |
|---|--------|-------------|-------------------|
| 1 | **Ubiquitous** (universal) | Comportamento sempre verdadeiro, sem gatilho nem pré-condição. | `The <sistema> shall <resposta>.` / `O <sistema> deve <resposta>.` |
| 2 | **Event-driven** (dirigido a evento) | Ação disparada por um evento externo pontual. | `When <gatilho>, the <sistema> shall <resposta>.` / `Quando <gatilho>, o <sistema> deve <resposta>.` |
| 3 | **State-driven** (dirigido a estado) | Comportamento válido enquanto um estado persiste. | `While <estado>, the <sistema> shall <resposta>.` / `Enquanto <estado>, o <sistema> deve <resposta>.` |
| 4 | **Optional feature** (funcionalidade opcional) | Comportamento só existe quando uma feature está habilitada. | `Where <feature habilitada>, the <sistema> shall <resposta>.` / `Onde <feature habilitada>, o <sistema> deve <resposta>.` |
| 5 | **Unwanted behaviour** (comportamento indesejado) | Tratamento de erro, exceção ou condição adversa. | `If <gatilho indesejado>, then the <sistema> shall <resposta>.` / `Se <gatilho indesejado>, então o <sistema> deve <resposta>.` |
| 6 | **Complex** (composto) | Combinação dos anteriores. | `When <gatilho> while <estado>, the <sistema> shall <resposta>.` |

**Exemplos aplicados a Microsoft Business Apps:**

| Cenário | Padrão | Exemplo redigido em EARS |
|---------|--------|--------------------------|
| Validação de CNPJ em cadastro (Power Pages) | Event-driven | "Quando o usuário submete o formulário de adesão, o portal deve validar o CNPJ contra o serviço Serpro antes de persistir a inscrição no Dataverse." |
| Visibilidade de menu por perfil (Power Apps Model-Driven) | Optional feature | "Onde o papel `Gerente de Fidelidade` estiver atribuído ao usuário, o app deve exibir a entidade `Promoção` no site map principal." |
| Reprovação de pedido de venda (D365 CE — Sales) | Unwanted behaviour | "Se o limite de crédito do cliente for excedido ao qualificar a oportunidade, então o sistema deve bloquear a transição para `Won` e registrar a razão em `qualificationReason`." |
| Roteamento de caso urgente (Customer Service) | State-driven | "Enquanto o caso tiver prioridade `High` e SLA `< 4h`, o motor de omnichannel deve rotear exclusivamente para a fila `Tier-2`." |
| Postagem contábil automática (D365 BC) | Ubiquitous | "O módulo de vendas deve postar toda nota fiscal emitida no book `Accrual` no fechamento diário." |
| Retry de webhook (Power Automate) | Complex | "Quando o webhook retornar 5xx enquanto a flag `resilient-retry` estiver ativa, o fluxo deve reencadear a chamada com backoff exponencial até 3 tentativas." |

**Anti-padrões e palavras fracas** (Evaluator rejeita):

- **Vago:** "rápido", "amigável", "adequado", "aceitável", "performático".
- **Vozes passivas sem sujeito:** "o dado *será processado*" (quem processa?).
- **Conjunções encobrindo múltiplos requisitos:** "O sistema deve calcular X **e** enviar Y **e** gravar Z" → quebrar em 3 REQs separados.
- **Quantificadores sem métrica:** "logo", "poucos segundos", "muitos registros".
- **Modal ambíguo:** "pode", "poderá" → trocar por `shall`/`deve` (obrigação) ou deixar como nota opcional.
- **Gatilhos implícitos:** "quando necessário" → explicitar o evento real.

**NFRs — modelo híbrido adotado pelo WingMan:**

- **NFRs comportamentais** (com gatilho ou estado) → EARS obrigatório. Ex: "Quando o usuário clicar em `Submit`, o portal deve responder em < 2s no P95."
- **NFRs métricos puros** (atributos de qualidade sem comportamento explícito) → **tabela de métricas** (atributo × alvo × ferramenta de medição). Ex: "Disponibilidade mensal ≥ 99,9% medida pelo Application Insights."

A skill `validate-ears-syntax` opera em *dual-mode* — estrita para REQs funcionais (rejeita não-conforme) e leniente para NFRs (aceita qualquer uma das duas formas).

**Grandfathering de PRDs legados:**

PRDs escritos antes da adoção do EARS ficam isentos via a marcação `ears_exempt: true` no front-matter do documento. O Evaluator do WingMan pula o check EARS nesses PRDs. Para rebaselinar um PRD legado, basta remover a flag (ou setar `ears_exempt: false`) — nesse momento, todos os REQs funcionais passam a ser validados e a skill `rewrite-requirement-ears` pode ser usada para converter em lote.

**Como o EARS se relaciona com Gherkin e INVEST:**

- **EARS** normaliza o **requisito** (o quê o sistema deve fazer).
- **Gherkin (Given/When/Then)** normaliza os **critérios de aceite** do requisito (como testar).
- **INVEST** é aplicado na **user story** (unidade de planejamento ágil) — não no requisito.

Uma user story "As a… I want… so that…" pode ter N requisitos REQ-### em EARS, e cada requisito pode ter M critérios de aceite em Gherkin. Os três padrões **coexistem** e são aplicados em camadas diferentes.

### **Documentação Ágil: User Stories e Critérios de Aceite**

No paradigma Ágil, a documentação é "just-in-time" e focada na comunicação verbal. A unidade principal é a História de Usuário (User Story), estruturada para focar no valor: "Como \[Persona\], eu quero \[Ação\], para que \[Valor\]".4 No entanto, uma User Story por si só é insuficiente; ela deve ser acompanhada de Critérios de Aceite claros que definem as condições de satisfação.

A relação entre User Stories e Casos de Uso (Use Cases) é frequentemente debatida. Enquanto User Stories são focadas na necessidade e no planejamento, Casos de Uso detalham a interação funcional e os fluxos de exceção. Muitos projetos híbridos utilizam User Stories para o gerenciamento do backlog e Casos de Uso para a especificação funcional detalhada de recursos complexos, aproveitando o melhor dos dois mundos.15

**Tabela 2: Diferenciação Prática entre User Stories e Casos de Uso**

| Característica | User Story | Caso de Uso (Use Case) |
| :---- | :---- | :---- |
| **Foco Primário** | Necessidade do usuário e valor de negócio. 29 | Comportamento do sistema e interações detalhadas. 15 |
| **Formato** | Breve, narrativo (Cartão). "Promessa de uma conversa". 15 | Estruturado, com pré-condições, pós-condições e fluxos alternativos. 15 |
| **Contexto de Uso** | Metodologias Ágeis (Scrum, Kanban). Planejamento de Sprints. 28 | Engenharia de Software Tradicional, Sistemas Críticos, Documentação de Longo Prazo. 28 |
| **Granularidade** | Pequena, deve caber em uma iteração (Sprint). 14 | Pode abranger processos inteiros e múltiplas sessões de usuário. 15 |
| **Manutenção** | Geralmente descartável após a implementação. 29 | Mantido como documentação viva do sistema. |

## **Modelagem de Requisitos: A Linguagem Visual do Sistema**

A modelagem visual é indispensável para comunicar estruturas complexas e fluxos lógicos que o texto linear não consegue capturar eficientemente. As duas notações predominantes, UML (Unified Modeling Language) e BPMN (Business Process Model and Notation), servem a propósitos distintos mas complementares.30

### **BPMN: O Contexto de Negócio**

O BPMN é a língua franca dos analistas de negócio e gestores de processo. Ele modela "quem faz o quê" na organização, independentemente de ser uma tarefa manual ou automatizada. Utilizar BPMN na fase inicial de elicitação ajuda a entender o processo "As-Is" (como é) e desenhar o processo "To-Be" (como será com o novo sistema).30 O diagrama de processo de negócio identifica onde o software irá intervir, definindo claramente as fronteiras de automação.32

### **UML: A Especificação do Software**

Enquanto o BPMN olha para o negócio, a UML olha para o software. Para a engenharia de requisitos, um subconjunto dos diagramas UML é essencial 33:

1. **Diagrama de Casos de Uso:** Fornece a visão de escopo funcional, mostrando os atores (usuários ou sistemas externos) e as funcionalidades principais (elipses). É fundamental para visualizar os limites do sistema.33  
2. **Diagrama de Atividades:** Similar ao fluxograma, é ideal para detalhar a lógica de um caso de uso complexo, mostrando decisões, paralelismo e loops. É a ponte mais próxima entre o BPMN e a lógica de programação.34  
3. **Diagrama de Sequência:** Foca na interação temporal entre objetos ou componentes. Na fase de requisitos, é usado para especificar protocolos de interface ou a troca de mensagens entre o sistema e APIs externas, detalhando o "contrato" de interação.36  
4. **Diagrama de Estados:** Crítico para sistemas reativos, modela o ciclo de vida de uma entidade de negócio (ex: o estado de um "Pedido" muda de "Novo" para "Pago", depois "Enviado"). Isso captura regras de negócio que impedem transições inválidas (ex: não enviar um pedido cancelado).11

A integração eficiente envolve modelar o processo em BPMN e "explodir" as atividades automatizadas em Casos de Uso UML, garantindo que cada requisito de software esteja ancorado em uma necessidade de processo de negócio real.32

## **Gestão de Requisitos, Rastreabilidade e Ferramentas (ALM)**

A gestão de requisitos não termina com a especificação; ela é um processo contínuo de controle de vida útil dos artefatos. Em projetos modernos, a gestão manual (via planilhas ou documentos de texto desconectados) é considerada uma prática de alto risco e ineficiente.5

### **Rastreabilidade: O Fio Condutor**

A rastreabilidade é a capacidade de seguir a vida de um requisito em ambas as direções (forward e backward traceability).

* **Pré-rastreabilidade:** Liga o requisito à sua origem (quem pediu? qual lei exige isso?). Isso é vital para a análise de impacto; se a lei muda, sabemos quais requisitos revisar.5  
* **Pós-rastreabilidade:** Liga o requisito aos artefatos de design, código e, crucialmente, aos casos de teste. A Matriz de Rastreabilidade de Requisitos (RTM) é a ferramenta que prova que o escopo foi cumprido: se um requisito não tem caso de teste associado, o produto não pode ser validado.4 Em indústrias reguladas (médica, automotiva, aeroespacial), a rastreabilidade é mandatória para certificações como DO-178C ou ISO 26262\. Ferramentas de ALM (Application Lifecycle Management) automatizam essa ligação, garantindo que nenhuma mudança ocorra sem que seu impacto seja avaliado.4

### **O Ecossistema de Ferramentas e ALM**

O mercado oferece soluções diversas que variam em complexidade e foco metodológico. A escolha da ferramenta molda o processo de engenharia.25

**Tabela 3: Panorama de Ferramentas de Gestão de Requisitos**

| Ferramenta | Foco Principal | Pontos Fortes | Público-Alvo Ideal |
| :---- | :---- | :---- | :---- |
| **Visure Requirements ALM** | Conformidade e Rastreabilidade Completa. 25 | Suporte nativo a normas (ISO 26262, FMEA), IA para qualidade de requisitos, integração robusta. 4 | Setores regulados (Aeroespacial, Médico, Energia). |
| **Jira (Atlassian)** | Gestão Ágil e Fluxo de Tarefas. 22 | Ubiquidade no mercado, ecossistema de plugins, flexibilidade para Scrum/Kanban. 38 | Equipes de software ágil, startups, desenvolvimento web. |
| **IBM DOORS / Next** | Engenharia de Sistemas Complexos. 38 | Padrão da indústria para grandes projetos de engenharia, gestão de baselines granular. | Defesa, Grandes Indústrias, Projetos de Longo Prazo. |
| **Azure DevOps** | Integração CI/CD e Microsoft. 39 | Rastreabilidade nativa com código e testes no ecossistema Microsoft. 39 | Empresas que utilizam stack Microsoft/GitHub. |

### **Gestão de Mudanças e Manutenção de Legados**

A volatilidade dos requisitos é inevitável. A gestão de mudanças eficaz exige um processo formal de solicitação, análise de impacto e aprovação (Change Control Board \- CCB).40 Em sistemas legados, onde a documentação original é frequentemente inexistente, a engenharia de requisitos assume um papel de arqueologia digital (engenharia reversa), reconstruindo as regras de negócio a partir do comportamento do sistema para permitir a manutenção segura.6

## **O Futuro da Engenharia de Requisitos: IA e Tendências 2025**

A introdução da Inteligência Artificial (IA) e do Processamento de Linguagem Natural (PLN) está revolucionando a engenharia de requisitos, transformando-a de uma disciplina intensiva em trabalho manual para uma disciplina assistida por tecnologia.26

### **Aplicações Práticas de IA na ER**

Ferramentas modernas já integram IA para realizar tarefas que antes consumiam dias em minutos:

1. **Detecção de Ambiguidade:** Algoritmos de PLN analisam a sintaxe dos requisitos (baseados em regras como EARS ou melhores práticas do IREB) e alertam sobre termos vagos ("rápido", "adequado", "amigável") ou voz passiva, forçando o analista a ser preciso.26  
2. **Geração Automática de Artefatos:** A IA generativa pode, a partir de uma transcrição de reunião ou de um conjunto de regras de negócio, redigir rascunhos de User Stories, Critérios de Aceite e até casos de teste, agindo como um "copiloto" para o engenheiro.45  
3. **Rastreabilidade Inteligente:** Algoritmos de aprendizado de máquina podem sugerir ligações de rastreabilidade entre documentos de requisitos e especificações técnicas baseados na similaridade semântica, facilitando a manutenção da RTM.39

A McKinsey e outros analistas apontam que a IA não substituirá o engenheiro de requisitos, mas mudará seu foco. O trabalho braçal de formatação e verificação sintática será automatizado, permitindo que o profissional foque na negociação, na estratégia de produto e na resolução de conflitos humanos complexos — áreas onde a IA ainda carece de sensibilidade.42 A tendência para 2025 e além é a consolidação da "Engenharia de Requisitos Aumentada", onde a qualidade dos dados e a governança ética tornam-se as novas prioridades.43

## **Conclusão**

A Engenharia de Requisitos é a disciplina que define o sucesso ou o fracasso na construção de sistemas de software. Ela exige um equilíbrio delicado entre habilidades humanas — empatia, comunicação, negociação — e rigor técnico — modelagem, análise lógica, gestão de dados. Desde os fundamentos estabelecidos pelo IREB até as fronteiras da IA Generativa, o objetivo permanece o mesmo: garantir que a tecnologia construída resolva os problemas reais das pessoas e das organizações de forma eficiente e segura. Ignorar a engenharia de requisitos não é uma economia de tempo; é um empréstimo de alto risco tomado contra o futuro do projeto, cujos juros são pagos em retrabalho, insatisfação e falhas sistêmicas. Dominar esta área é, portanto, indispensável para qualquer organização que aspire à excelência na era digital.

#### **Referências citadas**

1. Webinar: A Certificação em Engenharia de Requisitos do IREB \- YouTube, acessado em fevereiro 6, 2026, [https://www.youtube.com/watch?v=fzcQiqo7O08](https://www.youtube.com/watch?v=fzcQiqo7O08)  
2. Modelagem de Sistemas | Geandro Costa \- DIO, acessado em fevereiro 6, 2026, [https://www.dio.me/articles/modelagem-de-sistemas](https://www.dio.me/articles/modelagem-de-sistemas)  
3. Curso IREB-CPRE-FL \- CONECTE, acessado em fevereiro 6, 2026, [https://conecteseaqui.com.br/curso-ireb-cpre-fl/](https://conecteseaqui.com.br/curso-ireb-cpre-fl/)  
4. O que é Engenharia de Requisitos: Processo para Software e ..., acessado em fevereiro 6, 2026, [https://visuresolutions.com/pt/guia-de-esmolas/engenharia-de-requisitos/](https://visuresolutions.com/pt/guia-de-esmolas/engenharia-de-requisitos/)  
5. Engenharia de Requisitos- como Previnir e Reduzir Riscos \- AEDB, acessado em fevereiro 6, 2026, [https://www.aedb.br/seget/arquivos/artigos11/30114261.pdf](https://www.aedb.br/seget/arquivos/artigos11/30114261.pdf)  
6. Uma Análise Crítica dos Desafios para Engenharia de Requisitos em Manutenção de Software \- WERpapers, acessado em fevereiro 6, 2026, [https://werpapers.dimap.ufrn.br/papers/WER2004/Rodrigo\_Espindola.pdf](https://werpapers.dimap.ufrn.br/papers/WER2004/Rodrigo_Espindola.pdf)  
7. Certification Program \- CPRE \- IREB, acessado em fevereiro 6, 2026, [https://cpre.ireb.org/en/concept](https://cpre.ireb.org/en/concept)  
8. Foundation level – start working effectively in RE \- CPRE \- IREB, acessado em fevereiro 6, 2026, [https://cpre.ireb.org/en/concept/foundationlevel](https://cpre.ireb.org/en/concept/foundationlevel)  
9. Fundamentos Da Engenharia de Requisitos | PDF | Estudos de Línguas Estrangeiras, acessado em fevereiro 6, 2026, [https://www.scribd.com/doc/259021567/Fundamentos-Da-Engenharia-de-Requisitos](https://www.scribd.com/doc/259021567/Fundamentos-Da-Engenharia-de-Requisitos)  
10. Requisitos funcionais VS não funcionais (com exemplos) \- Visure Solutions, acessado em fevereiro 6, 2026, [https://visuresolutions.com/pt/guia-de-esmolas/requisitos-funcionais-vs-n%C3%A3o-funcionais/](https://visuresolutions.com/pt/guia-de-esmolas/requisitos-funcionais-vs-n%C3%A3o-funcionais/)  
11. 1.1.1 | Nível Fundamental | Guia de Estudo \- iSQI, acessado em fevereiro 6, 2026, [https://isqi.org/media/b2/9c/54/1710758989/cpre\_foundationlevel\_handbook\_BR\_v1.1.1.pdf](https://isqi.org/media/b2/9c/54/1710758989/cpre_foundationlevel_handbook_BR_v1.1.1.pdf)  
12. Requisitos funcionais e não funcionais: guia para não errar \- Mosten, acessado em fevereiro 6, 2026, [https://mosten.com/requisitos-funcionais-e-nao-funcionais/](https://mosten.com/requisitos-funcionais-e-nao-funcionais/)  
13. Requisitos Funcionais e Não Funcionais para CEF (TI) \- Estratégia Concursos, acessado em fevereiro 6, 2026, [https://www.estrategiaconcursos.com.br/blog/requisitos-funcionais-nao-funcionais-cef-ti/](https://www.estrategiaconcursos.com.br/blog/requisitos-funcionais-nao-funcionais-cef-ti/)  
14. Modelo cascata x Metodologia ágil: qual escolher num projeto? | Alura, acessado em fevereiro 6, 2026, [https://www.alura.com.br/artigos/metodologia-agil-e-modelo-cascata](https://www.alura.com.br/artigos/metodologia-agil-e-modelo-cascata)  
15. What's the difference between "use case", "User Story" and "Usage Scenario"?, acessado em fevereiro 6, 2026, [https://softwareengineering.stackexchange.com/questions/113381/whats-the-difference-between-use-case-user-story-and-usage-scenario](https://softwareengineering.stackexchange.com/questions/113381/whats-the-difference-between-use-case-user-story-and-usage-scenario)  
16. IREB CPRE-FL QUICK GUIDE \- ibqts, acessado em fevereiro 6, 2026, [http://ibqts.com.br/downloads/CPRE-FL\_Quick\_Guide\_PT\_Brasil\_v11.pdf](http://ibqts.com.br/downloads/CPRE-FL_Quick_Guide_PT_Brasil_v11.pdf)  
17. Modelagem de Processos de Negócio \- um Comparativo entre BPMN e UML, acessado em fevereiro 6, 2026, [https://tede2.pucsp.br/bitstream/handle/18062/1/Daniele%20Chrusciak%20Szilagyi.pdf](https://tede2.pucsp.br/bitstream/handle/18062/1/Daniele%20Chrusciak%20Szilagyi.pdf)  
18. Repositório Institucional UFC: Levantamento de boas práticas e desafios na elicitação de requisitos de software \- Universidade Federal do Ceará, acessado em fevereiro 6, 2026, [https://repositorio.ufc.br/handle/riufc/25017?locale=es](https://repositorio.ufc.br/handle/riufc/25017?locale=es)  
19. Uma Metodologia de Elicitação de Requisitos de Software Baseada na Teoria da Atividade \- Unicamp, acessado em fevereiro 6, 2026, [https://repositorio.unicamp.br/Busca/Download?codigoArquivo=466908](https://repositorio.unicamp.br/Busca/Download?codigoArquivo=466908)  
20. Engenharia de Requisitos: conheça todas as etapas do processo \- OPENCADD, acessado em fevereiro 6, 2026, [https://www.opencadd.com.br/blog/engenharia-de-requisitos-conheca-todas-as-etapas-do-processo](https://www.opencadd.com.br/blog/engenharia-de-requisitos-conheca-todas-as-etapas-do-processo)  
21. Desafios e Práticas da Engenharia de Requisitos no Contexto de Fábrica de Software com foco na Documentação e Gestão do Conhecimento. | Cadernos do IME \- Série Informática \- UERJ, acessado em fevereiro 6, 2026, [https://www.e-publicacoes.uerj.br/cadinf/article/view/47530](https://www.e-publicacoes.uerj.br/cadinf/article/view/47530)  
22. Engenharia de Requisitos \- by Leandro Raposo \- Medium, acessado em fevereiro 6, 2026, [https://medium.com/@leandro-raposo/engenharia-de-requisitos-b7a36c2e645c](https://medium.com/@leandro-raposo/engenharia-de-requisitos-b7a36c2e645c)  
23. Como lidar com requisitos conflitantes em sistemas de negócios \- Visure Solutions, acessado em fevereiro 6, 2026, [https://visuresolutions.com/pt/guia-de-esmolas/requisitos-conflitantes/](https://visuresolutions.com/pt/guia-de-esmolas/requisitos-conflitantes/)  
24. Engenharia de Requisitos em Aplicações Web: Perspectivas de Desenvolvedores e Analistas \- Repositório Institucional UFC \- Universidade Federal do Ceará, acessado em fevereiro 6, 2026, [https://repositorio.ufc.br/bitstream/riufc/82564/1/2025\_tcc\_jsgcsantos.pdf](https://repositorio.ufc.br/bitstream/riufc/82564/1/2025_tcc_jsgcsantos.pdf)  
25. 16 melhores softwares de gerenciamento de requisitos para 2025 | Prós e contras, acessado em fevereiro 6, 2026, [https://visuresolutions.com/pt/guia-de-esmolas/principais-ferramentas-de-software-de-gerenciamento-de-requisitos/](https://visuresolutions.com/pt/guia-de-esmolas/principais-ferramentas-de-software-de-gerenciamento-de-requisitos/)  
26. IA em Gestão de Requisitos: Técnicas, Processos e Ferramentas \- Visure Solutions, acessado em fevereiro 6, 2026, [https://visuresolutions.com/pt/guia-de-esmolas/gerenciamento-de-requisitos-de-IA/](https://visuresolutions.com/pt/guia-de-esmolas/gerenciamento-de-requisitos-de-IA/)  
27. Desenvolvimento ágil e em cascata: entenda a diferença \- Blog Cronapp, acessado em fevereiro 6, 2026, [https://blog.cronapp.io/entenda-as-diferencas-entre-o-desenvolvimento-agil-e-em-cascata/](https://blog.cronapp.io/entenda-as-diferencas-entre-o-desenvolvimento-agil-e-em-cascata/)  
28. Use Case VS User Story: Difference Explained with Examples \- UXtweak, acessado em fevereiro 6, 2026, [https://blog.uxtweak.com/use-case-vs-user-stories/](https://blog.uxtweak.com/use-case-vs-user-stories/)  
29. Use Cases vs. User Stories: How They Differ and When to Use Them | Easy Agile, acessado em fevereiro 6, 2026, [https://www.easyagile.com/blog/use-cases-vs-user-stories](https://www.easyagile.com/blog/use-cases-vs-user-stories)  
30. ANÁLISE E MODELAGEM DE PROCESSOS DE NEGÓCIOS PARA A DEFINIÇÃO DE REQUISITOS DE UM SISTEMA DE INFORMAÇÃO \- Biblioteca Digital de Trabalhos Acadêmicos da USP, acessado em fevereiro 6, 2026, [https://bdta.abcd.usp.br/directbitstream/2a427764-302b-4fdc-b3e5-b02d333e17d2/FernandoAlbuquerqueKalil%20TCCPRO10.pdf](https://bdta.abcd.usp.br/directbitstream/2a427764-302b-4fdc-b3e5-b02d333e17d2/FernandoAlbuquerqueKalil%20TCCPRO10.pdf)  
31. BPMN vs UML: compare e entenda as diferenças na prática \- Miro, acessado em fevereiro 6, 2026, [https://miro.com/pt/diagrama/bpmn-vs-uml/](https://miro.com/pt/diagrama/bpmn-vs-uml/)  
32. GERENCIAMENTO DE PROCESSOS DE NEGÓCIOS: ESTUDO DE CASO DA INTEGRAÇÃO ENTRE BPMN E UML, acessado em fevereiro 6, 2026, [https://singep.org.br/4singep/resultado/734.pdf](https://singep.org.br/4singep/resultado/734.pdf)  
33. Diagramas de Caso de Uso na Modelagem UML \- IBM, acessado em fevereiro 6, 2026, [https://www.ibm.com/docs/pt-br/rsas/7.5.0?topic=diagrams-use-case](https://www.ibm.com/docs/pt-br/rsas/7.5.0?topic=diagrams-use-case)  
34. Guia completo para diagramas UML: domine 14 diagramas UML em 10 minutos, acessado em fevereiro 6, 2026, [https://www.processon.io/pt/blog/umldiagram-pt](https://www.processon.io/pt/blog/umldiagram-pt)  
35. Diagrama de caso de uso UML: O que é, como fazer e exemplos | Lucidchart, acessado em fevereiro 6, 2026, [https://www.lucidchart.com/pages/pt/diagrama-de-caso-de-uso-uml](https://www.lucidchart.com/pages/pt/diagrama-de-caso-de-uso-uml)  
36. aprenda sobre todos os tipos de diagramas UML com exemplos \- Creately, acessado em fevereiro 6, 2026, [https://creately.com/blog/pt/diagrama/guia-de-tipos-de-diagramas-uml-aprenda-sobre-todos-os-tipos-de-diagramas-uml-com-exemplos/](https://creately.com/blog/pt/diagrama/guia-de-tipos-de-diagramas-uml-aprenda-sobre-todos-os-tipos-de-diagramas-uml-com-exemplos/)  
37. Resumo: UML e BPMN. \>\> UML — Unified Modeling Language | by Livroniaca (Dani), acessado em fevereiro 6, 2026, [https://livroniaca.medium.com/resumo-uml-e-bpmn-57f2cabfe9f3](https://livroniaca.medium.com/resumo-uml-e-bpmn-57f2cabfe9f3)  
38. Ferramentas de Gerenciamento de Requisitos: Otimizando a Clareza do Conceito à Entrega, acessado em fevereiro 6, 2026, [https://www.larksuite.com/pt\_br/blog/requirements-management-tools](https://www.larksuite.com/pt_br/blog/requirements-management-tools)  
39. As 10 principais ferramentas e softwares de rastreamento de requisitos para 2025, acessado em fevereiro 6, 2026, [https://visuresolutions.com/pt/guia-de-esmolas/ferramentas-de-rastreamento-de-requisitos/](https://visuresolutions.com/pt/guia-de-esmolas/ferramentas-de-rastreamento-de-requisitos/)  
40. Requisitos de software: o que são, tipos e etapas essenciais \- SoftDesign, acessado em fevereiro 6, 2026, [https://www.softdesign.com.br/blog/requisitos-de-software-funcionais-e-nao-funcionais/](https://www.softdesign.com.br/blog/requisitos-de-software-funcionais-e-nao-funcionais/)  
41. Uma Análise Crítica dos Desafios para Engenharia de Requisitos em Manutenção de Software, acessado em fevereiro 6, 2026, [http://wer.inf.puc-rio.br/WERpapers/artigos/artigos\_WER04/Rodrigo\_Espindola.pdf](http://wer.inf.puc-rio.br/WERpapers/artigos/artigos_WER04/Rodrigo_Espindola.pdf)  
42. O verdadeiro valor da IA no desenvolvimento de software | McKinsey, acessado em fevereiro 6, 2026, [https://www.mckinsey.com/featured-insights/destaques/o-verdadeiro-valor-da-ia-no-desenvolvimento-de-software/pt](https://www.mckinsey.com/featured-insights/destaques/o-verdadeiro-valor-da-ia-no-desenvolvimento-de-software/pt)  
43. (PDF) Desafios Atuais e a Evolução da Engenharia de Software: Novas Exigências e a Dependência da Inteligência Artificial \- ResearchGate, acessado em fevereiro 6, 2026, [https://www.researchgate.net/publication/393533620\_Desafios\_Atuais\_e\_a\_Evolucao\_da\_Engenharia\_de\_Software\_Novas\_Exigencias\_e\_a\_Dependencia\_da\_Inteligencia\_Artificial](https://www.researchgate.net/publication/393533620_Desafios_Atuais_e_a_Evolucao_da_Engenharia_de_Software_Novas_Exigencias_e_a_Dependencia_da_Inteligencia_Artificial)  
44. Impacto da IA na Definição de Requisitos de Software \- Humanoide.dev, acessado em fevereiro 6, 2026, [https://www.humanoide.dev/blog/impacto-ia-definicao-requisitos-software](https://www.humanoide.dev/blog/impacto-ia-definicao-requisitos-software)  
45. IA no contexto de desenvolvimento de software \- IBM, acessado em fevereiro 6, 2026, [https://www.ibm.com/br-pt/think/topics/ai-in-software-development](https://www.ibm.com/br-pt/think/topics/ai-in-software-development)  
46. Integração da inteligência artificial na engenharia de requisitos: criação de um sistema para escrita de histórias de usuário e planos de teste com uso de um modelo linguístico \- Universidade Federal Fluminense, acessado em fevereiro 6, 2026, [https://app.uff.br/riuff/handle/1/38906](https://app.uff.br/riuff/handle/1/38906)  
47. A Engenharia de Requisitos na Era dos Algoritmos: Colaboração, Não Substituição, acessado em fevereiro 6, 2026, [https://dev.to/vinicius3w/a-engenharia-de-requisitos-na-era-dos-algoritmos-colaboracao-nao-substituicao-4knj](https://dev.to/vinicius3w/a-engenharia-de-requisitos-na-era-dos-algoritmos-colaboracao-nao-substituicao-4knj)