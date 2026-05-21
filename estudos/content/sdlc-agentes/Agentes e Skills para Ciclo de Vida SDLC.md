Com base na pesquisa levantada sobre o desenvolvimento de software orientado a agentes (Agentic SDLC), a construção de um ciclo de vida ponta a ponta requer uma arquitetura multi-agente bem estruturada. Nela, cada agente atua como um "membro da equipe" especializado, dotado de capacidades instrumentais encapsuladas no formato de "Skills" (frequentemente padronizadas por repositórios como o *Agent Skills* ou comunicadas através do protocolo MCP).

Aqui está a lista dos agentes e seus devidos conjuntos de skills (habilidades operacionais e metodológicas) que você precisará construir ou configurar para cobrir todo o ciclo de vida do projeto:

**1\. Agente Analista de Requisitos / Product Manager**

* **Objetivo:** Elicitação de necessidades do cliente, desdobramento de ideias brutas e criação de documentação estruturada.

* **Skills necessárias:**  
  * **Técnicas de Entrevista Avançada:** Empregar técnicas cognitivas e de psicologia, como a técnica de *Laddering* e sondagem contextual, que transcende pedidos básicos para descobrir valores reais de negócio e necessidades implícitas.

  * **Análise e Curadoria de Requisitos:** Avaliar os requisitos utilizando heurísticas de mercado como INVEST, matrizes SWOT e a matriz de qualidade dos "6 Cs" (clareza, completude, concisão, consistência, correção e contexto).

  * **Formatação de Artefatos:** Gerar histórias de usuários (User Stories) e Documentos de Requisitos do Produto (PRD) de forma rastreável, com critérios de aceitação rígidos (frequentemente mapeados em sintaxe de comportamento como Gherkin/BDD).

**2\. Agente Scrum Master / Gerente de Fluxo Ágil**

* **Objetivo:** Orquestrar o fluxo de trabalho das equipes, automação administrativa e remoção de impedimentos.  
* **Skills necessárias:**  
  * **Facilitação de Rituais Ágeis:** Habilidade de assumir a gestão automática de cerimônias como as reuniões diárias (*daily standups*), controlando o tempo, registrando impedimentos (*blockers*) e acompanhando evoluções.  
  * **Planejamento de Sprint e Backlog Grooming:** Sugestão de composição inteligente para sprints analisando capacidade pregressa, desdobramento automático de grandes Épicos e mapeamento visual de dependências.  
  * **Geração de Relatórios e Retrospectiva:** Produção de sumários do final da sprint focados em valor para as partes interessadas.

**3\. Agente Arquiteto de Software**

* **Objetivo:** Traduzir os requisitos aprovados na base técnica do sistema e documentar decisões táticas com a equipe de desenvolvimento.  
* **Skills necessárias:**  
  * **Análise de Trade-offs:** Avaliar múltiplas opções de *stack* tecnológica, gerando relatórios precisos que ponderam vantagens arquitetônicas e riscos de infraestrutura.  
  * **Geração de Registros de Decisão (ADRs):** Estruturação e redação oficial das escolhas tecnológicas (*Architecture Decision Records*), formalizando o que será feito e por que será feito para evitar deriva nas etapas de codificação.  
  * **Diagramação como Código (Diagram-as-code):** Capacidade de gerar representações visuais usando sintaxes textuais e declarativas como Mermaid, PlantUML ou D2 (Terrastruct).

**4\. Agente Desenvolvedor (Coding Agent)**

* **Objetivo:** Construção real das tarefas de desenvolvimento e atuação direta sobre os repositórios.

* **Skills necessárias:**  
  * **Governança de Repositório Git:** Conhecimento autônomo sobre metodologias de criação de ramos (*branching*), convenções de *commit* semântico, sincronização para evitar conflitos de mesclagem (*merge conflicts*) e abertura automática de Pull Requests.

  * **Modelagem de Dados e Banco de Dados:** Entendimento nativo dos dialetos SQL, garantindo conexões, geração performática do esquema relacional, e inspeções de banco orientadas a *best practices* da equipe.

  * **Gestão de Dívida Técnica Ativa:** Leitura do código na forma de Árvores de Sintaxe Abstrata (AST) para identificar débitos estruturais, aplicando refatorações massivas ou modernização de pacotes e APIs de forma escalável.

**5\. Agente Revisor / Crítico de Código (Code Reviewer)**

* **Objetivo:** Atuar como um *Quality Gate* automatizado antes da transição da atividade, validando o trabalho do Agente Desenvolvedor.  
* **Skills necessárias:**  
  * **Inspeção Estática de Qualidade:** Julgar legibilidade, modularização, complexidade ciclomática e aderência a padrões da organização utilizando matrizes de revisão.  
  * **Segurança (Security-and-hardening):** Verificação ativa voltada à eliminação de vulnerabilidades graves do ciclo OWASP Top 10 (ex: prevenção de SQL Injection, vazamento de chaves de API, problemas de roteamento).

**6\. Agente de Engenharia de Qualidade (QA / Tester)**

* **Objetivo:** Validação funcional da aplicação e garantia de solidez das modificações lançadas.  
* **Skills necessárias:**  
  * **Criação de Testes Orientada à Intenção:** Transformação de histórias de usuário e especificações BDD diretamente em cenários de testes executáveis (unitários e de integração) antes mesmo que a interface esteja pronta.

  * **Auto-Cura (Self-healing Execution):** Capacidade de perceber quando o código da interface do usuário sofreu mutações pequenas, readaptando ou corrigindo automaticamente os seletores dos testes falhos sem a necessidade de intervenção humana.  
  * **Despacho Cirúrgico de Testes:** Análise de impacto e priorização que determina, baseada nas alterações recentes da base de código, os exatos testes que correm risco de regressão.

**7\. Agente de Release e CI/CD (DevOps & Infraestrutura)**

* **Objetivo:** Lançar entregáveis formalmente e assegurar a observabilidade e vitalidade dos ambientes.  
* **Skills necessárias:**  
  * **Automação e Trigger de CI/CD:** Coordenar lançamentos, verificações de qualidade pré-voo, sinalização entre repositórios e alinhamento do portão de qualidade final antes do ambiente de produção.  
  * **Cálculo e Observabilidade de Métricas DORA:** Integração e extração das métricas vitais da organização — monitorando a Frequência de Implantação (*Deployment Frequency*), *Lead Time for Changes*, Tempo Médio de Restauração (MTTR) e a Taxa de Falhas nas Alterações (*Change Failure Rate*).  
  * **Resposta a Incidentes e Auto-Remediação:** Agir proativamente com o monitoramento das análises em nuvem e, frente à falhas perigosas, executar ações defensivas como desativar *feature flags*, isolar ambientes ou conduzir a regressão de versão (*rollbacks*).  
  * **Geração Documental e Release Notes:** Documentação em tempo real via síntese das inovações recém-promovidas.  
