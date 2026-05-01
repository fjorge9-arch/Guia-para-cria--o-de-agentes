const TRANSLATIONS = {
  pt: {
    meta: {
      title: "Seu primeiro agente de IA, sem mistÃ©rio",
      description: "Aprenda a criar seu primeiro agente de IA do zero, mesmo sem ser de TI. Um guia simples, em 7 etapas, partindo de um problema real do seu dia a dia."
    },
    ui: { copied: "Copiado!", copy: "Copiar", backToTop: "Voltar ao topo" },
    nav: {
      openToc: "Abrir Ã­ndice", closeToc: "Fechar Ã­ndice",
      linkedinAriaLabel: "Perfil do autor no LinkedIn",
      darkMode: "Alternar modo escuro", indexLabel: "Ãndice"
    },
    toc: {
      step0: "0. Comece pela sua dor", vocab: "VocabulÃ¡rio",
      map: "O caminho que vocÃª vai percorrer", example: "Exemplo na prÃ¡tica",
      step1: "1. Entenda o seu processo", step2: "2. Desenhe no papel",
      step3: "3. Junte o material", step4: "4. A apostila",
      step5: "5. O contrato", step6: "6. Dar vida ao agente",
      final: "Lembretes finais"
    },
    hero: {
      titleDesktop: "Seu<br>primeiro<br>agente de IA<br>sem mistÃ©rio",
      titleMobile: "Seu primeiro agente de IA sem mistÃ©rio",
      p1: "Aquela tarefa que te cansa todo dia pode ser resolvida por um agente de IA, e vocÃª mesmo pode criÃ¡-la. Sem precisar saber programar, sem precisar entender de tecnologia.",
      p2: "SÃ³ precisa de um problema real e vontade de seguir os passos. O resto vocÃª <strong class=\"text-white font-semibold\">aprende fazendo</strong>.",
      badge: "Um guia do zero ao Agente!"
    },
    s0: {
      title: "0. O Ponto de Partida, comece pela sua dor",
      p1: "NinguÃ©m constrÃ³i um agente de IA sÃ³ pela tecnologia. A gente constrÃ³i porque algo dÃ³i: um problema que precisa ser resolvido, uma tarefa repetitiva que cansa, um relatÃ³rio que ninguÃ©m aguenta ler ou um processo que trava porque depende da memÃ³ria de alguÃ©m.",
      p2: "Antes de abrir qualquer ferramenta, faÃ§a trÃªs perguntas simples para saber se vale a pena criar o agente:",
      q1Label: "Pergunta 1", q1Title: "O que estÃ¡ te incomodando?",
      q1Desc: "Descreva o problema em uma frase. Se nÃ£o conseguir, ainda nÃ£o estÃ¡ claro o suficiente.",
      q2Label: "Pergunta 2", q2Title: "Quem sofre com isso?",
      q2Desc: "VocÃª, sua equipe, seus clientes? Saber quem sente a dor define o tom e os critÃ©rios do agente.",
      q3Label: "Pergunta 3", q3Title: "Quanto isso te custa hoje?",
      q3Desc: "Em tempo, dinheiro ou paciÃªncia. Esse nÃºmero vai servir pra vocÃª medir o ganho depois.",
      p3: "Pense no seu agente como um <strong>\"estagiÃ¡rio digital\"</strong>. O que ele faria se pudesse trabalhar 24h por dia sem cansar? Veja exemplos de problemas reais por Ã¡rea que vocÃª pode comeÃ§ar a resolver hoje:",
      engTitle: "Engenharia",
      engProblem: "<strong>Sua dor:</strong> Garantir que projetos sigam centenas de pÃ¡ginas de normas da ABNT e manuais de seguranÃ§a.",
      engSolution: "<strong>O Agente:</strong> Auditor de Conformidade que cruza dados da obra com as normas e aponta erros na hora.",
      archTitle: "Arquitetura",
      archProblem: "<strong>Sua dor:</strong> Redigir memoriais descritivos consome horas a partir de pranchas e listas de especificaÃ§Ã£o.",
      archSolution: "<strong>O Agente:</strong> Redator tÃ©cnico que gera memoriais descritivos automaticamente seguindo a NBR 13532 e o padrÃ£o do escritÃ³rio.",
      medTitle: "Medicina",
      medProblem: "<strong>Sua dor:</strong> Revisar prontuÃ¡rios longos antes da consulta toma tempo precioso do mÃ©dico.",
      medSolution: "<strong>O Agente:</strong> Resumidor clÃ­nico que estrutura histÃ³rico do paciente em formato SOAP, respeitando LGPD/CFM e com revisÃ£o humana obrigatÃ³ria.",
      retailTitle: "Pequeno Varejo",
      retailProblem: "<strong>Sua dor:</strong> Horas perdidas respondendo dÃºvidas idÃªnticas no WhatsApp sobre tamanhos, trocas e frete.",
      retailSolution: "<strong>O Agente:</strong> Especialista em atendimento que conhece todo o estoque e a polÃ­tica da loja de cor.",
      adminTitle: "Administrativo",
      adminProblem: "<strong>Sua dor:</strong> Caos na gestÃ£o de notas e contratos, com vencimentos perdidos em pastas bagunÃ§adas.",
      adminSolution: "<strong>O Agente:</strong> Organizador de fluxo que extrai datas e valores automaticamente para um cronograma.",
      eduTitle: "EducaÃ§Ã£o",
      eduProblem: "<strong>Sua dor:</strong> Ter muito conteÃºdo gravado ou escrito, mas nÃ£o ter tempo para criar provas e exercÃ­cios.",
      eduSolution: "<strong>O Agente:</strong> Designer instrucional que transforma aulas em materiais didÃ¡ticos estruturados.",
      checklistTitle: "âœ… Antes de seguir para o Passo 1",
      check1: "VocÃª consegue descrever a dor em <strong>uma Ãºnica frase</strong>.",
      check2: "VocÃª sabe <strong>quem sofre</strong> com a dor (quem vai usar o agente).",
      check3: "VocÃª tem uma estimativa do <strong>custo atual</strong> (tempo, dinheiro, paciÃªncia)."
    },
    vocab: {
      title: "VocabulÃ¡rio do Agente",
      skillTitle: "Habilidade", skillTag: "(Skill)",
      skillDesc: "Cada coisa que o agente sabe fazer. Tipo: \"sabe escrever e-mail\", \"sabe revisar planilha\".",
      toolTitle: "Ferramenta", toolTag: "(Tool)",
      toolDesc: "Algo de fora que o agente pode usar: um app, planilha ou sistema da empresa.",
      hookTitle: "Gatilho", hookTag: "(Hook)",
      hookDesc: "Uma regra do tipo \"sempre que acontecer X, faÃ§a Y\".",
      specTitle: "EspecificaÃ§Ã£o", specTag: "(Spec)",
      specDesc: "O \"contrato\" que descreve o que o agente faz, em palavras simples.",
      mdTitle: "Markdown", mdTag: "(.md)",
      mdDesc: "Arquivo de texto comum, legÃ­vel por gente e por IA.",
      promptTitle: "Prompt",
      promptDesc: "A instruÃ§Ã£o que vocÃª dÃ¡ pro agente. Quanto mais claro, melhor a resposta."
    },
    map: {
      title: "O caminho que vocÃª vai percorrer",
      subtitle: "Sete passos em sequÃªncia. Cada um se apoia no anterior. NÃ£o pule etapas.",
      step0Title: "Comece pela sua dor",
      step0Desc: "Identifique um problema real do dia a dia. Sem isso, nÃ£o tem agente.",
      step1Title: "Entenda o seu prÃ³prio processo",
      step1Desc: "Mapeie como vocÃª resolve essa dor hoje. Quais regras, ferramentas, gargalos.",
      step2Title: "Desenhe o seu agente no papel",
      step2Desc: "Liste o que ele sabe fazer, o que ele usa e quando ele age sozinho.",
      step3Title: "Junte o material de estudo",
      step3Desc: "Pesquise normas, manuais e boas prÃ¡ticas. Isso vai virar a \"apostila\".",
      step4Title: "A apostila do seu agente",
      step4Desc: "Organize tudo numa pasta com arquivos de texto. Esse Ã© o cÃ©rebro dele.",
      step5Title: "O \"contrato\" do seu agente",
      step5Desc: "A IA descreve o que vai construir e vocÃª aprova item por item.",
      step6Title: "Hora de dar vida ao agente",
      step6Desc: "Com o contrato pronto, Ã© sÃ³ pedir pra IA executar. Seu agente nasce aqui.",
      resultTitle: "Seu agente funcionando!",
      resultDesc: "Resolvendo a dor que te incomodava lÃ¡ no Passo 0. E o melhor: vocÃª fez sozinho."
    },
    example: {
      title: "Exemplo na prÃ¡tica, A Lojinha de roupas",
      intro: "Pra ficar mais fÃ¡cil de visualizar, vamos imaginar uma pequena loja de roupas do seu bairro. Veja como cada passo se encaixa no dia a dia dela:",
      step0Label: "Dor",
      step0Text: "\"Perco 2h por dia respondendo dÃºvidas repetidas no WhatsApp e ainda assim cliente reclama de demora.\"",
      step1Label: "Entender o processo",
      step1Text: "Lista das 20 dÃºvidas mais frequentes (tamanhos, frete, troca, formas de pagamento) e o tempo mÃ©dio de resposta atual.",
      step2Label: "Desenhar no papel",
      step2Text: "<em>O que ele sabe fazer:</em> consultar tabela de medidas, calcular frete por CEP, explicar polÃ­tica de troca. <em>O que ele usa:</em> planilha de estoque. <em>Quando ele age sozinho:</em> assim que chega uma nova mensagem no WhatsApp.",
      step3Label: "Juntar material",
      step3Text: "RelatÃ³rio com boas prÃ¡ticas de atendimento em e-commerce de moda + checklist do CÃ³digo de Defesa do Consumidor para trocas.",
      step4Label: "A apostila",
      step4Text: "Pasta com: <code>politica-trocas.md</code>, <code>tabela-medidas.md</code>, <code>faq.md</code>, <code>tom-de-voz.md</code>.",
      step5Label: "O contrato",
      step5Text: "DescriÃ§Ã£o: persona, tom amigÃ¡vel, sempre confirmar tamanho antes do envio, chamar atendente humano se cliente pedir desconto.",
      step6Label: "Dar vida ao agente",
      step6Text: "Agente em produÃ§Ã£o respondendo 80% das dÃºvidas em segundos, com transcriÃ§Ãµes revisadas semanalmente para refinar a apostila."
    },
    p1: {
      title: "Entenda o seu prÃ³prio processo",
      body1: "O primeiro passo Ã© entender o seu <strong>\"chÃ£o de fÃ¡brica\"</strong>. VocÃª nÃ£o pode ensinar uma IA a fazer algo que vocÃª mesmo nÃ£o consegue explicar como Ã© feito hoje na mÃ£o.",
      body2: "Olhe pro processo atual: onde estÃ£o os gargalos? Quais regras vocÃª segue (mesmo as que ninguÃ©m escreveu)? Quais tarefas sÃ£o repetitivas e te cansam Ã  toa? Em seguida, liste as ferramentas que vocÃª usa (planilhas, e-mails, sites especÃ­ficos).",
      quote: "Pensar e anotar tudo isso jÃ¡ Ã© um Ã³timo comeÃ§o: vocÃª vai enxergar o seu processo de um jeito que talvez nunca tenha enxergado antes.",
      tipTitle: "Dica: investigue o problema com Deep Research",
      tipBody: "A gente sabe que tem um problema, mas nem sempre conhece as <strong>melhores prÃ¡ticas</strong> do mercado pra resolvÃª-lo. Use o <strong>Gemini Deep Research</strong> agora pra aprender sobre o assunto antes de planejar o agente.",
      promptsLabel: "Exemplos de prompts pra comeÃ§ar:",
      promptEngLabel: "Para Engenharia:",
      promptEng: "\"Investigue as principais causas de nÃ£o conformidade em obras civis e quais normas da ABNT sÃ£o mais crÃ­ticas para garantir a seguranÃ§a estrutural e do trabalho.\"",
      promptArchLabel: "Para Arquitetura:",
      promptArch: "\"Pesquise a estrutura padrÃ£o de um memorial descritivo de projeto arquitetÃ´nico segundo a NBR 13532, identificando seÃ§Ãµes obrigatÃ³rias, vocabulÃ¡rio tÃ©cnico e erros comuns na redaÃ§Ã£o.\"",
      promptMedLabel: "Para Medicina:",
      promptMed: "\"Investigue as melhores prÃ¡ticas para resumo de prontuÃ¡rios eletrÃ´nicos no formato SOAP, considerando exigÃªncias da LGPD e do CFM sobre privacidade do paciente e responsabilidade mÃ©dica.\"",
      promptRetailLabel: "Para Varejo:",
      promptRetail: "\"Pesquise as melhores prÃ¡ticas de atendimento ao cliente para e-commerce e identifique quais sÃ£o as 20 dÃºvidas mais frequentes de consumidores que compram vestuÃ¡rio online.\"",
      promptAdminLabel: "Para Administrativo:",
      promptAdmin: "\"Analise fluxos de trabalho de contas a pagar e receber em pequenas empresas e identifique os erros humanos mais comuns no processamento de notas fiscais e contratos.\"",
      promptEduLabel: "Para EducaÃ§Ã£o:",
      promptEdu: "\"Pesquise metodologias de design instrucional eficazes para converter roteiros de videoaulas em materiais didÃ¡ticos de apoio que aumentem a retenÃ§Ã£o de alunos.\"",
      alertTitle: "ðŸ’¡ Dica importante:",
      alertBody: "Ã‰ essencial que vocÃª entenda o bÃ¡sico do assunto. Se vocÃª nÃ£o souber o que o agente deve entregar, nÃ£o vai ter como saber se ele estÃ¡ funcionando ou apenas <strong>\"alucinando\"</strong> (inventando coisas com cara de verdade).",
      checklistTitle: "âœ… Antes de seguir",
      check1: "VocÃª escreveu como o processo funciona hoje, mesmo que seja sÃ³ um rascunho.",
      check2: "VocÃª leu pelo menos um relatÃ³rio do Deep Research e fez anotaÃ§Ãµes.",
      check3: "VocÃª listou as ferramentas e sistemas que fazem parte do processo."
    },
    p2: {
      title: "Desenhe o seu agente no papel",
      body1: "Com o diagnÃ³stico feito, calma: nÃ£o vÃ¡ sair pedindo pra IA criar o agente direto. Antes, converse com ela e peÃ§a ajuda pra desenhar a <strong>estrutura</strong> do que vai ser construÃ­do.",
      body2: "No <strong>Gemini</strong> (ou em alternativas como <strong>ChatGPT</strong> e <strong>Claude</strong>), cole o que vocÃª aprendeu no Passo 1 e peÃ§a ajuda pra planejar. Planejar antes vale mais a pena do que sair executando: vocÃª visualiza os <strong>\"trabalhadores virtuais\"</strong> e as <strong>habilidades</strong> que cada um precisa ter, sem desperdiÃ§ar energia.",
      codeComment: "// PeÃ§a assim:",
      codePrompt: "\"Com o assunto que descrevi acima, me ajude a planejar um conjunto de agentes. Para cada um, liste as <strong>habilidades</strong> (skills), <strong>ferramentas</strong> (tools) e <strong>gatilhos</strong> (hooks) necessÃ¡rios.\"",
      checklistTitle: "âœ… Antes de seguir",
      check1: "Para cada agente: o que ele sabe fazer, com quais ferramentas e quando entra em aÃ§Ã£o.",
      check2: "VocÃª consegue explicar em voz alta o que cada agente faz."
    },
    p3: {
      title: "Junte o material de estudo do seu agente",
      body1: "Um agente sÃ³ Ã© inteligente se tiver <strong>conteÃºdo bom pra estudar</strong>. Aqui a pesquisa nÃ£o Ã© superficial: Ã© hora de investigar o tema a fundo e juntar manuais, leis e padrÃµes reais que regem o seu trabalho.",
      howTitle: "Como usar o Gemini Deep Research:",
      howBody: "O Gemini Deep Research funciona como um investigador particular: ele passa minutos varrendo a web pra te entregar um relatÃ³rio completo.",
      how1: "Acesse o <a href=\"https://gemini.google.com\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold\">Gemini</a> e procure pelo recurso <strong>\"Deep Research\"</strong> na barra de chat.",
      how2: "Defina o tema com base no que foi planejado no Passo 2 (ex.: \"Investigue todas as normas de seguranÃ§a NR-18 para obras civis\").",
      how3: "Baixe ou copie o relatÃ³rio final. Ele vai virar a base do conhecimento do seu agente.",
      alertTitle: "ðŸš¨ AtenÃ§Ã£o:",
      alertBody: "Leia todos os relatÃ³rios gerados. Esse conhecimento nÃ£o serve sÃ³ pra alimentar a IA. Ã‰ uma Ã³tima oportunidade pra vocÃª aprender mais e se atualizar sobre o assunto.",
      checklistTitle: "âœ… Antes de seguir",
      check1: "Todo o material pesquisado salvo numa pasta fÃ¡cil de encontrar.",
      check2: "VocÃª leu cada relatÃ³rio do inÃ­cio ao fim e marcou pontos importantes."
    },
    p4: {
      title: "A apostila do seu agente",
      body1: "Imagine que a IA Ã© um aluno brilhante, mas que nunca entrou na sua empresa. A <strong>apostila</strong> Ã© o material de estudo personalizado que vocÃª entrega pra ele.",
      body2: "Diferente da IA genÃ©rica, o seu agente vai ter uma fonte focada nos seus dados. Ã‰ esse conteÃºdo que <strong>define como ele atua</strong>: ele responde no seu tom de voz, segue as suas regras e cita as suas fontes. Sem apostila, o agente dÃ¡ respostas vagas. Com ela, age como alguÃ©m experiente da sua equipe.",
      whatTitle: "O que Ã©?",
      whatBody: "Ã‰ o <strong>conhecimento inicial</strong> do seu agente. Define o assunto que ele domina e exatamente como ele deve atuar.",
      whyMdTitle: "Por que Markdown (.md)?",
      whyMdBody: "Arquivos .md sÃ£o \"texto puro\" com formataÃ§Ã£o simples. Ã‰ o idioma preferido das IAs, sem a \"sujeira\" visual de PDFs ou Word.",
      howLabel: "Como preparar a apostila:",
      how1: "Crie uma pasta no seu computador com o nome do projeto.",
      how2: "Abra seus relatÃ³rios de pesquisa no Google Docs e baixe cada um como <strong>\"Texto formatado (.md)\"</strong>.",
      how3: "Coloque todos esses arquivos dentro da pasta. Pronto, a apostila estÃ¡ montada!",
      checklistTitle: "âœ… Antes de seguir",
      check1: "Pasta criada e arquivos de texto organizados dentro dela.",
      check2: "VocÃª revisou o conteÃºdo e nÃ£o hÃ¡ informaÃ§Ãµes confidenciais expostas."
    },
    p5: {
      title: "O \"contrato\" do seu agente",
      body1: "Agora a gente usa o <a href=\"https://claude.ai\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">Claude</a>, o <a href=\"https://github.com/features/copilot\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">GitHub Copilot</a> ou alternativas como <a href=\"https://cursor.sh\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">Cursor</a> e <a href=\"https://chatgpt.com\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">ChatGPT</a> (apontando pra pasta da apostila que vocÃª criou no Passo 4). Pedimos pra IA ler o material e criar um <strong>contrato</strong> do que vai ser construÃ­do.",
      body2: "O contrato Ã© o documento onde a IA descreve, em palavras simples, exatamente o que ela pretende fazer. Ã‰ a hora de vocÃª ler com calma e dizer: \"isso aqui sim, Ã© exatamente o que eu quero\" ou \"essa regra estÃ¡ errada, muda\".",
      codeComment: "// PeÃ§a assim:",
      codePrompt: "\"Leia os arquivos desta pasta e crie uma especificaÃ§Ã£o detalhada do agente em linguagem natural, descrevendo em palavras simples tudo o que ele deve fazer, suas regras, seu tom de voz e os casos em que deve pedir ajuda humana.\"",
      alertTitle: "ðŸš¨ AtenÃ§Ã£o:",
      alertBody: "Leia tudo! Ã‰ aqui que vocÃª evita as alucinaÃ§Ãµes da IA. Um contrato bem validado garante um agente mais preciso. Converse com a IA ou edite o texto Ã  mÃ£o atÃ© ficar exatamente como deve.",
      checklistTitle: "âœ… Antes de seguir",
      check1: "VocÃª leu o contrato inteiro e entendeu o que estÃ¡ escrito.",
      check2: "As regras e o jeito de falar estÃ£o do seu jeito, e nÃ£o da IA.",
      check3: "VocÃª definiu o que o agente deve fazer quando nÃ£o souber responder."
    },
    p6: {
      title: "Hora de dar vida ao agente",
      body1: "Com o contrato aprovado por vocÃª, a parte difÃ­cil acabou. Agora Ã© sÃ³ dar a ordem pra IA \"girar a chave\".",
      codeComment: "// PeÃ§a assim:",
      codePrompt: "\"O contrato estÃ¡ perfeito. Agora execute o desenvolvimento do agente conforme planejado.\"",
      body2: "A IA vai criar todos os arquivos, cÃ³digos e instruÃ§Ãµes necessÃ¡rias. Seu primeiro agente acaba de nascer, pronto pra resolver aquela dor que vocÃª identificou lÃ¡ no inÃ­cio.",
      outputTitle: "O que esperar como saÃ­da:",
      output1: "Arquivos de configuraÃ§Ã£o e instruÃ§Ãµes de sistema (system prompt).",
      output2: "Estrutura de pastas com a \"apostila\" pronta pra uso.",
      output3: "Exemplos de uso e casos de teste sugeridos.",
      output4: "InstruÃ§Ãµes de como integrar com a ferramenta escolhida (WhatsApp, e-mail, planilha, etc.).",
      alertTitle: "ðŸ”„ Lembre-se:",
      alertBody1: "O agente nasce, mas precisa ser testado e ajustado. Trate cada uso como um ciclo: <strong>testar â†’ ajustar o contrato â†’ executar de novo</strong>.",
      alertBody2: "AtenÃ§Ã£o tambÃ©m Ã  <strong>privacidade</strong>: evite colocar na apostila informaÃ§Ãµes sensÃ­veis (contratos, dados pessoais ou segredos comerciais) sem antes verificar o que a ferramenta faz com esse conteÃºdo.",
      checklistTitle: "âœ… ParabÃ©ns! VocÃª criou seu primeiro agente!",
      check1: "Seu agente estÃ¡ no ar e respondendo.",
      check2: "VocÃª jÃ¡ sabe quando vai revisÃ¡-lo, e nÃ£o vai deixar pra depois.",
      check3: "Compare o resultado com o problema que vocÃª descreveu lÃ¡ no inÃ­cio: valeu a pena?"
    },
    footer: {
      title: "4 lembretes pra nÃ£o esquecer",
      rule1Title: "VocÃª Ã© o chefe",
      rule1Desc: "A IA executa, vocÃª decide. Leia o contrato e valide o conteÃºdo da apostila. Quem manda Ã© vocÃª.",
      rule2Title: "OrganizaÃ§Ã£o sempre ganha",
      rule2Desc: "Uma pasta organizada com .md limpos vale mais que mil prompts genÃ©ricos. Apostila bagunÃ§ada = agente confuso.",
      rule3Title: "NÃ£o tenha pressa",
      rule3Desc: "NÃ£o precisa ficar perfeito de primeira. Refine a conversa, peÃ§a ajustes no contrato e tente de novo.",
      rule4Title: "Volte sempre pra ajustar",
      rule4Desc: "Quando encontrar problemas, volte pro contrato. Agente bom Ã© agente testado e melhorado aos poucos.",
      developedBy: "Desenvolvido por",
      authorLinkedinAriaLabel: "Perfil de Fernando Jorge da Silva no LinkedIn",
      copyright: "Â© 2026 Â· Feito por Fernando Jorge da Silva. Compartilhe Ã  vontade."
    }
  },

  en: {
    meta: {
      title: "Your first AI agent, no mystery",
      description: "Learn to create your first AI agent from scratch, even without an IT background. A simple 7-step guide, starting from a real problem in your daily life."
    },
    ui: { copied: "Copied!", copy: "Copy", backToTop: "Back to top" },
    nav: {
      openToc: "Open index", closeToc: "Close index",
      linkedinAriaLabel: "Author's LinkedIn profile",
      darkMode: "Toggle dark mode", indexLabel: "Index"
    },
    toc: {
      step0: "0. Start with your pain", vocab: "Vocabulary",
      map: "Your journey ahead", example: "Real-world example",
      step1: "1. Understand your process", step2: "2. Sketch on paper",
      step3: "3. Gather materials", step4: "4. The syllabus",
      step5: "5. The contract", step6: "6. Bring the agent to life",
      final: "Final reminders"
    },
    hero: {
      titleDesktop: "Your<br>first<br>AI agent<br>no mystery",
      titleMobile: "Your first AI agent no mystery",
      p1: "That task that drains you every day can be solved by an AI agent â€” and you can build it yourself. No coding required, no tech background needed.",
      p2: "All you need is a real problem and the willingness to follow the steps. The rest you <strong class=\"text-white font-semibold\">learn by doing</strong>.",
      badge: "A guide from zero to Agent!"
    },
    s0: {
      title: "0. The Starting Point â€” start with your pain",
      p1: "Nobody builds an AI agent just for the technology. We build because something hurts: a problem that needs solving, a repetitive task that wears us out, a report nobody can stand reading, or a process that stalls because it depends on someone's memory.",
      p2: "Before opening any tool, ask yourself three simple questions to know if it's worth building the agent:",
      q1Label: "Question 1", q1Title: "What is bothering you?",
      q1Desc: "Describe the problem in one sentence. If you can't, it's not clear enough yet.",
      q2Label: "Question 2", q2Title: "Who is suffering from this?",
      q2Desc: "You, your team, your clients? Knowing who feels the pain defines the tone and criteria of the agent.",
      q3Label: "Question 3", q3Title: "How much is this costing you today?",
      q3Desc: "In time, money, or patience. That number will help you measure the gain later.",
      p3: "Think of your agent as a <strong>\"digital intern\"</strong>. What would it do if it could work 24 hours a day without getting tired? Here are examples of real problems by area that you can start solving today:",
      engTitle: "Engineering",
      engProblem: "<strong>What hurts:</strong> Ensuring projects comply with hundreds of pages of standards and safety manuals.",
      engSolution: "<strong>What the agent will do:</strong> Compliance Auditor that cross-references project data with standards and flags errors instantly.",
      archTitle: "Architecture",
      archProblem: "<strong>What hurts:</strong> Writing technical project reports takes hours from drawings and specification lists.",
      archSolution: "<strong>What the agent will do:</strong> Technical writer that automatically generates descriptive reports following industry standards.",
      medTitle: "Medicine",
      medProblem: "<strong>What hurts:</strong> Reviewing long patient records before appointments takes precious time.",
      medSolution: "<strong>What the agent will do:</strong> Clinical summarizer that structures patient history in SOAP format, with mandatory human review.",
      retailTitle: "Small Retail",
      retailProblem: "<strong>What hurts:</strong> Hours lost answering identical WhatsApp questions about sizes, returns, and shipping.",
      retailSolution: "<strong>What the agent will do:</strong> Customer service specialist that knows the entire inventory and store policy by heart.",
      adminTitle: "Administrative",
      adminProblem: "<strong>What hurts:</strong> Chaos managing invoices and contracts, with deadlines lost in messy folders.",
      adminSolution: "<strong>What the agent will do:</strong> Workflow organizer that automatically extracts dates and amounts into a schedule.",
      eduTitle: "Education",
      eduProblem: "<strong>What hurts:</strong> Having lots of recorded or written content, but no time to create tests and exercises.",
      eduSolution: "<strong>What the agent will do:</strong> Instructional designer that transforms lessons into structured teaching materials.",
      checklistTitle: "âœ… Before moving on to Step 1",
      check1: "You can describe the pain in <strong>a single sentence</strong>.",
      check2: "You know <strong>who suffers</strong> from the pain (who will use the agent).",
      check3: "You have an estimate of the <strong>current cost</strong> (time, money, patience)."
    },
    vocab: {
      title: "Agent Vocabulary",
      skillTitle: "Skill", skillTag: "(Skill)",
      skillDesc: "Everything the agent knows how to do. Like: \"can write an email\", \"can review a spreadsheet\".",
      toolTitle: "Tool", toolTag: "(Tool)",
      toolDesc: "An external resource the agent can use: an app, spreadsheet, or company system.",
      hookTitle: "Trigger", hookTag: "(Hook)",
      hookDesc: "A rule like \"whenever X happens, do Y\".",
      specTitle: "Specification", specTag: "(Spec)",
      specDesc: "The \"contract\" that describes what the agent does, in simple words.",
      mdTitle: "Markdown", mdTag: "(.md)",
      mdDesc: "A plain text file, readable by both people and AI.",
      promptTitle: "Prompt",
      promptDesc: "The instruction you give the agent. The clearer, the better the response."
    },
    map: {
      title: "Your journey ahead",
      subtitle: "Seven steps in sequence. Each one builds on the previous. Don't skip steps.",
      step0Title: "Start with your pain",
      step0Desc: "Identify a real daily problem. Without this, there's no agent.",
      step1Title: "Understand your own process",
      step1Desc: "Map how you solve this problem today. What rules, tools, bottlenecks.",
      step2Title: "Sketch your agent on paper",
      step2Desc: "List what it knows how to do, what it uses, and when it acts on its own.",
      step3Title: "Gather study materials",
      step3Desc: "Research standards, manuals, and best practices. This will become the \"syllabus\".",
      step4Title: "Your agent's syllabus",
      step4Desc: "Organize everything in a folder with text files. That's its brain.",
      step5Title: "Your agent's \"contract\"",
      step5Desc: "The AI describes what it will build and you approve it item by item.",
      step6Title: "Time to bring the agent to life",
      step6Desc: "With the contract ready, just ask the AI to execute. Your agent is born here.",
      resultTitle: "Your agent is live!",
      resultDesc: "Solving the pain that was bothering you back in Step 0. And the best part: you did it yourself."
    },
    example: {
      title: "Real-world example: The Small Clothing Store",
      intro: "To make it easier to visualize, let's imagine a small clothing store in your neighborhood. Here's how each step fits into their daily routine:",
      step0Label: "Pain",
      step0Text: "\"I lose 2 hours a day answering the same questions on WhatsApp and clients still complain about slow responses.\"",
      step1Label: "Understanding the process",
      step1Text: "List of the 20 most frequent questions (sizes, shipping, returns, payment methods) and the current average response time.",
      step2Label: "Sketching on paper",
      step2Text: "<em>What it knows how to do:</em> look up the size chart, calculate shipping by ZIP code, explain the return policy. <em>What it uses:</em> inventory spreadsheet. <em>When it acts on its own:</em> as soon as a new message arrives on WhatsApp.",
      step3Label: "Gathering materials",
      step3Text: "Report with best practices for customer service in fashion e-commerce + consumer protection checklist for returns.",
      step4Label: "The syllabus",
      step4Text: "Folder with: <code>return-policy.md</code>, <code>size-chart.md</code>, <code>faq.md</code>, <code>brand-voice.md</code>.",
      step5Label: "The contract",
      step5Text: "Description: persona, friendly tone, always confirm size before shipping, escalate to a human agent if the customer asks for a discount.",
      step6Label: "Bringing the agent to life",
      step6Text: "Agent in production answering 80% of questions in seconds, with transcripts reviewed weekly to refine the syllabus."
    },
    p1: {
      title: "Understand your own process",
      body1: "The first step is understanding your <strong>\"shop floor\"</strong>. You can't teach an AI to do something that you yourself can't explain how it's done manually today.",
      body2: "Look at the current process: where are the bottlenecks? What rules do you follow (even the unwritten ones)? What tasks are repetitive and drain you for no good reason? Then, list the tools you use (spreadsheets, emails, specific websites).",
      quote: "Thinking and writing all of this down is already a great start: you'll see your process in a way you may have never seen before.",
      tipTitle: "Tip: investigate the problem with Deep Research",
      tipBody: "We know there's a problem, but we don't always know the <strong>best practices</strong> in the market to solve it. Use <strong>Gemini Deep Research</strong> now to learn about the topic before planning the agent.",
      promptsLabel: "Sample prompts to get started:",
      promptEngLabel: "For Engineering:",
      promptEng: "\"Investigate the main causes of non-conformance in civil construction and which safety standards are most critical for ensuring structural and worker safety.\"",
      promptArchLabel: "For Architecture:",
      promptArch: "\"Research the standard structure of an architectural project technical report, identifying required sections, technical vocabulary, and common drafting mistakes.\"",
      promptMedLabel: "For Medicine:",
      promptMed: "\"Investigate best practices for summarizing electronic medical records in SOAP format, considering patient privacy regulations and medical responsibility requirements.\"",
      promptRetailLabel: "For Retail:",
      promptRetail: "\"Research best practices for customer service in fashion e-commerce and identify the 20 most common questions from online clothing shoppers.\"",
      promptAdminLabel: "For Administrative:",
      promptAdmin: "\"Analyze accounts payable and receivable workflows in small businesses and identify the most common human errors when processing invoices and contracts.\"",
      promptEduLabel: "For Education:",
      promptEdu: "\"Research effective instructional design methodologies for converting video lecture scripts into structured educational support materials that improve student retention.\"",
      alertTitle: "ðŸ’¡ Important tip:",
      alertBody: "It's essential that you understand the basics of the subject. If you don't know what the agent should deliver, you won't be able to tell whether it's working or just <strong>\"hallucinating\"</strong> (making things up with a veneer of truth).",
      checklistTitle: "âœ… Before moving on",
      check1: "You've written down how the process works today, even if it's just a draft.",
      check2: "You've read at least one Deep Research report and took notes.",
      check3: "You've listed the tools and systems that are part of the process."
    },
    p2: {
      title: "Sketch your agent on paper",
      body1: "With the diagnosis done, hold on â€” don't rush to ask the AI to create the agent directly. First, talk to it and ask for help sketching out the <strong>structure</strong> of what will be built.",
      body2: "In <strong>Gemini</strong> (or alternatives like <strong>ChatGPT</strong> and <strong>Claude</strong>), paste what you learned in Step 1 and ask for help planning. Planning ahead is more valuable than jumping into execution: you get to visualize the <strong>\"virtual workers\"</strong> and the <strong>skills</strong> each one needs, without wasting energy.",
      codeComment: "// Ask like this:",
      codePrompt: "\"Based on the subject I described above, help me plan a set of agents. For each one, list the required <strong>skills</strong>, <strong>tools</strong>, and <strong>triggers</strong> (hooks).\"",
      checklistTitle: "âœ… Before moving on",
      check1: "For each agent: what it knows how to do, with which tools, and when it kicks in.",
      check2: "You can explain out loud what each agent does."
    },
    p3: {
      title: "Gather your agent's study materials",
      body1: "An agent is only as smart as the <strong>quality of the content it studies</strong>. Research here isn't shallow â€” it's time to dig deep into the topic and gather the real manuals, laws, and standards that govern your work.",
      howTitle: "How to use Gemini Deep Research:",
      howBody: "Gemini Deep Research works like a private investigator: it spends minutes scouring the web to deliver a comprehensive report.",
      how1: "Access <a href=\"https://gemini.google.com\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold\">Gemini</a> and look for the <strong>\"Deep Research\"</strong> feature in the chat bar.",
      how2: "Define the topic based on what was planned in Step 2 (e.g., \"Investigate all safety standards for civil construction\").",
      how3: "Download or copy the final report. It will become the knowledge base for your agent.",
      alertTitle: "ðŸš¨ Attention:",
      alertBody: "Read all generated reports. This knowledge isn't just for feeding the AI. It's a great opportunity for you to learn more and stay up to date on the subject.",
      checklistTitle: "âœ… Before moving on",
      check1: "All researched material saved in an easy-to-find folder.",
      check2: "You've read each report from start to finish and marked important points."
    },
    p4: {
      title: "Your agent's syllabus",
      body1: "Imagine the AI is a brilliant student who has never worked at your company. The <strong>syllabus</strong> is the personalized study material you hand over.",
      body2: "Unlike a generic AI, your agent will have a source focused on your data. This content is what <strong>defines how it operates</strong>: it responds in your tone of voice, follows your rules, and cites your sources. Without a syllabus, the agent gives vague answers. With one, it acts like an experienced member of your team.",
      whatTitle: "What is it?",
      whatBody: "It's your agent's <strong>initial knowledge</strong>. It defines the subject it masters and exactly how it should act.",
      whyMdTitle: "Why Markdown (.md)?",
      whyMdBody: ".md files are \"plain text\" with simple formatting. It's the preferred language of AIs, without the visual \"noise\" of PDFs or Word.",
      howLabel: "How to prepare the syllabus:",
      how1: "Create a folder on your computer with the project name.",
      how2: "Open your research reports in Google Docs and download each one as <strong>\"Formatted text (.md)\"</strong>.",
      how3: "Put all those files inside the folder. Done â€” the syllabus is assembled!",
      checklistTitle: "âœ… Before moving on",
      check1: "Folder created and text files organized inside it.",
      check2: "You've reviewed the content and there's no confidential information exposed."
    },
    p5: {
      title: "Your agent's \"contract\"",
      body1: "Now we use <a href=\"https://claude.ai\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">Claude</a>, <a href=\"https://github.com/features/copilot\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">GitHub Copilot</a>, or alternatives like <a href=\"https://cursor.sh\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">Cursor</a> and <a href=\"https://chatgpt.com\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">ChatGPT</a> (pointing to the syllabus folder you created in Step 4). We ask the AI to read the material and create a <strong>contract</strong> for what will be built.",
      body2: "The contract is the document where the AI describes, in plain language, exactly what it intends to do. This is your moment to read carefully and say: \"yes, this is exactly what I want\" or \"this rule is wrong, change it\".",
      codeComment: "// Ask like this:",
      codePrompt: "\"Read the files in this folder and create a detailed agent specification in plain language, describing in simple terms everything it should do, its rules, its tone of voice, and the cases in which it should ask for human help.\"",
      alertTitle: "ðŸš¨ Attention:",
      alertBody: "Read everything! This is where you prevent AI hallucinations. A well-validated contract guarantees a more accurate agent. Talk to the AI or edit the text by hand until it's exactly right.",
      checklistTitle: "âœ… Before moving on",
      check1: "You've read the entire contract and understood what's written.",
      check2: "The rules and tone of voice are yours, not the AI's.",
      check3: "You've defined what the agent should do when it doesn't know how to respond."
    },
    p6: {
      title: "Time to bring the agent to life",
      body1: "With the contract approved by you, the hard part is over. Now just give the AI the order to \"turn the key\".",
      codeComment: "// Ask like this:",
      codePrompt: "\"The contract is perfect. Now execute the agent development as planned.\"",
      body2: "The AI will create all the necessary files, code, and instructions. Your first agent has just been born, ready to solve the pain you identified at the beginning.",
      outputTitle: "What to expect as output:",
      output1: "Configuration files and system instructions (system prompt).",
      output2: "Folder structure with the \"syllabus\" ready to use.",
      output3: "Usage examples and suggested test cases.",
      output4: "Instructions on how to integrate with your chosen tool (WhatsApp, email, spreadsheet, etc.).",
      alertTitle: "ðŸ”„ Remember:",
      alertBody1: "The agent is born, but it needs to be tested and adjusted. Treat each use as a cycle: <strong>test â†’ adjust the contract â†’ run again</strong>.",
      alertBody2: "Also pay attention to <strong>privacy</strong>: avoid putting sensitive information in the syllabus (contracts, personal data, or trade secrets) without first checking what the tool does with that content.",
      checklistTitle: "âœ… Congratulations! You've created your first agent!",
      check1: "Your agent is live and responding.",
      check2: "You already know when you'll review it, and you won't put it off.",
      check3: "Compare the result with the problem you described at the beginning: was it worth it?"
    },
    footer: {
      title: "4 reminders not to forget",
      rule1Title: "You're the boss",
      rule1Desc: "The AI executes, you decide. Read the contract and validate the syllabus content. You're in charge.",
      rule2Title: "Organization always wins",
      rule2Desc: "A well-organized folder with clean .md files beats a thousand generic prompts. Messy syllabus = confused agent.",
      rule3Title: "Don't rush",
      rule3Desc: "It doesn't need to be perfect the first time. Refine the conversation, request contract adjustments, and try again.",
      rule4Title: "Always come back to adjust",
      rule4Desc: "When you find problems, go back to the contract. A good agent is one that's been tested and gradually improved.",
      developedBy: "Developed by",
      authorLinkedinAriaLabel: "Fernando Jorge da Silva's LinkedIn profile",
      copyright: "Â© 2026 Â· Made by Fernando Jorge da Silva. Share freely."
    }
  },

  es: {
    meta: {
      title: "Tu primer agente de IA, sin misterio",
      description: "Aprende a crear tu primer agente de IA desde cero, incluso sin ser de TI. Una guÃ­a simple en 7 pasos, partiendo de un problema real de tu dÃ­a a dÃ­a."
    },
    ui: { copied: "Â¡Copiado!", copy: "Copiar", backToTop: "Volver arriba" },
    nav: {
      openToc: "Abrir Ã­ndice", closeToc: "Cerrar Ã­ndice",
      linkedinAriaLabel: "Perfil del autor en LinkedIn",
      darkMode: "Alternar modo oscuro", indexLabel: "Ãndice"
    },
    toc: {
      step0: "0. Empieza por tu dolor", vocab: "Vocabulario",
      map: "El camino que vas a recorrer", example: "Ejemplo en la prÃ¡ctica",
      step1: "1. Entiende tu proceso", step2: "2. Dibuja en papel",
      step3: "3. ReÃºne el material", step4: "4. El manual",
      step5: "5. El contrato", step6: "6. Dar vida al agente",
      final: "Recordatorios finales"
    },
    hero: {
      titleDesktop: "Tu<br>primer<br>agente de IA<br>sin misterio",
      titleMobile: "Tu primer agente de IA sin misterio",
      p1: "Esa tarea que te agota cada dÃ­a puede ser resuelta por un agente de IA â€” y tÃº mismo puedes crearlo. Sin necesidad de programar, sin necesidad de entender de tecnologÃ­a.",
      p2: "Solo necesitas un problema real y las ganas de seguir los pasos. El resto lo <strong class=\"text-white font-semibold\">aprendes haciendo</strong>.",
      badge: "Â¡Una guÃ­a del cero al Agente!"
    },
    s0: {
      title: "0. El Punto de Partida â€” empieza por tu dolor",
      p1: "Nadie construye un agente de IA solo por la tecnologÃ­a. Lo construimos porque algo duele: un problema que necesita resolverse, una tarea repetitiva que cansa, un informe que nadie soporta leer o un proceso que se atasca porque depende de la memoria de alguien.",
      p2: "Antes de abrir cualquier herramienta, hazte tres preguntas simples para saber si vale la pena crear el agente:",
      q1Label: "Pregunta 1", q1Title: "Â¿QuÃ© te estÃ¡ molestando?",
      q1Desc: "Describe el problema en una frase. Si no puedes, aÃºn no estÃ¡ suficientemente claro.",
      q2Label: "Pregunta 2", q2Title: "Â¿QuiÃ©n sufre con esto?",
      q2Desc: "Â¿TÃº, tu equipo, tus clientes? Saber quiÃ©n siente el dolor define el tono y los criterios del agente.",
      q3Label: "Pregunta 3", q3Title: "Â¿CuÃ¡nto te estÃ¡ costando hoy?",
      q3Desc: "En tiempo, dinero o paciencia. Ese nÃºmero servirÃ¡ para que midas la ganancia despuÃ©s.",
      p3: "Piensa en tu agente como un <strong>\"pasante digital\"</strong>. Â¿QuÃ© harÃ­a si pudiera trabajar 24h al dÃ­a sin cansarse? Mira ejemplos de problemas reales por Ã¡rea que puedes empezar a resolver hoy:",
      engTitle: "IngenierÃ­a",
      engProblem: "<strong>Lo que molesta:</strong> Garantizar que los proyectos sigan cientos de pÃ¡ginas de normas y manuales de seguridad.",
      engSolution: "<strong>Lo que harÃ¡ el agente:</strong> Auditor de Conformidad que cruza datos del proyecto con las normas y seÃ±ala errores al instante.",
      archTitle: "Arquitectura",
      archProblem: "<strong>Lo que molesta:</strong> Redactar memorias descriptivas consume horas a partir de planos y listas de especificaciones.",
      archSolution: "<strong>Lo que harÃ¡ el agente:</strong> Redactor tÃ©cnico que genera memorias descriptivas automÃ¡ticamente siguiendo los estÃ¡ndares del estudio.",
      medTitle: "Medicina",
      medProblem: "<strong>Lo que molesta:</strong> Revisar historiales largos antes de la consulta ocupa tiempo precioso del mÃ©dico.",
      medSolution: "<strong>Lo que harÃ¡ el agente:</strong> Resumidor clÃ­nico que estructura el historial del paciente en formato SOAP, con revisiÃ³n humana obligatoria.",
      retailTitle: "PequeÃ±o Comercio",
      retailProblem: "<strong>Lo que molesta:</strong> Horas perdidas respondiendo dudas idÃ©nticas por WhatsApp sobre tallas, devoluciones y envÃ­os.",
      retailSolution: "<strong>Lo que harÃ¡ el agente:</strong> Especialista en atenciÃ³n que conoce todo el inventario y la polÃ­tica de la tienda de memoria.",
      adminTitle: "Administrativo",
      adminProblem: "<strong>Lo que molesta:</strong> Caos en la gestiÃ³n de facturas y contratos, con vencimientos perdidos en carpetas desordenadas.",
      adminSolution: "<strong>Lo que harÃ¡ el agente:</strong> Organizador de flujo que extrae fechas y valores automÃ¡ticamente para un cronograma.",
      eduTitle: "EducaciÃ³n",
      eduProblem: "<strong>Lo que molesta:</strong> Tener mucho contenido grabado o escrito, pero no tener tiempo para crear exÃ¡menes y ejercicios.",
      eduSolution: "<strong>Lo que harÃ¡ el agente:</strong> DiseÃ±ador instruccional que transforma clases en materiales didÃ¡cticos estructurados.",
      checklistTitle: "âœ… Antes de continuar al Paso 1",
      check1: "Puedes describir el dolor en <strong>una sola frase</strong>.",
      check2: "Sabes <strong>quiÃ©n sufre</strong> con el dolor (quiÃ©n va a usar el agente).",
      check3: "Tienes una estimaciÃ³n del <strong>costo actual</strong> (tiempo, dinero, paciencia)."
    },
    vocab: {
      title: "Vocabulario del Agente",
      skillTitle: "Habilidad", skillTag: "(Skill)",
      skillDesc: "Cada cosa que el agente sabe hacer. Por ejemplo: \"sabe escribir correos\", \"sabe revisar planillas\".",
      toolTitle: "Herramienta", toolTag: "(Tool)",
      toolDesc: "Algo externo que el agente puede usar: una app, planilla o sistema de la empresa.",
      hookTitle: "Disparador", hookTag: "(Hook)",
      hookDesc: "Una regla del tipo \"siempre que pase X, haz Y\".",
      specTitle: "EspecificaciÃ³n", specTag: "(Spec)",
      specDesc: "El \"contrato\" que describe lo que hace el agente, en palabras simples.",
      mdTitle: "Markdown", mdTag: "(.md)",
      mdDesc: "Archivo de texto comÃºn, legible por personas e IA.",
      promptTitle: "Prompt",
      promptDesc: "La instrucciÃ³n que le das al agente. Cuanto mÃ¡s claro, mejor la respuesta."
    },
    map: {
      title: "El camino que vas a recorrer",
      subtitle: "Siete pasos en secuencia. Cada uno se apoya en el anterior. No te saltes etapas.",
      step0Title: "Empieza por tu dolor",
      step0Desc: "Identifica un problema real del dÃ­a a dÃ­a. Sin eso, no hay agente.",
      step1Title: "Entiende tu propio proceso",
      step1Desc: "Mapea cÃ³mo resuelves ese dolor hoy. QuÃ© reglas, herramientas, cuellos de botella.",
      step2Title: "Dibuja tu agente en papel",
      step2Desc: "Lista lo que sabe hacer, lo que usa y cuÃ¡ndo actÃºa solo.",
      step3Title: "ReÃºne el material de estudio",
      step3Desc: "Investiga normas, manuales y buenas prÃ¡cticas. Eso se convertirÃ¡ en el \"manual\".",
      step4Title: "El manual de tu agente",
      step4Desc: "Organiza todo en una carpeta con archivos de texto. Ese es su cerebro.",
      step5Title: "El \"contrato\" de tu agente",
      step5Desc: "La IA describe lo que va a construir y tÃº apruebas Ã­tem por Ã­tem.",
      step6Title: "Hora de dar vida al agente",
      step6Desc: "Con el contrato listo, solo pide a la IA que ejecute. Tu agente nace aquÃ­.",
      resultTitle: "Â¡Tu agente funcionando!",
      resultDesc: "Resolviendo el dolor que te molestaba en el Paso 0. Y lo mejor: lo hiciste tÃº solo."
    },
    example: {
      title: "Ejemplo en la prÃ¡ctica: La PequeÃ±a Tienda de Ropa",
      intro: "Para visualizarlo mejor, imaginemos una pequeÃ±a tienda de ropa de tu barrio. Mira cÃ³mo cada paso encaja en su dÃ­a a dÃ­a:",
      step0Label: "Dolor",
      step0Text: "\"Pierdo 2h al dÃ­a respondiendo dudas repetidas por WhatsApp y aun asÃ­ los clientes se quejan de la demora.\"",
      step1Label: "Entender el proceso",
      step1Text: "Lista de las 20 preguntas mÃ¡s frecuentes (tallas, envÃ­o, devoluciÃ³n, formas de pago) y el tiempo promedio de respuesta actual.",
      step2Label: "Dibujar en papel",
      step2Text: "<em>Lo que sabe hacer:</em> consultar la tabla de medidas, calcular envÃ­o por cÃ³digo postal, explicar la polÃ­tica de devoluciÃ³n. <em>Lo que usa:</em> planilla de inventario. <em>CuÃ¡ndo actÃºa solo:</em> en cuanto llega un nuevo mensaje por WhatsApp.",
      step3Label: "Reunir material",
      step3Text: "Informe con buenas prÃ¡cticas de atenciÃ³n en e-commerce de moda + checklist de la ley de defensa del consumidor para devoluciones.",
      step4Label: "El manual",
      step4Text: "Carpeta con: <code>politica-devoluciones.md</code>, <code>tabla-tallas.md</code>, <code>faq.md</code>, <code>tono-de-voz.md</code>.",
      step5Label: "El contrato",
      step5Text: "DescripciÃ³n: persona, tono amigable, siempre confirmar talla antes del envÃ­o, llamar a un agente humano si el cliente pide descuento.",
      step6Label: "Dar vida al agente",
      step6Text: "Agente en producciÃ³n respondiendo el 80% de las dudas en segundos, con transcripciones revisadas semanalmente para refinar el manual."
    },
    p1: {
      title: "Entiende tu propio proceso",
      body1: "El primer paso es entender tu <strong>\"piso de fÃ¡brica\"</strong>. No puedes enseÃ±arle a una IA a hacer algo que tÃº mismo no puedes explicar cÃ³mo se hace hoy manualmente.",
      body2: "Observa el proceso actual: Â¿dÃ³nde estÃ¡n los cuellos de botella? Â¿QuÃ© reglas sigues (incluso las que nadie escribiÃ³)? Â¿QuÃ© tareas son repetitivas y te agotan inÃºtilmente? Luego, lista las herramientas que usas (planillas, correos, sitios especÃ­ficos).",
      quote: "Pensar y anotar todo esto ya es un gran comienzo: verÃ¡s tu proceso de una manera que quizÃ¡s nunca habÃ­as visto antes.",
      tipTitle: "Consejo: investiga el problema con Deep Research",
      tipBody: "Sabemos que hay un problema, pero no siempre conocemos las <strong>mejores prÃ¡cticas</strong> del mercado para resolverlo. Usa <strong>Gemini Deep Research</strong> ahora para aprender sobre el tema antes de planificar el agente.",
      promptsLabel: "Ejemplos de prompts para comenzar:",
      promptEngLabel: "Para IngenierÃ­a:",
      promptEng: "\"Investiga las principales causas de no conformidad en obras civiles y quÃ© normas de seguridad son mÃ¡s crÃ­ticas para garantizar la seguridad estructural y laboral.\"",
      promptArchLabel: "Para Arquitectura:",
      promptArch: "\"Investiga la estructura estÃ¡ndar de una memoria descriptiva de proyecto arquitectÃ³nico, identificando secciones obligatorias, vocabulario tÃ©cnico y errores comunes en la redacciÃ³n.\"",
      promptMedLabel: "Para Medicina:",
      promptMed: "\"Investiga las mejores prÃ¡cticas para el resumen de historiales mÃ©dicos electrÃ³nicos en formato SOAP, considerando las regulaciones de privacidad del paciente y responsabilidad mÃ©dica.\"",
      promptRetailLabel: "Para Comercio:",
      promptRetail: "\"Investiga las mejores prÃ¡cticas de atenciÃ³n al cliente en e-commerce de moda e identifica las 20 dudas mÃ¡s frecuentes de los consumidores que compran ropa online.\"",
      promptAdminLabel: "Para Administrativo:",
      promptAdmin: "\"Analiza flujos de trabajo de cuentas por pagar y cobrar en pequeÃ±as empresas e identifica los errores humanos mÃ¡s comunes en el procesamiento de facturas y contratos.\"",
      promptEduLabel: "Para EducaciÃ³n:",
      promptEdu: "\"Investiga metodologÃ­as de diseÃ±o instruccional eficaces para convertir guiones de videoclases en materiales didÃ¡cticos de apoyo que mejoren la retenciÃ³n de los estudiantes.\"",
      alertTitle: "ðŸ’¡ Consejo importante:",
      alertBody: "Es fundamental que entiendas lo bÃ¡sico del tema. Si no sabes lo que el agente debe entregar, no podrÃ¡s saber si estÃ¡ funcionando o simplemente <strong>\"alucinando\"</strong> (inventando cosas con apariencia de verdad).",
      checklistTitle: "âœ… Antes de continuar",
      check1: "Escribiste cÃ³mo funciona el proceso hoy, aunque sea solo un borrador.",
      check2: "LeÃ­ste al menos un informe de Deep Research e hiciste anotaciones.",
      check3: "Listaste las herramientas y sistemas que forman parte del proceso."
    },
    p2: {
      title: "Dibuja tu agente en papel",
      body1: "Con el diagnÃ³stico hecho, calma: no vayas a pedirle a la IA que cree el agente directamente. Primero, conversa con ella y pide ayuda para diseÃ±ar la <strong>estructura</strong> de lo que se va a construir.",
      body2: "En <strong>Gemini</strong> (o alternativas como <strong>ChatGPT</strong> y <strong>Claude</strong>), pega lo que aprendiste en el Paso 1 y pide ayuda para planificar. Planificar antes vale mÃ¡s la pena que salir ejecutando: visualizas los <strong>\"trabajadores virtuales\"</strong> y las <strong>habilidades</strong> que cada uno necesita, sin desperdiciar energÃ­a.",
      codeComment: "// Pide asÃ­:",
      codePrompt: "\"Con el tema que describÃ­ arriba, ayÃºdame a planificar un conjunto de agentes. Para cada uno, lista las <strong>habilidades</strong> (skills), <strong>herramientas</strong> (tools) y <strong>disparadores</strong> (hooks) necesarios.\"",
      checklistTitle: "âœ… Antes de continuar",
      check1: "Para cada agente: lo que sabe hacer, con quÃ© herramientas y cuÃ¡ndo entra en acciÃ³n.",
      check2: "Puedes explicar en voz alta quÃ© hace cada agente."
    },
    p3: {
      title: "ReÃºne el material de estudio de tu agente",
      body1: "Un agente solo es inteligente si tiene <strong>buen contenido para estudiar</strong>. La investigaciÃ³n aquÃ­ no es superficial: es hora de investigar el tema a fondo y reunir manuales, leyes y estÃ¡ndares reales que rigen tu trabajo.",
      howTitle: "CÃ³mo usar Gemini Deep Research:",
      howBody: "Gemini Deep Research funciona como un investigador privado: pasa minutos rastreando la web para entregarte un informe completo.",
      how1: "Accede a <a href=\"https://gemini.google.com\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold\">Gemini</a> y busca el recurso <strong>\"Deep Research\"</strong> en la barra de chat.",
      how2: "Define el tema con base en lo planificado en el Paso 2 (ej.: \"Investiga todas las normas de seguridad para obras civiles\").",
      how3: "Descarga o copia el informe final. Se convertirÃ¡ en la base de conocimiento de tu agente.",
      alertTitle: "ðŸš¨ AtenciÃ³n:",
      alertBody: "Lee todos los informes generados. Este conocimiento no solo sirve para alimentar la IA. Es una excelente oportunidad para que tÃº aprendas mÃ¡s y te actualices sobre el tema.",
      checklistTitle: "âœ… Antes de continuar",
      check1: "Todo el material investigado guardado en una carpeta fÃ¡cil de encontrar.",
      check2: "LeÃ­ste cada informe de principio a fin y marcaste puntos importantes."
    },
    p4: {
      title: "El manual de tu agente",
      body1: "Imagina que la IA es un alumno brillante, pero que nunca ha trabajado en tu empresa. El <strong>manual</strong> es el material de estudio personalizado que le entregas.",
      body2: "A diferencia de la IA genÃ©rica, tu agente tendrÃ¡ una fuente enfocada en tus datos. Es este contenido el que <strong>define cÃ³mo actÃºa</strong>: responde en tu tono de voz, sigue tus reglas y cita tus fuentes. Sin manual, el agente da respuestas vagas. Con Ã©l, actÃºa como alguien experimentado de tu equipo.",
      whatTitle: "Â¿QuÃ© es?",
      whatBody: "Es el <strong>conocimiento inicial</strong> de tu agente. Define el tema que domina y exactamente cÃ³mo debe actuar.",
      whyMdTitle: "Â¿Por quÃ© Markdown (.md)?",
      whyMdBody: "Los archivos .md son \"texto plano\" con formato simple. Es el idioma preferido de las IAs, sin el \"ruido\" visual de PDFs o Word.",
      howLabel: "CÃ³mo preparar el manual:",
      how1: "Crea una carpeta en tu computadora con el nombre del proyecto.",
      how2: "Abre tus informes de investigaciÃ³n en Google Docs y descarga cada uno como <strong>\"Texto con formato (.md)\"</strong>.",
      how3: "Coloca todos esos archivos dentro de la carpeta. Â¡Listo, el manual estÃ¡ armado!",
      checklistTitle: "âœ… Antes de continuar",
      check1: "Carpeta creada y archivos de texto organizados dentro de ella.",
      check2: "Revisaste el contenido y no hay informaciÃ³n confidencial expuesta."
    },
    p5: {
      title: "El \"contrato\" de tu agente",
      body1: "Ahora usamos <a href=\"https://claude.ai\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">Claude</a>, <a href=\"https://github.com/features/copilot\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">GitHub Copilot</a> o alternativas como <a href=\"https://cursor.sh\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">Cursor</a> y <a href=\"https://chatgpt.com\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">ChatGPT</a> (apuntando a la carpeta del manual que creaste en el Paso 4). Le pedimos a la IA que lea el material y cree un <strong>contrato</strong> de lo que se va a construir.",
      body2: "El contrato es el documento donde la IA describe, en palabras simples, exactamente lo que pretende hacer. Es el momento de leerlo con calma y decir: \"esto sÃ­, es exactamente lo que quiero\" o \"esta regla estÃ¡ mal, cÃ¡mbiala\".",
      codeComment: "// Pide asÃ­:",
      codePrompt: "\"Lee los archivos de esta carpeta y crea una especificaciÃ³n detallada del agente en lenguaje natural, describiendo en palabras simples todo lo que debe hacer, sus reglas, su tono de voz y los casos en que debe pedir ayuda humana.\"",
      alertTitle: "ðŸš¨ AtenciÃ³n:",
      alertBody: "Â¡Lee todo! AquÃ­ es donde evitas las alucinaciones de la IA. Un contrato bien validado garantiza un agente mÃ¡s preciso. Conversa con la IA o edita el texto a mano hasta que quede exactamente como debe.",
      checklistTitle: "âœ… Antes de continuar",
      check1: "LeÃ­ste el contrato completo y entendiste lo que estÃ¡ escrito.",
      check2: "Las reglas y el tono de voz son los tuyos, no los de la IA.",
      check3: "Definiste quÃ© debe hacer el agente cuando no sepa responder."
    },
    p6: {
      title: "Hora de dar vida al agente",
      body1: "Con el contrato aprobado por ti, la parte difÃ­cil terminÃ³. Ahora solo dale la orden a la IA de \"girar la llave\".",
      codeComment: "// Pide asÃ­:",
      codePrompt: "\"El contrato estÃ¡ perfecto. Ahora ejecuta el desarrollo del agente segÃºn lo planificado.\"",
      body2: "La IA crearÃ¡ todos los archivos, cÃ³digos e instrucciones necesarias. Tu primer agente acaba de nacer, listo para resolver ese dolor que identificaste al principio.",
      outputTitle: "QuÃ© esperar como resultado:",
      output1: "Archivos de configuraciÃ³n e instrucciones del sistema (system prompt).",
      output2: "Estructura de carpetas con el \"manual\" listo para usar.",
      output3: "Ejemplos de uso y casos de prueba sugeridos.",
      output4: "Instrucciones de cÃ³mo integrar con la herramienta elegida (WhatsApp, correo, planilla, etc.).",
      alertTitle: "ðŸ”„ Recuerda:",
      alertBody1: "El agente nace, pero necesita ser probado y ajustado. Trata cada uso como un ciclo: <strong>probar â†’ ajustar el contrato â†’ ejecutar de nuevo</strong>.",
      alertBody2: "Presta atenciÃ³n tambiÃ©n a la <strong>privacidad</strong>: evita colocar en el manual informaciÃ³n sensible (contratos, datos personales o secretos comerciales) sin antes verificar quÃ© hace la herramienta con ese contenido.",
      checklistTitle: "âœ… Â¡Felicidades! Â¡Creaste tu primer agente!",
      check1: "Tu agente estÃ¡ en funcionamiento y respondiendo.",
      check2: "Ya sabes cuÃ¡ndo lo revisarÃ¡s, y no lo dejarÃ¡s para despuÃ©s.",
      check3: "Compara el resultado con el problema que describiste al principio: Â¿valiÃ³ la pena?"
    },
    footer: {
      title: "4 recordatorios para no olvidar",
      rule1Title: "TÃº eres el jefe",
      rule1Desc: "La IA ejecuta, tÃº decides. Lee el contrato y valida el contenido del manual. El que manda eres tÃº.",
      rule2Title: "La organizaciÃ³n siempre gana",
      rule2Desc: "Una carpeta organizada con .md limpios vale mÃ¡s que mil prompts genÃ©ricos. Manual desordenado = agente confundido.",
      rule3Title: "No tengas prisa",
      rule3Desc: "No necesita quedar perfecto a la primera. Refina la conversaciÃ³n, pide ajustes en el contrato e intÃ©ntalo de nuevo.",
      rule4Title: "Vuelve siempre para ajustar",
      rule4Desc: "Cuando encuentres problemas, vuelve al contrato. Un buen agente es un agente probado y mejorado poco a poco.",
      developedBy: "Desarrollado por",
      authorLinkedinAriaLabel: "Perfil de Fernando Jorge da Silva en LinkedIn",
      copyright: "Â© 2026 Â· Hecho por Fernando Jorge da Silva. Comparte libremente."
    }
  }
};

// â”€â”€ Engine â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const LANGS = ['pt', 'en', 'es'];
let currentLang = 'pt';

function t(key) {
  return key.split('.').reduce((obj, k) => obj?.[k], TRANSLATIONS[currentLang]) ?? key;
}
window.t = t;

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.dataset.i18n);
    if (val !== el.dataset.i18n) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t(el.dataset.i18nHtml);
    if (val !== el.dataset.i18nHtml) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const val = t(el.dataset.i18nAria);
    if (val !== el.dataset.i18nAria) el.setAttribute('aria-label', val);
  });
  document.title = t('meta.title');
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));
  document.documentElement.lang = currentLang === 'pt' ? 'pt-br' : currentLang;
}

function setLang(lang) {
  if (!LANGS.includes(lang)) lang = 'pt';
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  applyTranslations();
}

function detectLang() {
  const stored = localStorage.getItem('lang');
  if (stored && LANGS.includes(stored)) return stored;
  const browser = (navigator.language || '').toLowerCase().slice(0, 2);
  if (LANGS.includes(browser)) return browser;
  return 'pt';
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  setLang(detectLang());
});
