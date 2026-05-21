# **Perfil Analítico e Competências de Especialidade para o Cientista de Dados em Azure Databricks: Uma Perspectiva de Inteligência de Dados**

A evolução do ecossistema de dados na nuvem transformou radicalmente as expectativas sobre o papel do cientista de dados. O profissional contemporâneo, especializado em Azure Databricks, não é mais apenas um modelador estatístico, mas um arquiteto de inteligência de dados que opera na intersecção entre a engenharia de dados, a inteligência artificial generativa e a governança corporativa.1 Esta mudança de paradigma é impulsionada pela transição das arquiteturas de Data Lake para o modelo Lakehouse e, mais recentemente, para a Plataforma de Inteligência de Dados, onde a semântica dos dados é integrada nativamente à infraestrutura de computação.2 O Azure Databricks, como um serviço de primeira classe na Microsoft Azure, exige que o especialista domine não apenas algoritmos, mas também a eficiência operacional em larga escala, a otimização de custos (FinOps) e a integração fluida com o ecossistema Microsoft, incluindo o Microsoft Fabric e o Azure AI Foundry.5

## **A Fundação Técnica: Arquitetura Lakehouse e Processamento Distribuído**

A competência primária de um especialista em Azure Databricks reside na compreensão profunda da arquitetura Lakehouse. Este modelo unifica o melhor dos Data Warehouses (desempenho e integridade transacional) com a flexibilidade e o baixo custo dos Data Lakes.1 O cientista de dados deve compreender como o Delta Lake, como camada de armazenamento aberta, fornece propriedades ACID (Atomicidade, Consistência, Isolamento e Durabilidade) que são fundamentais para garantir que os dados utilizados no treinamento de modelos sejam confiáveis e versionáveis.1

O domínio do Apache Spark é o motor que viabiliza o processamento de grandes volumes de dados. O profissional deve ter conhecimento avançado sobre a arquitetura de clusters do Azure Databricks, diferenciando o papel do nó driver, que coordena a execução, dos nós workers, que processam as tarefas em paralelo.9 A habilidade de otimizar jobs Spark é crítica; isso envolve o tratamento de problemas como o "data skew" (distribuição desigual de dados entre partições) e o "data spill" (quando os dados excedem a memória disponível e transbordam para o disco), ambos capazes de degradar severamente o desempenho e elevar os custos de computação.10

### **Linguagens e Ferramentas de Programação**

Embora o Python continue sendo a linguagem franca para a ciência de dados, a proficiência em SQL é essencial para a manipulação de dados dentro do ambiente Delta Lake.13 Além disso, o conhecimento em Scala e R permite que o profissional escolha a ferramenta mais eficiente para tarefas específicas de processamento e análise estatística.11 O uso de Spark DataFrames e a criação de User-Defined Functions (UDFs) são competências rotineiras, permitindo a aplicação de transformações complexas em escala distribuída.9

| Competência Técnica | Descrição e Aplicação | Ferramenta/Tecnologia Relacionada |
| :---- | :---- | :---- |
| **Programação Distribuída** | Capacidade de escrever código PySpark e SparkSQL otimizado para clusters. | Apache Spark, Python 9 |
| **Arquitetura de Dados** | Domínio do modelo Lakehouse e armazenamento em formato Delta. | Delta Lake, UniForm 1 |
| **Otimização de Performance** | Gestão de particionamento, indexação e tratamento de skew/spill. | Liquid Clustering, Z-Order 11 |
| **Engenharia de Recursos** | Criação e versionamento de variáveis preditivas para modelos. | Databricks Feature Store 17 |
| **Governança de Dados** | Gestão de metadados, linhagem e controle de acesso. | Unity Catalog 2 |

## **O Ciclo de Vida da Ciência de Dados no Azure Databricks**

O trabalho do cientista de dados segue uma metodologia rigorosa que começa com a definição do problema de negócio em colaboração com stakeholders.13 No ambiente Databricks, esta fase é facilitada por ferramentas de assistência de linguagem natural e o AI/BI Genie, que permitem aos analistas e cientistas explorar os dados inicialmentes através de perguntas em linguagem humana.1

Após a definição do problema, o profissional inicia a fase de obtenção e limpeza de dados. O uso do Auto Loader é recomendado para a ingestão incremental e eficiente de arquivos do Azure Data Lake Storage Gen2, garantindo que o pipeline de dados seja resiliente a mudanças de esquema.1 A fase de exploração de dados (EDA) utiliza notebooks interativos que suportam colaboração em tempo real, permitindo que vários profissionais trabalhem no mesmo código simultaneamente, uma funcionalidade que aumenta drasticamente a produtividade em comparação com ambientes isolados.3

### **Modelagem e Otimização de Hiperparâmetros**

Na fase de modelagem, o especialista utiliza o Databricks Runtime for Machine Learning, que já vem pré-configurado com as bibliotecas mais populares, como TensorFlow, PyTorch e Scikit-Learn.9 A otimização de hiperparâmetros é frequentemente automatizada através do AutoML, que permite construir modelos de alta qualidade com esforço mínimo de codificação, ou através de frameworks como Optuna e Ray Tune para buscas em larga escala em clusters de GPU.15

A formulação matemática para a minimização da função de perda em modelos de aprendizado profundo, em um contexto distribuído, exige que o cientista de dados compreenda como os gradientes são agregados entre os nós do cluster. O uso de **TorchDistributor** e **DeepSpeed** é fundamental para gerenciar essa comunicação, permitindo o treinamento de modelos que seriam grandes demais para a memória de uma única máquina.26 Nestes cenários, a escolha do hardware Azure, como as instâncias de GPU A100 ou as séries NC com rede acelerada, é uma decisão técnica com impacto direto na convergência do modelo:

![][image1]  
Onde ![][image2] representa os pesos do modelo e ![][image3] o termo de regularização, o especialista deve garantir que o valor de ![][image4] (o tamanho total do dataset) seja processado de forma eficiente através do paralelismo de dados ou de modelo.15

## **Inteligência Artificial Generativa e Sistemas Compostos**

Um divisor de águas nas competências exigidas para 2024 e 2025 é a proficiência no Mosaic AI. O cientista de dados moderno deve ser capaz de construir "Sistemas de IA Compostos", que integram múltiplos componentes, como bancos de dados vetoriais, ferramentas de monitoramento e agentes autônomos, em vez de depender de um único modelo monolítico.2

### **Implementação de RAG (Retrieval-Augmented Generation)**

O desenvolvimento de aplicações RAG tornou-se uma das tarefas mais comuns na plataforma.29 O especialista deve dominar a cadeia de RAG:

1. **Ingestão e Fragmentação (Chunking):** Processar dados não estruturados, transformando documentos complexos em fragmentos gerenciáveis.31  
2. **Geração de Embeddings:** Utilizar modelos de embedding para converter texto em vetores numéricos.29  
3. **Busca Vetorial:** Configurar o Mosaic AI Vector Search como um banco de dados vetorial serverless, garantindo a sincronização automática entre a tabela Delta de origem e o índice vetorial.23  
4. **Aumento e Geração:** Desenvolver prompts que utilizam os dados recuperados para fornecer contexto ao LLM, reduzindo alucinações e garantindo respostas baseadas em dados proprietários da empresa.29

### **Agentes e Automação com Agent Bricks**

As notícias mais recentes do Microsoft Ignite 2025 destacam o lançamento do **Agent Bricks** e do **Supervisor Agent**.5 O cientista de dados agora é responsável por orquestrar "forças-tarefa" de agentes que colaboram em tarefas complexas.35 Por exemplo, um agente pode ser configurado para analisar dados de vendas, enquanto outro consulta contratos de fornecedores, e um terceiro sintetiza essas informações para uma recomendação estratégica.4 A habilidade de definir ferramentas para esses agentes (como funções do Unity Catalog) e gerenciar suas permissões é uma nova fronteira de conhecimento técnico.35

| Funcionalidade de IA Generativa | Descrição Técnica | Benefício para o Cientista de Dados |
| :---- | :---- | :---- |
| **Mosaic AI Agent Framework** | SDK para construção, implantação e avaliação de agentes e RAG. | Acelera o ciclo de desenvolvimento de protótipo para produção.29 |
| **Vector Search Serverless** | Banco de dados vetorial integrado com sincronização automática. | Elimina a necessidade de manter pipelines de ingestão vetorial complexos.23 |
| **Model Training (Fine-tuning)** | Ajuste fino de modelos de fundação (Llama, Mistral) com dados privados. | Cria modelos menores e mais eficientes para tarefas específicas.2 |
| **Agent Bricks AI Gateway** | Interface unificada para gerenciar múltiplos provedores de LLM. | Facilita a troca de modelos sem alterar o código da aplicação e controla custos.30 |
| **MLflow 3.0 Tracing** | Observabilidade profunda para aplicações de IA generativa. | Permite depurar cadeias complexas e medir latência e custo por etapa.39 |

## **MLOps e a Industrialização da Inteligência Artificial**

A passagem do modelo experimental para o sistema de produção é o domínio do MLOps.9 O especialista em Azure Databricks deve aplicar princípios de CI/CD (Integração Contínua e Implantação Contínua) para garantir que os modelos sejam implantados de forma confiável e monitorados quanto à degradação de desempenho.17

### **Gestão do Ciclo de Vida com MLflow 3.0**

O MLflow é a espinha dorsal do MLOps no Databricks. Com o lançamento do MLflow 3.0, novas capacidades foram introduzidas para lidar especificamente com os desafios da IA generativa.41 O profissional deve estar apto a:

* **Rastreamento de Experimentos:** Logar parâmetros, métricas e artefatos, garantindo a reprodutibilidade total do ambiente de treinamento.9  
* **Avaliação de Agentes:** Utilizar o "LLM as a Judge" (LLM como juiz) para automatizar a avaliação de saídas de texto livre, medindo métricas como relevância e segurança através de diretrizes em linguagem natural.39  
* **Review App:** Utilizar interfaces de rotulagem para coletar feedback de especialistas humanos (experts-in-the-loop) para validar e melhorar as respostas dos modelos antes da implantação em larga escala.39  
* **Model Serving Serverless:** Implantar modelos como endpoints de API REST que escalam automaticamente conforme a demanda, integrando-se nativamente com a linhagem do Unity Catalog.17

### **Desenvolvimento de Databricks Apps**

Uma habilidade emergente e de alto valor é a criação de **Databricks Apps**.35 Diferente de dashboards tradicionais, essas são aplicações completas construídas em Python ou Node.js (usando Streamlit, Gradio ou React) que rodam em infraestrutura serverless dentro do Databricks.35 O cientista de dados utiliza essas aplicações para entregar ferramentas de decisão customizadas diretamente para os usuários finais, eliminando a barreira entre o código analítico e a interface de negócio.35 A capacidade de gerenciar o deploy dessas apps via Git é um requisito técnico fundamental para manter fluxos de trabalho modernos de engenharia de software.35

## **Governança, Segurança e o Ecossistema Microsoft**

A responsabilidade pelo dado não termina na criação do modelo; a governança é agora uma tarefa intrínseca ao papel do cientista de dados.2 O Unity Catalog atua como a camada de governança universal, e o profissional deve saber como utilizá-lo para gerenciar não apenas tabelas, mas também modelos de ML e volumes de dados não estruturados.2

### **Integração com Microsoft Purview e Fabric**

A integração do Azure Databricks com o **Microsoft Purview** permite que os ativos de dados sejam descobertos e classificados automaticamente em toda a organização.43 O cientista de dados deve compreender como configurar escaneamentos do Unity Catalog no Purview para garantir que dados sensíveis (PII) sejam identificados e protegidos por políticas de acesso consistentes.43

Em relação ao **Microsoft Fabric**, a estratégia atual da Microsoft foca na interoperabilidade "zero-copy".5 O especialista deve dominar:

* **Mirroring e Shortcuts:** Acessar dados do Databricks dentro do Fabric OneLake sem duplicação física, permitindo que ferramentas de BI como o Power BI consumam dados via **Direct Lake mode** com latência mínima e desempenho de memória.5  
* **Unificação de Inteligência:** Integrar o Fabric IQ (inteligência sobre dados estruturados) com o Foundry IQ (inteligência sobre conhecimento e processos) para criar agentes que raciocinam sobre a realidade operacional e as obrigações contratuais simultaneamente.37

### **Ética e IA Responsável**

O cientista de dados deve implementar práticas de IA responsável, o que inclui a interpretabilidade de modelos (uso de SHAP ou LIME para explicar predições), a detecção de viés em datasets de treinamento e a configuração de filtros de segurança para evitar comportamentos inadequados de LLMs.29 A conformidade com padrões como HIPAA ou GDPR no ambiente Databricks é facilitada por perfis de segurança de conformidade, que o profissional deve saber operar.21

## **FinOps: Eficiência de Custos e Sustentabilidade**

Em um mundo de recursos de nuvem sob demanda, a competência em FinOps diferencia o cientista de dados experiente do iniciante.7 O profissional deve ser um gestor eficiente dos créditos Azure consumidos por suas atividades.

### **Práticas de Otimização de Recursos**

As estratégias de FinOps aplicadas ao Azure Databricks incluem:

* **Políticas de Orçamento Serverless:** Configurar limites de gastos para clusters de SQL e notebooks serverless, garantindo que experimentos de pesquisa não causem estouros de orçamento.7  
* **Seleção Inteligente de Instâncias:** Utilizar instâncias de Spot para cargas de trabalho tolerantes a falhas (como processamento em lote em ambientes de desenvolvimento) e reservar instâncias de alto desempenho para aplicações críticas de produção.7  
* **Gestão de Terminação e Escalonamento:** Implementar auto-termination agressivo e auto-scaling dinâmico para garantir que a infraestrutura seja desligada quando ociosa e expandida apenas quando necessário.7  
* **Sustentabilidade de TI:** Utilizar o Azure Carbon Optimization para medir e reduzir a pegada de carbono de grandes treinamentos de modelos, alinhando a prática de dados com as metas de ESG (Ambiental, Social e Governança) da corporação.49

| Tática de FinOps | Aplicação Prática | Impacto no Negócio |
| :---- | :---- | :---- |
| **Serverless SQL/Notebooks** | Migração de cargas de trabalho interativas para infraestrutura sem servidor. | Elimina custos de clusters "warm" e ociosidade.16 |
| **Mandatory Tagging** | Aplicação de tags de Centro de Custo em todos os recursos. | Permite chargeback preciso e visibilidade financeira por projeto.7 |
| **AvailableNow Trigger** | Uso de gatilhos de streaming para processamento quasi-batch. | Reduz o custo de manter clusters de streaming ligados 24/7.12 |
| **Compactação de Arquivos** | Manutenção regular de tabelas Delta (OPTIMIZE/VACUUM). | Reduz custos de armazenamento e melhora a eficiência de leitura.11 |

## **Soft Skills e Valor de Negócio: Comunicando o ROI**

O sucesso de um cientista de dados especialista em Databricks também depende de sua capacidade de traduzir complexidade técnica em valor de negócio.19 A plataforma oferece ferramentas para facilitar essa comunicação, como os dashboards de IA/BI que permitem que usuários de negócios façam perguntas complexas diretamente aos dados curados.2

O profissional deve focar em:

1. **Redução do Time-to-Market:** Demonstrar como o uso de pipelines declarativos (Lakeflow) e MLflow acelera a entrega de insights.2  
2. **Melhoria na Tomada de Decisão:** Utilizar análise preditiva e automação para mover a organização de uma postura reativa para uma preditiva, antecipando churn de clientes ou falhas em equipamentos.56  
3. **Transparência e Confiança:** Usar a linhagem de dados e a governança do Unity Catalog para construir confiança nos resultados apresentados a reguladores e executivos.3

## **Desenvolvimento Profissional e Certificações**

Para manter o alinhamento com as práticas mais recentes, o cientista de dados deve seguir um roteiro de aprendizado contínuo focado nas certificações oficiais e nas atualizações da comunidade.23

### **Roteiro de Certificação Sugerido**

A jornada de certificação da Microsoft fornece a validação industrial das competências discutidas:

* **DP-100 (Azure Data Scientist Associate):** O exame fundamental que cobre o design e a implementação de soluções de ciência de dados no Azure, incluindo o uso de Azure Machine Learning e MLflow.48  
* **DP-203 (Azure Data Engineer Associate):** Vital para entender a infraestrutura de dados sob o Databricks, incluindo processamento paralelo e arquiteturas de armazenamento.11  
* **Especializações em IA Generativa:** Com o foco atual em LLMs, treinamentos sobre o Azure AI Foundry e otimização de modelos de linguagem tornaram-se requisitos de facto.23

### **Canais de Atualização Constante**

Acompanhar blogs de MVPs (como James Serra) e canais de YouTube especializados é crucial para entender o "como fazer" em cenários reais.20 Eventos como o **Microsoft Ignite** e o **Databricks Data \+ AI Summit** são as janelas para as inovações que estarão disponíveis nos próximos 12 a 24 meses, como a convergência total entre OLTP e OLAP e a predominância de bancos de dados criados por agentes de IA.2

Em suma, o cientista de dados especialista em Azure Databricks é um profissional multidisciplinar. Sua excelência é medida pela capacidade de equilibrar a inovação em IA generativa com a robustez da engenharia de dados e a disciplina financeira da nuvem.3 Ao dominar o ecossistema Mosaic AI, a governança do Unity Catalog e a integração com o Microsoft Fabric, este profissional torna-se o habilitador estratégico da inteligência corporativa na era da IA.2

#### **Referências citadas**

1. What is Azure Databricks? \- Azure Databricks | Microsoft Learn, acessado em abril 9, 2026, [https://learn.microsoft.com/en-us/azure/databricks/introduction/](https://learn.microsoft.com/en-us/azure/databricks/introduction/)  
2. Data \+ AI Summit 2024: An Executive Summary for Data Leaders ..., acessado em abril 9, 2026, [https://www.databricks.com/blog/data-ai-summit-2024-executive-summary-data-leaders](https://www.databricks.com/blog/data-ai-summit-2024-executive-summary-data-leaders)  
3. A Guide to Drive ROI with Unified Data & AI on Databricks \- Krish TechnoLabs, acessado em abril 9, 2026, [https://www.krishtechnolabs.com/blog/unleashing-unified-analytics-with-databricks/](https://www.krishtechnolabs.com/blog/unleashing-unified-analytics-with-databricks/)  
4. Why Databricks is the Leading Platform in the AI Era \- Advancing Analytics, acessado em abril 9, 2026, [https://www.advancinganalytics.co.uk/blog/why-databricks-is-the-leading-platform-in-the-ai-era](https://www.advancinganalytics.co.uk/blog/why-databricks-is-the-leading-platform-in-the-ai-era)  
5. Microsoft Ignite \- Databricks events, acessado em abril 9, 2026, [https://events.databricks.com/microsoft-ignite-2025](https://events.databricks.com/microsoft-ignite-2025)  
6. Databricks runs best on Azure | Microsoft Azure Blog, acessado em abril 9, 2026, [https://azure.microsoft.com/en-us/blog/databricks-runs-best-on-azure/](https://azure.microsoft.com/en-us/blog/databricks-runs-best-on-azure/)  
7. From Chaos to Control: A Cost Maturity Journey with Databricks, acessado em abril 9, 2026, [https://www.databricks.com/blog/chaos-control-cost-maturity-journey-databricks](https://www.databricks.com/blog/chaos-control-cost-maturity-journey-databricks)  
8. Databricks 2024 Developments and Announcements \- Matrix-IFS, acessado em abril 9, 2026, [https://www.matrix-ifs.com/blog/databricks-2024-developments-and-announcements/](https://www.matrix-ifs.com/blog/databricks-2024-developments-and-announcements/)  
9. Perform data science with Azure Databricks \- Coursera, acessado em abril 9, 2026, [https://www.coursera.org/learn/perform-data-science-with-azure-databricks](https://www.coursera.org/learn/perform-data-science-with-azure-databricks)  
10. Prep for Microsoft Azure Data Engineer Associate Cert DP-203 \- Coursera, acessado em abril 9, 2026, [https://www.coursera.org/learn/prep-for-microsoft-azure-data-engineer-associate-cert-dp-203](https://www.coursera.org/learn/prep-for-microsoft-azure-data-engineer-associate-cert-dp-203)  
11. Study guide for Exam DP-203: Data Engineering on Microsoft Azure, acessado em abril 9, 2026, [https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/RE4MbYT.pdf](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/RE4MbYT.pdf)  
12. Databricks Cost Optimization Guide 2026 \- Beyond Key, acessado em abril 9, 2026, [https://www.beyondkey.com/blog/databricks-cost-optimization/](https://www.beyondkey.com/blog/databricks-cost-optimization/)  
13. Azure Data Scientist \- Job Role \- Upskilled, acessado em abril 9, 2026, [https://www.upskilled.edu.au/your-career/job-roles/azure-data-scientist](https://www.upskilled.edu.au/your-career/job-roles/azure-data-scientist)  
14. Microsoft Certified: Azure Databricks Data Engineer Associate (beta) \- Certifications, acessado em abril 9, 2026, [https://learn.microsoft.com/en-us/credentials/certifications/implementing-data-engineering-solutions-using-azure-databricks/](https://learn.microsoft.com/en-us/credentials/certifications/implementing-data-engineering-solutions-using-azure-databricks/)  
15. What is Data Science? Become a Data Scientist | Microsoft Azure, acessado em abril 9, 2026, [https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-data-science](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-data-science)  
16. Databricks Data+AI Summit 2024 \- Key Announcements \- Decube, acessado em abril 9, 2026, [https://www.decube.io/post/databricks-data-ai-summit-2024](https://www.decube.io/post/databricks-data-ai-summit-2024)  
17. Why Databricks is the Key for MLOps Success in 2025 and Beyond\! \- Advancing Analytics, acessado em abril 9, 2026, [https://www.advancinganalytics.co.uk/blog/why-databricks-is-the-key-for-mlops-success-in-2025-and-beyond](https://www.advancinganalytics.co.uk/blog/why-databricks-is-the-key-for-mlops-success-in-2025-and-beyond)  
18. Databricks MLOps For Businesses & Techies \- A Case Study \- Advancing Analytics, acessado em abril 9, 2026, [https://www.advancinganalytics.co.uk/blog/databricks-mlops-for-businesses-techies-a-case-study](https://www.advancinganalytics.co.uk/blog/databricks-mlops-for-businesses-techies-a-case-study)  
19. Maximize Databricks ROI with These Proven Strategies \- Closeloop Technologies, acessado em abril 9, 2026, [https://closeloop.com/blog/how-enterprise-teams-get-roi-from-databricks/](https://closeloop.com/blog/how-enterprise-teams-get-roi-from-databricks/)  
20. Azure Databricks End-To-End Project 2025 \[From SCRATCH\!\] \- YouTube, acessado em abril 9, 2026, [https://www.youtube.com/watch?v=4uKRzDf0zIc](https://www.youtube.com/watch?v=4uKRzDf0zIc)  
21. Best practices for serverless compute \- Azure Databricks \- Microsoft Learn, acessado em abril 9, 2026, [https://learn.microsoft.com/en-us/azure/databricks/compute/serverless/best-practices](https://learn.microsoft.com/en-us/azure/databricks/compute/serverless/best-practices)  
22. A technical overview of Azure Databricks | Microsoft Azure Blog, acessado em abril 9, 2026, [https://azure.microsoft.com/en-us/blog/a-technical-overview-of-azure-databricks/](https://azure.microsoft.com/en-us/blog/a-technical-overview-of-azure-databricks/)  
23. AI and machine learning on Databricks \- Azure Databricks | Microsoft Learn, acessado em abril 9, 2026, [https://learn.microsoft.com/en-us/azure/databricks/machine-learning/](https://learn.microsoft.com/en-us/azure/databricks/machine-learning/)  
24. Best practices for deep learning on Azure Databricks, acessado em abril 9, 2026, [https://docs.azure.cn/en-us/databricks/machine-learning/train-model/dl-best-practices](https://docs.azure.cn/en-us/databricks/machine-learning/train-model/dl-best-practices)  
25. An Updated Guide: Deep Learning Best Practices on Databricks \- Medium, acessado em abril 9, 2026, [https://medium.com/@AI-on-Databricks/an-updated-guide-deep-learning-best-practices-on-databricks-4d98aa58d346](https://medium.com/@AI-on-Databricks/an-updated-guide-deep-learning-best-practices-on-databricks-4d98aa58d346)  
26. Distributed training | Databricks on AWS, acessado em abril 9, 2026, [https://docs.databricks.com/aws/en/machine-learning/train-model/distributed-training/](https://docs.databricks.com/aws/en/machine-learning/train-model/distributed-training/)  
27. Distributed training with TorchDistributor \- Azure Databricks | Microsoft Learn, acessado em abril 9, 2026, [https://learn.microsoft.com/en-us/azure/databricks/machine-learning/train-model/distributed-training/spark-pytorch-distributor](https://learn.microsoft.com/en-us/azure/databricks/machine-learning/train-model/distributed-training/spark-pytorch-distributor)  
28. Distributed training \- Azure Databricks | Microsoft Learn, acessado em abril 9, 2026, [https://learn.microsoft.com/en-us/azure/databricks/machine-learning/train-model/distributed-training/](https://learn.microsoft.com/en-us/azure/databricks/machine-learning/train-model/distributed-training/)  
29. Mosaic AI: Build and Deploy Production-quality AI Agent Systems \- Databricks, acessado em abril 9, 2026, [https://www.databricks.com/blog/mosaic-ai-build-and-deploy-production-quality-compound-ai-systems](https://www.databricks.com/blog/mosaic-ai-build-and-deploy-production-quality-compound-ai-systems)  
30. Databricks Unveils New Mosaic AI Capabilities to Help Customers Build Production-Quality AI Systems and Applications, acessado em abril 9, 2026, [https://www.databricks.com/company/newsroom/press-releases/databricks-unveils-new-mosaic-ai-capabilities-help-customers-build](https://www.databricks.com/company/newsroom/press-releases/databricks-unveils-new-mosaic-ai-capabilities-help-customers-build)  
31. RAG (Retrieval Augmented Generation) on Azure Databricks \- Microsoft Learn, acessado em abril 9, 2026, [https://learn.microsoft.com/en-us/azure/databricks/generative-ai/retrieval-augmented-generation](https://learn.microsoft.com/en-us/azure/databricks/generative-ai/retrieval-augmented-generation)  
32. AI Ready Apps: build RAG Data pipeline from Azure Blob Storage to SQL Database in Microsoft Fabric within minutes, acessado em abril 9, 2026, [https://blog.fabric.microsoft.com/en-US/blog/ai-ready-apps-build-rag-data-pipeline-from-azure-blob-storage-to-sql-database-in-microsoft-fabric-within-minutes/](https://blog.fabric.microsoft.com/en-US/blog/ai-ready-apps-build-rag-data-pipeline-from-azure-blob-storage-to-sql-database-in-microsoft-fabric-within-minutes/)  
33. Building Custom AI Applications with Microsoft Fabric: Implementing Retrieval Augmented Generation for Enhanced Language Models, acessado em abril 9, 2026, [https://blog.fabric.microsoft.com/en-US/blog/building-custom-ai-applications-with-microsoft-fabric-implementing-retrieval-augmented-generation-for-enhanced-language-models/](https://blog.fabric.microsoft.com/en-US/blog/building-custom-ai-applications-with-microsoft-fabric-implementing-retrieval-augmented-generation-for-enhanced-language-models/)  
34. Mosaic AI Vector Search generally available in Azure Databricks \- Microsoft Community Hub, acessado em abril 9, 2026, [https://techcommunity.microsoft.com/blog/azure-databricks/announcing-mosaic-ai-vector-search-general-availability-in-azure-databricks/4144712](https://techcommunity.microsoft.com/blog/azure-databricks/announcing-mosaic-ai-vector-search-general-availability-in-azure-databricks/4144712)  
35. What's coming? \- Azure Databricks | Microsoft Learn, acessado em abril 9, 2026, [https://learn.microsoft.com/en-us/azure/databricks/release-notes/whats-coming](https://learn.microsoft.com/en-us/azure/databricks/release-notes/whats-coming)  
36. Microsoft Ignite 2025 Recap: Agentic AI, Foundry, and Azure Innovations, acessado em abril 9, 2026, [https://azure.microsoft.com/en-us/blog/actioning-agentic-ai-5-ways-to-build-with-news-from-microsoft-ignite-2025/](https://azure.microsoft.com/en-us/blog/actioning-agentic-ai-5-ways-to-build-with-news-from-microsoft-ignite-2025/)  
37. May, 2025 | James Serra's Blog, acessado em abril 9, 2026, [https://www.jamesserra.com/archive/2025/05/](https://www.jamesserra.com/archive/2025/05/)  
38. Tutorial: Build, evaluate, and deploy a retrieval agent | Databricks on AWS, acessado em abril 9, 2026, [https://docs.databricks.com/aws/en/generative-ai/tutorials/agent-framework-notebook](https://docs.databricks.com/aws/en/generative-ai/tutorials/agent-framework-notebook)  
39. Introducing Enhanced Agent Evaluation | Databricks Blog, acessado em abril 9, 2026, [https://www.databricks.com/blog/introducing-enhanced-agent-evaluation](https://www.databricks.com/blog/introducing-enhanced-agent-evaluation)  
40. Building Responsible and Calibrated AI Agents with Databricks and MLflow: A Real-World Use Case Deep Dive, acessado em abril 9, 2026, [https://www.databricks.com/blog/building-responsible-and-calibrated-ai-agents-databricks-and-mlflow-real-world-use-case-deep](https://www.databricks.com/blog/building-responsible-and-calibrated-ai-agents-databricks-and-mlflow-real-world-use-case-deep)  
41. MLflow 3.0: Build, Evaluate, and Deploy Generative AI with Confidence | Databricks Blog, acessado em abril 9, 2026, [https://www.databricks.com/blog/mlflow-30-unified-ai-experimentation-observability-and-governance](https://www.databricks.com/blog/mlflow-30-unified-ai-experimentation-observability-and-governance)  
42. Designing and Implementing a Data Science Solution on Azure (DP-100) (MDP100) \- QA, acessado em abril 9, 2026, [https://www.qa.com/en-us/course-catalogue/courses/designing-and-implementing-a-data-science-solution-on-azure-dp-100-mdp100/](https://www.qa.com/en-us/course-catalogue/courses/designing-and-implementing-a-data-science-solution-on-azure-dp-100-mdp100/)  
43. Connect to and manage Azure Databricks Unity Catalog in Microsoft Purview, acessado em abril 9, 2026, [https://learn.microsoft.com/en-us/purview/register-scan-azure-databricks-unity-catalog](https://learn.microsoft.com/en-us/purview/register-scan-azure-databricks-unity-catalog)  
44. Microsoft Purview and Azure Databricks Better Together, acessado em abril 9, 2026, [https://techcommunity.microsoft.com/blog/microsoft-security-blog/microsoft-purview-and-azure-databricks-better-together/4009551](https://techcommunity.microsoft.com/blog/microsoft-security-blog/microsoft-purview-and-azure-databricks-better-together/4009551)  
45. Step-by-Step Guide: Integrating Microsoft Purview with Azure Databricks and Microsoft Fabric, acessado em abril 9, 2026, [https://techcommunity.microsoft.com/blog/microsoft-security-blog/step-by-step-guide-integrating-microsoft-purview-with-azure-databricks-and-micro/4459549](https://techcommunity.microsoft.com/blog/microsoft-security-blog/step-by-step-guide-integrating-microsoft-purview-with-azure-databricks-and-micro/4459549)  
46. Azure at Microsoft Ignite 2025: All the intelligent cloud news explained, acessado em abril 9, 2026, [https://azure.microsoft.com/en-us/blog/azure-at-microsoft-ignite-2025-all-the-intelligent-cloud-news-explained/](https://azure.microsoft.com/en-us/blog/azure-at-microsoft-ignite-2025-all-the-intelligent-cloud-news-explained/)  
47. Announcements from the Microsoft Fabric Community Conference \- James Serra's Blog, acessado em abril 9, 2026, [https://www.jamesserra.com/archive/2026/03/announcements-from-the-microsoft-fabric-community-conference-4/](https://www.jamesserra.com/archive/2026/03/announcements-from-the-microsoft-fabric-community-conference-4/)  
48. Study guide for Exam DP-100: Designing and Implementing a Data ..., acessado em abril 9, 2026, [https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-100](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-100)  
49. FinOps | Microsoft Azure Blog, acessado em abril 9, 2026, [https://azure.microsoft.com/en-us/blog/tag/finops/](https://azure.microsoft.com/en-us/blog/tag/finops/)  
50. FinOps on Azure, acessado em abril 9, 2026, [https://azure.microsoft.com/en-us/solutions/finops](https://azure.microsoft.com/en-us/solutions/finops)  
51. Databricks Serverless Budget Policies 2026 \- Revefi, acessado em abril 9, 2026, [https://www.revefi.com/blog/databricks-serverless-budget-policies-2026](https://www.revefi.com/blog/databricks-serverless-budget-policies-2026)  
52. Attribute usage with serverless budget policies \- Azure Databricks \- Microsoft Learn, acessado em abril 9, 2026, [https://learn.microsoft.com/en-us/azure/databricks/admin/usage/budget-policies](https://learn.microsoft.com/en-us/azure/databricks/admin/usage/budget-policies)  
53. Achieving sustainable growth with Azure and FinOps best practices | Microsoft Azure Blog, acessado em abril 9, 2026, [https://azure.microsoft.com/en-us/blog/achieving-sustainable-growth-with-azure-and-finops-best-practices/](https://azure.microsoft.com/en-us/blog/achieving-sustainable-growth-with-azure-and-finops-best-practices/)  
54. DP-203 Azure Data Engineer Certification Course \- CloudThat, acessado em abril 9, 2026, [https://www.cloudthat.com/training/azure/dp-203-data-engineering-on-microsoft-azure](https://www.cloudthat.com/training/azure/dp-203-data-engineering-on-microsoft-azure)  
55. Double Your Databricks ROI with These Proven Strategies \- Sigma Computing, acessado em abril 9, 2026, [https://www.sigmacomputing.com/blog/double-databricks-roi-strategies](https://www.sigmacomputing.com/blog/double-databricks-roi-strategies)  
56. Achieving ROI from Data with Databricks via 3 approaches \- Sunflower Lab, acessado em abril 9, 2026, [https://thesunflowerlab.com/roi-with-databricks/](https://thesunflowerlab.com/roi-with-databricks/)  
57. Top AI Use Cases Transforming Industries in 2025 | Databricks Blog, acessado em abril 9, 2026, [https://www.databricks.com/blog/top-ai-use-cases-transforming-industries-2025](https://www.databricks.com/blog/top-ai-use-cases-transforming-industries-2025)  
58. Azure Databricks documentation \- Microsoft Learn, acessado em abril 9, 2026, [https://learn.microsoft.com/en-us/azure/databricks/](https://learn.microsoft.com/en-us/azure/databricks/)  
59. Prepare for DP-100: Data Science on Microsoft Azure Exam \- Coursera, acessado em abril 9, 2026, [https://www.coursera.org/learn/prepare-for-dp-100-design-a-data-science-solution-on-azure](https://www.coursera.org/learn/prepare-for-dp-100-design-a-data-science-solution-on-azure)  
60. Microsoft Azure (DP-100): Designing and Implementing a Data Science Solution on Azure, acessado em abril 9, 2026, [https://www.pluralsight.com/paths/microsoft-azure-dp-100-designing-and-implementing-a-data-science-solution-on-azure](https://www.pluralsight.com/paths/microsoft-azure-dp-100-designing-and-implementing-a-data-science-solution-on-azure)  
61. Exam DP-203: Data Engineering on Microsoft Azure – Skills Measured \- Robust IT Training, acessado em abril 9, 2026, [https://www.robustittraining.com/assets/pdf/exam-guides/microsoft/exam-dp-203-data-engineering-on-microsoft-azure-skills-measured.pdf](https://www.robustittraining.com/assets/pdf/exam-guides/microsoft/exam-dp-203-data-engineering-on-microsoft-azure-skills-measured.pdf)  
62. 10 YouTube Channels Every Aspiring Data Scientist Should Follow in 2025 \- KDnuggets, acessado em abril 9, 2026, [https://www.kdnuggets.com/10-youtube-channels-every-aspiring-data-scientist-should-follow-in-2025](https://www.kdnuggets.com/10-youtube-channels-every-aspiring-data-scientist-should-follow-in-2025)  
63. My go-to channels for Databricks, PySpark & ADF — open to more suggestions\! \- Reddit, acessado em abril 9, 2026, [https://www.reddit.com/r/dataengineersindia/comments/1ocx7ry/my\_goto\_channels\_for\_databricks\_pyspark\_adf\_open/](https://www.reddit.com/r/dataengineersindia/comments/1ocx7ry/my_goto_channels_for_databricks_pyspark_adf_open/)  
64. Azure Databricks at Microsoft Ignite 2025, acessado em abril 9, 2026, [https://www.databricks.com/blog/azure-databricks-microsoft-ignite-2025](https://www.databricks.com/blog/azure-databricks-microsoft-ignite-2025)  
65. Databricks MVPs at Data+AI Summit 2025 \- YouTube, acessado em abril 9, 2026, [https://www.youtube.com/watch?v=qQ0fKzdA83o](https://www.youtube.com/watch?v=qQ0fKzdA83o)

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAABA0lEQVR4Xu3RIUtDURjG8UecTRFREMGiWEwGMSw4/AQG0/wAw2RVFMPK2gQx2gwrum6wiBssLO8DCKJJbGb/j+c97MpMYpI98OPynnvOe849VxrnP2USm6hgqjA+gZl4OmvYyLUnXuAUjziPSc4u3pUmL2CAV6z65Q7OMIsOWhrucBmTvchjR3hRLKxhHWV8oJrWaA59fW+0jDulRr9fmFPHM1aidrM3HOQJMdbUsJGm8YA2SjG2p3SCragdn2a/UGsJT0o3m3McY37nuKF3yyf6Sr7qRtT+RTcqXD3ZxokKx8zx0fxNt7jHIbro4RpXSr/sx3inRaVvdtx9PozsNM5f5xP1lCnPj9sJjQAAAABJRU5ErkJggg==>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAYCAYAAACBbx+6AAACyklEQVR4Xu2WS6hNYRTHlzwihIiERCaiDGSgUIohAyYKE8LY+zW5d2BqIEWYUBKZKI+JuKU8xyhSlFJKRgxI/H937XXPt7/zndM5zjFQ91f/7r7f2vt861uvvc1G+b8YK82QxuSGLujHb3TEeOmUtCU3dAmOHpT2V9dtWS99kn4n+iz9kH5Jz6St5lHIYZPT1sEmHcDhr5jv1RGXpJ/SmmQNJ/eaO37E6o4tk15Ii5K1XlkuPZEW5IacqdIj6Z00J7PNlT5kNhw/W6kf0Q3GSdekgWy9iaXSF+mm+UMpq6Tv0ktpVrU2T3ojbYib+sh288zRhC3ZbF67+3KD+WmxUa8BjhLx+claQC2uk1Zave65JpNAVlZISxrmEVgnowSqJWesuX7ZeLd55A9X/wdHpSFpSrIG06Sr0iHplfnzAc9EWUVGS5GMEmw5edh0yHwqPK6uX5tH9Zw0M25MuGzl8tllnlIi/1E6Ua1PlO5U4prDX7Cyw+EPByxSql9Sdtx8Omys1lJwGKXwLJvMlraZ1/3qyrbYfHTGAYCU02AcICUcZr4Xifo9kK1Tg9/Mx11OyeEgOv2peYkANU8G0yblmhdFTjhc2neYUv0CqeUgpZO2c5gJ8t7qzxFZSiRt0mPWvCe0LYl285eD4HDpQZy5L03ODdbITNo0HG7IGk1K5Pn9yEAKNU1t5xkfhjfLV2tuIK5vWN3hk9ZIKeMvncsp0RNkCGja51ZvMGxhzyELBLA249eaj478+4F6Dnin03Q4vlO6KE2qbETxrblzOTQsMxuniexDaY/5/fek69Kg1cdkCmVCMCitrqFMNplPinAWSCVN1SpKQPczU2MK8OJggkwfuaPMgHnT5iOzZ3ZId61+kF6hfB6YV0DfoYFuW3lO/y0E4by1LpeeWSjdqv72Ct8V1Hg/fqstNB5NNCE3dAHjlVFZ+pga5Z/zB4GGjYACfXgXAAAAAElFTkSuQmCC>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAABGUlEQVR4Xu2TsWoCQRCGR7BRQRECYmkpCBZiIdgkWATsbJPeRhDyBNfaaKGVVlY2Yi15Ap/AvICdiI1NLEz+310ve3vkvKu9Dz5YdpbZmbk9kZioPMM9/NGuYcqIZ+GnEacrmDHOuCTgFJ7hN2x4w1c6cCneS3zk4Rz2Rd04EZXc5AO+WXs+qnAEi/AL7mDJiCfhTJ8LhDd19doRVVXPjYo8iaqYlQcyhDW9rsAj3MCc3mvCsV7/y20+vJWwjQW8wFe9x2pDz8ccLhMwERPyK0Wezw22xNbY4ouEmA+rYO91OwDeRQ19CwdWzIc9H5OCqKfAZHfnw7L53NN2QOPAAyxb+y4teJK/f4e/RdtzQsGnwH8vcD4xD8kvcTMzNIxbkGYAAAAASUVORK5CYII=>