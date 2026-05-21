const TRANSLATIONS = {
  pt: {
    meta: {
      title: "Seu Primeiro Agente de IA, Sem Mistério",
      description: "Aprenda a criar seu primeiro agente de IA do zero, mesmo sem ser de TI e sem saber programar. Um guia simples, em 7 etapas saindo do 0 até a finalização do Agente, partindo de um problema real do seu dia a dia."
    },
    ui: { copied: "Copiado!", copy: "Copiar", backToTop: "Voltar ao topo" },
    nav: {
      openToc: "Abrir índice", closeToc: "Fechar índice",
      linkedinAriaLabel: "Perfil do autor no LinkedIn",
      darkMode: "Alternar modo escuro", indexLabel: "Índice"
    },
    toc: {
      step0: "0. Comece pela sua dor", vocab: "Vocabulário",
      map: "O caminho que você vai percorrer", example: "Exemplo na prática",
      step1: "1. Entenda o seu processo", step2: "2. Desenhe no papel",
      step3: "3. Junte o material", step4: "4. A apostila",
      step5: "5. O contrato", step6: "6. Dar vida ao agente",
      final: "Lembretes finais"
    },
    hero: {
      titleDesktop: "Seu<br>Primeiro<br>Agente de IA<br>Sem Mistério",
      titleMobile: "Seu Primeiro Agente de IA Sem Mistério",
      p1: "Aquela tarefa que te cansa todo dia pode ser resolvida por um agente de IA e você mesmo pode criá-lo. Sem precisar saber programar. Sem precisar entender de tecnologia.",
      p2: "Só precisa de um problema real e vontade de seguir os passos. O resto você <strong class=\"text-white font-semibold\">aprende fazendo</strong>.",
      badge: "Um guia do zero ao Agente!"
    },
    s0: {
      title: "0. O Ponto de Partida: comece pela sua dor",
      p1: "Ninguém constrói um agente de IA só pela tecnologia. A gente constrói porque algo dói: um problema que precisa ser resolvido, uma tarefa repetitiva que cansa, um relatório que ninguém aguenta ler ou um processo que trava porque depende da memória de alguém.",
      p2: "Antes de abrir qualquer ferramenta, faça três perguntas simples para saber se vale a pena criar o agente:",
      q1Label: "Pergunta 1", q1Title: "O que está te incomodando?",
      q1Desc: "Descreva o problema em uma frase. Se não conseguir, ainda não está claro o suficiente.",
      q2Label: "Pergunta 2", q2Title: "Quem sofre com isso?",
      q2Desc: "Você, sua equipe, seus clientes? Saber quem sente a dor define o tom e os critérios do agente.",
      q3Label: "Pergunta 3", q3Title: "Quanto isso te custa hoje?",
      q3Desc: "Em tempo, dinheiro ou paciência. Esse número vai servir pra você medir o ganho depois.",
      p3: "Pense no seu agente como um <strong>“estagiário digital”</strong>. O que ele faria se pudesse trabalhar 24h por dia sem cansar? Veja exemplos de problemas reais por área que você pode começar a resolver hoje:",
      engTitle: "Engenharia",
      engProblem: "<strong>Sua dor:</strong> Garantir que projetos sigam centenas de páginas de normas da ABNT e manuais de segurança.",
      engSolution: "<strong>O Agente:</strong> Auditor de Conformidade que cruza dados da obra com as normas e aponta erros na hora.",
      archTitle: "Arquitetura",
      archProblem: "<strong>Sua dor:</strong> Redigir memoriais descritivos consome horas a partir de pranchas e listas de especificação.",
      archSolution: "<strong>O Agente:</strong> Redator técnico que gera memoriais descritivos automaticamente seguindo a NBR 13532 e o padrão do escritório.",
      medTitle: "Medicina",
      medProblem: "<strong>Sua dor:</strong> Revisar prontuários longos antes da consulta toma tempo precioso do médico.",
      medSolution: "<strong>O Agente:</strong> Especialista clínico que estrutura histórico do paciente em formato SOAP, respeitando LGPD/CFM e com revisão humana obrigatória.",
      retailTitle: "Comércio",
      retailProblem: "<strong>Sua dor:</strong> Horas perdidas respondendo dúvidas idênticas no WhatsApp sobre tamanhos, trocas e frete.",
      retailSolution: "<strong>O Agente:</strong> Especialista em atendimento que conhece todo o estoque e a política da loja de cor.",
      adminTitle: "Administrativo",
      adminProblem: "<strong>Sua dor:</strong> Caos na gestão de notas e contratos, com vencimentos perdidos em pastas bagunçadas.",
      adminSolution: "<strong>O Agente:</strong> Organizador de fluxo que extrai datas e valores automaticamente para um cronograma.",
      eduTitle: "Educação",
      eduProblem: "<strong>Sua dor:</strong> Ter muito conteúdo gravado ou escrito, mas não ter tempo para criar provas e exercícios.",
      eduSolution: "<strong>O Agente:</strong> Designer instrucional que transforma aulas em materiais didáticos estruturados.",
      checklistTitle: "✅ Antes de seguir para o Passo 1",
      check1: "Você consegue descrever a dor em <strong>uma única frase</strong>.",
      check2: "Você sabe <strong>quem sofre</strong> com a dor (quem vai usar o agente).",
      check3: "Você tem uma estimativa do <strong>custo atual</strong> (tempo, dinheiro, paciência)."
    },
    vocab: {
      title: "Vocabulário do Agente",
      skillTitle: "Habilidade", skillTag: "(Skill)",
      skillDesc: "Cada coisa que o agente sabe fazer. Tipo: “sabe escrever e-mail”, “sabe revisar planilha”.",
      toolTitle: "Ferramenta", toolTag: "(Tool)",
      toolDesc: "Algo de fora que o agente pode usar: um app, planilha ou sistema da empresa.",
      hookTitle: "Gatilho", hookTag: "(Hook)",
      hookDesc: "Uma regra do tipo “sempre que acontecer X, faça Y”.",
      specTitle: "Especificação", specTag: "(Spec)",
      specDesc: "O “contrato” que descreve o que o agente faz, em palavras simples.",
      mdTitle: "Markdown", mdTag: "(.md)",
      mdDesc: "Arquivo de texto comum, legível por gente e por IA.",
      promptTitle: "Prompt",
      promptDesc: "A instrução que você dá pro agente. Quanto mais claro, melhor a resposta."
    },
    map: {
      title: "O caminho que você vai percorrer",
      subtitle: "Sete passos em sequência. Não pule etapas.",
      step0Title: "Comece pela sua dor",
      step0Desc: "Identifique um problema real do dia a dia. Sem isso, não tem agente.",
      step1Title: "Entenda o seu próprio processo",
      step1Desc: "Mapeie como você resolve essa dor hoje. Quais regras, ferramentas, gargalos.",
      step2Title: "Desenhe o fluxo do seu agente",
      step2Desc: "Liste o que ele sabe fazer, o que usa, quando age sozinho e a sequência das atividades.",
      step3Title: "Junte o material de estudo",
      step3Desc: "Pesquise normas, manuais e boas práticas. Isso vai virar a “apostila”.",
      step4Title: "A apostila do seu agente",
      step4Desc: "Organize tudo, colocando os arquivos de texto numa mesma pasta. Isso é o cérebro do agente.",
      step5Title: "O “contrato” do seu agente",
      step5Desc: "A IA descreve o que vai construir e você aprova item por item.",
      step6Title: "Hora de dar vida ao agente",
      step6Desc: "Com o contrato pronto, é só pedir pra IA executar. Seu agente nasce aqui.",
      resultTitle: "Seu agente funcionando!",
      resultDesc: "Resolvendo a dor que te incomodava lá no Passo 0. E o melhor: foi você quem fez."
    },
    example: {
      title: "Exemplo na prática, A Lojinha de roupas",
      intro: "Pra ficar mais fácil de visualizar, vamos imaginar uma pequena loja de roupas do seu bairro. Veja como cada passo se encaixa no dia a dia dela:",
      step0Label: "Dor",
      step0Text: "\"Perco horas do meu dia respondendo as mesmas dúvidas no WhatsApp e ainda assim cliente reclama da demora.\"",
      step1Label: "Entender o processo",
      step1Text: "Lista das 20 dúvidas mais frequentes (tamanhos, frete, troca, formas de pagamento) e o tempo médio de resposta atual.",
      step2Label: "Desenhar o fluxo",
      step2Text: "<strong>O que ele sabe fazer:</strong> consultar tabela de medidas, calcular frete por CEP, explicar política de troca. <strong>O que ele usa:</strong> planilha de estoque. <strong>Quando ele age sozinho:</strong> assim que chega uma nova mensagem no WhatsApp.",
      step3Label: "Juntar material",
      step3Text: "Relatório com boas práticas de atendimento em e-commerce de moda + checklist do Código de Defesa do Consumidor para trocas.",
      step4Label: "A apostila",
      step4Text: "Pasta com: <code>politica-trocas.md</code>, <code>tabela-medidas.md</code>, <code>faq.md</code>, <code>tom-de-voz.md</code>.",
      step5Label: "O contrato",
      step5Text: "Descrição: persona, tom amigável, sempre confirmar tamanho antes do envio, chamar atendente humano se cliente pedir desconto.",
      step6Label: "Dar vida ao agente",
      step6Text: "Agente em produção respondendo 80% das dúvidas em segundos, com transcrições revisadas semanalmente para refinar a apostila."
    },
    p1: {
      title: "Entenda o seu próprio processo",
      body1: "O primeiro passo é entender o seu <strong>\"chão de fábrica\"</strong>. Você não pode ensinar uma IA a fazer algo que você mesmo não consegue explicar como é feito hoje na mão.",
      body2: "Olhe pro processo atual: onde estão os gargalos? Quais regras você segue (mesmo as que ninguém escreveu)? Quais tarefas são repetitivas e te cansam à toa? Em seguida, liste as ferramentas que você usa (planilhas, e-mails, sites específicos).",
      quote: "Pensar e anotar tudo isso já é um ótimo começo: você vai enxergar o seu processo de um jeito que talvez nunca tenha enxergado antes.",
      tipTitle: "Dica: investigue o problema com Deep Research",
      tipBody: "A gente sabe que tem um problema, mas nem sempre conhece as <strong>melhores práticas</strong> do mercado pra resolvê-lo. Use o <strong>Gemini Deep Research</strong> agora pra aprender sobre o assunto antes de planejar o agente.",
      promptsLabel: "Exemplos de prompts pra começar:",
      promptEngLabel: "Para Engenharia:",
      promptEng: "\"Investigue as principais causas de não conformidade em obras civis e quais normas da ABNT são mais críticas para garantir a segurança estrutural e do trabalho.\"",
      promptArchLabel: "Para Arquitetura:",
      promptArch: "\"Pesquise a estrutura padrão de um memorial descritivo de projeto arquitetônico segundo a NBR 13532, identificando seções obrigatórias, vocabulário técnico e erros comuns na redação.\"",
      promptMedLabel: "Para Medicina:",
      promptMed: "\"Investigue as melhores práticas para resumo de prontúrios eletrônicos no formato SOAP, considerando exigências da LGPD e do CFM sobre privacidade do paciente e responsabilidade médica.\"",
      promptRetailLabel: "Para Varejo:",
      promptRetail: "\"Pesquise as melhores práticas de atendimento ao cliente para e-commerce e identifique quais são as 20 dúvidas mais frequentes de consumidores que compram vestuário online.\"",
      promptAdminLabel: "Para Administrativo:",
      promptAdmin: "\"Analise fluxos de trabalho de contas a pagar e receber em pequenas empresas e identifique os erros humanos mais comuns no processamento de notas fiscais e contratos.\"",
      promptEduLabel: "Para Educação:",
      promptEdu: "\"Pesquise metodologias de design instrucional eficazes para converter roteiros de videoaulas em materiais didáticos de apoio que aumentem a retenção de alunos.\"",
      alertTitle: "💡 Dica importante:",
      alertBody: "É essencial que você entenda o básico do assunto. Se você não souber o que o agente deve entregar, não vai ter como saber se ele está funcionando ou apenas <strong>“alucinando”</strong> (inventando coisas com cara de verdade).",
      checklistTitle: "✅ Antes de seguir",
      check1: "Você escreveu como o processo funciona hoje, mesmo que seja só um rascunho.",
      check2: "Você leu pelo menos um relatório do Deep Research e fez anotações.",
      check3: "Você listou as ferramentas e sistemas que fazem parte do processo."
    },
    p2: {
      title: "Desenhe o fluxo do seu agente",
      body1: "Com o diagnóstico feito, calma: não vá sair pedindo pra IA criar o agente direto. Antes, converse com ela e peça ajuda pra desenhar a <strong>estrutura</strong> do que vai ser construído.",
      body2: "No <strong>Gemini</strong> (ou em alternativas como <strong>ChatGPT</strong> e <strong>Claude</strong>), cole o que você aprendeu no Passo 1 e peça ajuda pra planejar. Planejar antes vale mais a pena do que sair executando: você visualiza os <strong>\"trabalhadores virtuais\"</strong> e as <strong>habilidades</strong> que cada um precisa ter, sem desperdiçar energia.",
      codeComment: "// Peça assim:",
      codePrompt: "\"Com o assunto que descrevi acima, me ajude a planejar um conjunto de agentes. Para cada um, liste as <strong>habilidades</strong> (skills), <strong>ferramentas</strong> (tools) e <strong>gatilhos</strong> (hooks) necessários.\"",
      checklistTitle: "✅ Antes de seguir",
      check1: "Para cada agente: o que ele sabe fazer, com quais ferramentas e quando entra em ação.",
      check2: "Você consegue explicar em voz alta o que cada agente faz."
    },
    p3: {
      title: "Junte o material de estudo do seu agente",
      body1: "Um agente só é inteligente se tiver <strong>conteúdo bom pra estudar</strong>. Aqui a pesquisa não é superficial: é hora de investigar o tema a fundo e juntar manuais, leis e padrões reais que regem o seu trabalho.",
      howTitle: "Como usar o Gemini Deep Research:",
      howBody: "O Gemini Deep Research funciona como um investigador particular: ele passa minutos varrendo a web pra te entregar um relatório completo.",
      how1: "Acesse o <a href=\"https://gemini.google.com\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold\">Gemini</a> e procure pelo recurso <strong>\"Deep Research\"</strong> na barra de chat.",
      how2: "Defina o tema com base no que foi planejado no Passo 2 (ex.: \"Investigue todas as normas de segurança NR-18 para obras civis\").",
      how3: "Baixe ou copie o relatório final. Ele vai virar a base do conhecimento do seu agente.",
      alertTitle: "🚨 Atenção:",
      alertBody: "Leia todos os relatórios gerados. Esse conhecimento não serve só pra alimentar a IA. É uma ótima oportunidade pra você aprender mais e se atualizar sobre o assunto.",
      checklistTitle: "✅ Antes de seguir",
      check1: "Todo o material pesquisado salvo numa pasta fácil de encontrar.",
      check2: "Você leu cada relatório do início ao fim e marcou pontos importantes."
    },
    p4: {
      title: "A apostila do seu agente",
      body1: "Imagine que a IA é um aluno brilhante, mas que nunca entrou na sua empresa. A <strong>apostila</strong> é o material de estudo personalizado que você entrega pra ele.",
      body2: "Diferente da IA genérica, o seu agente vai ter uma fonte focada nos seus dados. É esse conteúdo que <strong>define como ele atua</strong>: ele responde no seu tom de voz, segue as suas regras e cita as suas fontes. Sem apostila, o agente dá respostas vagas. Com ela, age como alguém experiente da sua equipe.",
      whatTitle: "O que é?",
      whatBody: "É o <strong>conhecimento inicial</strong> do seu agente. Define o assunto que ele domina e exatamente como ele deve atuar.",
      whyMdTitle: "Por que Markdown (.md)?",
      whyMdBody: "Arquivos .md são \"texto puro\" com formatação simples. É o idioma preferido das IAs, sem a \"sujeira\" visual de PDFs ou Word.",
      howLabel: "Como preparar a apostila:",
      how1: "Crie uma pasta no seu computador com o nome do projeto.",
      how2: "Abra seus relatórios de pesquisa no Google Docs e baixe cada um como <strong>\"Texto formatado (.md)\"</strong>.",
      how3: "Coloque todos esses arquivos dentro da pasta. Pronto, a apostila está montada!",
      checklistTitle: "✅ Antes de seguir",
      check1: "Pasta criada e arquivos de texto organizados dentro dela.",
      check2: "Você revisou o conteúdo e não há informações confidenciais expostas."
    },
    p5: {
      title: "O “contrato” do seu agente",
      body1: "Agora a gente usa o <a href=\"https://claude.ai\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">Claude</a>, o <a href=\"https://github.com/features/copilot\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">GitHub Copilot</a> ou alternativas como <a href=\"https://cursor.sh\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">Cursor</a> e <a href=\"https://chatgpt.com\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">ChatGPT</a> (apontando pra pasta da apostila que você criou no Passo 4). Pedimos pra IA ler o material e criar um <strong>contrato</strong> do que vai ser construído.",
      body2: "O contrato é o documento onde a IA descreve, em palavras simples, exatamente o que ela pretende fazer. É a hora de você ler com calma e dizer: \"isso aqui sim, é exatamente o que eu quero\" ou \"essa regra está errada, muda\".",
      codeComment: "// Peça assim:",
      codePrompt: "\"Leia os arquivos desta pasta e crie uma especificação detalhada do agente em linguagem natural, descrevendo em palavras simples tudo o que ele deve fazer, suas regras, seu tom de voz e os casos em que deve pedir ajuda humana.\"",
      alertTitle: "🚨 Atenção:",
      alertBody: "Leia tudo! É aqui que você evita as alucinações da IA. Um contrato bem validado garante um agente mais preciso. Converse com a IA ou edite o texto à mão até ficar exatamente como deve.",
      checklistTitle: "✅ Antes de seguir",
      check1: "Você leu o contrato inteiro e entendeu o que está escrito.",
      check2: "As regras e o jeito de falar estão do seu jeito, e não da IA.",
      check3: "Você definiu o que o agente deve fazer quando não souber responder."
    },
    p6: {
      title: "Hora de dar vida ao agente",
      body1: "Com o contrato aprovado por você, a parte difícil acabou. Agora é só dar a ordem pra IA \"girar a chave\".",
      codeComment: "// Peça assim:",
      codePrompt: "\"O contrato está perfeito. Agora execute o desenvolvimento do agente conforme planejado.\"",
      body2: "A IA vai criar todos os arquivos, códigos e instruções necessárias. Seu primeiro agente acaba de nascer, pronto pra resolver aquela dor que você identificou lá no início.",
      outputTitle: "O que esperar como saída:",
      output1: "Arquivos de configuração e instruções de sistema (system prompt).",
      output2: "Estrutura de pastas com a \"apostila\" pronta pra uso.",
      output3: "Exemplos de uso e casos de teste sugeridos.",
      output4: "Instruções de como integrar com a ferramenta escolhida (WhatsApp, e-mail, planilha, etc.).",
      alertTitle: "🔄 Lembre-se:",
      alertBody1: "O agente nasce, mas precisa ser testado e ajustado. Trate cada uso como um ciclo: <strong>testar → ajustar o contrato → executar de novo</strong>.",
      alertBody2: "Atenção também à <strong>privacidade</strong>: evite colocar na apostila informações sensíveis (contratos, dados pessoais ou segredos comerciais) sem antes verificar o que a ferramenta faz com esse conteúdo.",
      checklistTitle: "✅ Parabéns! Você criou seu primeiro agente!",
      check1: "Seu agente está no ar e respondendo.",
      check2: "Você já sabe quando vai revisá-lo, e não vai deixar pra depois.",
      check3: "Compare o resultado com o problema que você descreveu lá no início: valeu a pena?"
    },
    footer: {
      title: "4 lembretes pra não esquecer",
      rule1Title: "Você é o chefe",
      rule1Desc: "A IA executa, você decide. Leia o contrato e valide o conteúdo da apostila. Quem manda é você.",
      rule2Title: "Organização sempre ganha",
      rule2Desc: "Uma pasta organizada com .md limpos vale mais que mil prompts genéricos. Apostila bagunçada = agente confuso.",
      rule3Title: "Não tenha pressa",
      rule3Desc: "Não precisa ficar perfeito de primeira. Refine a conversa, peça ajustes no contrato e tente de novo.",
      rule4Title: "Volte sempre pra ajustar",
      rule4Desc: "Quando encontrar problemas, volte pro contrato. Agente bom é agente testado e melhorado aos poucos.",
      developedBy: "Desenvolvido por",
      authorLinkedinAriaLabel: "Perfil de Fernando Jorge da Silva no LinkedIn",
      copyright: "© 2026 · Feito por Fernando Jorge da Silva. Compartilhe à vontade."
    }
  },

  en: {
    meta: {
      title: "Your First AI Agent, No Mystery",
      description: "Learn how to build your first AI agent from scratch, even if you are not in tech and do not know how to code. A simple 7-step guide that takes you from zero to a finished agent, starting from a real problem in your day-to-day work."
    },
    ui: { copied: "Copied!", copy: "Copy", backToTop: "Back to top" },
    nav: {
      openToc: "Open index", closeToc: "Close index",
      linkedinAriaLabel: "Author profile on LinkedIn",
      darkMode: "Toggle dark mode", indexLabel: "Index"
    },
    toc: {
      step0: "0. Start with your pain", vocab: "Vocabulary",
      map: "The path you will follow", example: "Real-world example",
      step1: "1. Understand your process", step2: "2. Sketch it on paper",
      step3: "3. Gather the material", step4: "4. The study guide",
      step5: "5. The contract", step6: "6. Bring the agent to life",
      final: "Final reminders"
    },
    hero: {
      titleDesktop: "Your<br>First<br>AI Agent<br>No Mystery",
      titleMobile: "Your First AI Agent, No Mystery",
      p1: "That task that drains you every single day can be handled by an AI agent, and you can build it yourself. No coding required, no technical background required.",
      p2: "You only need a real problem and the willingness to follow the steps. The rest you <strong class=\"text-white font-semibold\">learn by doing</strong>.",
      badge: "A practical guide from zero to your first agent!"
    },
    s0: {
      title: "0. The starting point: start with your pain",
      p1: "Nobody builds an AI agent just because the technology is cool. We build one because something hurts: a problem that must be solved, a repetitive task that is exhausting, a report nobody can stand reading, or a process that breaks because it depends on one person's memory.",
      p2: "Before you open any tool, ask yourself three simple questions to decide whether creating this agent is worth it:",
      q1Label: "Question 1", q1Title: "What is bothering you?",
      q1Desc: "Describe the problem in one sentence. If you cannot, it is not clear enough yet.",
      q2Label: "Question 2", q2Title: "Who is affected by it?",
      q2Desc: "You, your team, your customers? Knowing who feels the pain sets the tone and success criteria for the agent.",
      q3Label: "Question 3", q3Title: "How much is it costing you today?",
      q3Desc: "In time, money, or patience. This number will help you measure gains later.",
      p3: "Think of your agent as a <strong>\"digital intern\"</strong>. What would it do if it could work 24/7 without getting tired? Here are examples of real problems by field that you can start solving today:",
      engTitle: "Engineering",
      engProblem: "<strong>Your pain:</strong> Ensuring projects comply with hundreds of pages of technical and safety standards.",
      engSolution: "<strong>The Agent:</strong> A Compliance Auditor that cross-checks project data against applicable standards and flags issues immediately.",
      archTitle: "Architecture",
      archProblem: "<strong>Your pain:</strong> Writing descriptive technical reports from plans and specification sheets takes hours.",
      archSolution: "<strong>The Agent:</strong> A technical writer that automatically drafts project descriptions using your firm's standard format and local requirements.",
      medTitle: "Medicine",
      medProblem: "<strong>Your pain:</strong> Reviewing long patient records before appointments consumes valuable clinical time.",
      medSolution: "<strong>The Agent:</strong> A clinical assistant that structures patient history in SOAP format, following local privacy and medical-board rules with mandatory human review.",
      retailTitle: "Small Retail",
      retailProblem: "<strong>Your pain:</strong> Hours lost answering the same WhatsApp questions about sizing, returns, and shipping.",
      retailSolution: "<strong>The Agent:</strong> A customer support specialist that knows your inventory and store policy inside out.",
      adminTitle: "Administration",
      adminProblem: "<strong>Your pain:</strong> Chaos in invoice and contract management, with due dates lost in messy folders.",
      adminSolution: "<strong>The Agent:</strong> A workflow organizer that automatically extracts dates and amounts into a clear schedule.",
      eduTitle: "Education",
      eduProblem: "<strong>Your pain:</strong> Having lots of recorded or written content but no time to create assessments and practice activities.",
      eduSolution: "<strong>The Agent:</strong> An instructional designer that turns lessons into structured teaching materials.",
      checklistTitle: "✅ Before moving to Step 1",
      check1: "You can describe the pain in <strong>one single sentence</strong>.",
      check2: "You know <strong>who is affected</strong> by this pain (who will use the agent).",
      check3: "You have an estimate of the <strong>current cost</strong> (time, money, patience)."
    },
    vocab: {
      title: "Agent Vocabulary",
      skillTitle: "Skill", skillTag: "(Skill)",
      skillDesc: "Each thing the agent knows how to do. For example: \"write emails\", \"review spreadsheets\".",
      toolTitle: "Tool", toolTag: "(Tool)",
      toolDesc: "Something external the agent can use: an app, a spreadsheet, or a company system.",
      hookTitle: "Trigger", hookTag: "(Hook)",
      hookDesc: "A rule like \"whenever X happens, do Y\".",
      specTitle: "Specification", specTag: "(Spec)",
      specDesc: "The \"contract\" that explains what the agent does, in plain language.",
      mdTitle: "Markdown", mdTag: "(.md)",
      mdDesc: "A plain-text file format that both people and AI can read easily.",
      promptTitle: "Prompt",
      promptDesc: "The instruction you give to the agent. The clearer it is, the better the answer."
    },
    map: {
      title: "The path you will follow",
      subtitle: "Seven steps in sequence. Each step builds on the previous one. Do not skip stages.",
      step0Title: "Start with your pain",
      step0Desc: "Identify a real day-to-day problem. Without that, there is no agent.",
      step1Title: "Understand your own process",
      step1Desc: "Map how you solve this pain today: rules, tools, and bottlenecks.",
      step2Title: "Sketch your agent workflow",
      step2Desc: "List what it can do, what it uses, when it acts by itself, and the sequence of tasks.",
      step3Title: "Gather study material",
      step3Desc: "Research standards, manuals, and best practices. This becomes the agent's study guide.",
      step4Title: "Your agent's study guide",
      step4Desc: "Organize everything in one folder with text files. That is the agent's brain.",
      step5Title: "Your agent's \"contract\"",
      step5Desc: "The AI describes what it intends to build, and you approve it item by item.",
      step6Title: "Time to bring the agent to life",
      step6Desc: "With the contract ready, ask the AI to execute. This is where your agent is born.",
      resultTitle: "Your agent is running!",
      resultDesc: "Solving the pain that was bothering you back in Step 0. Best of all: you built it yourself."
    },
    example: {
      title: "Real-world example: the small clothing store",
      intro: "To make this easier to picture, imagine a small clothing shop in your neighborhood. Here is how each step fits into its daily routine:",
      step0Label: "Pain",
      step0Text: "\"I lose hours every day answering the same WhatsApp questions, and customers still complain that we are too slow.\"",
      step1Label: "Understand the process",
      step1Text: "List of the 20 most frequent questions (sizes, shipping, returns, payment methods) and the current average response time.",
      step2Label: "Sketch the flow",
      step2Text: "<strong>What it can do:</strong> check size chart, calculate shipping by ZIP code, explain return policy. <strong>What it uses:</strong> inventory spreadsheet. <strong>When it acts alone:</strong> as soon as a new WhatsApp message arrives.",
      step3Label: "Gather material",
      step3Text: "A report on customer-service best practices for fashion e-commerce plus a local consumer-protection checklist for returns.",
      step4Label: "The study guide",
      step4Text: "Folder with: <code>return-policy.md</code>, <code>size-chart.md</code>, <code>faq.md</code>, <code>tone-of-voice.md</code>.",
      step5Label: "The contract",
      step5Text: "Description: persona, friendly tone, always confirm size before shipment, hand off to a human agent when the customer asks for a discount.",
      step6Label: "Bring the agent to life",
      step6Text: "Agent in production, answering 80% of questions in seconds, with weekly transcript reviews to improve the study guide."
    },
    p1: {
      title: "Understand your own process",
      body1: "The first step is understanding your <strong>\"shop floor\"</strong>. You cannot teach AI to do something you cannot explain how to do manually today.",
      body2: "Look at your current process: where are the bottlenecks? Which rules do you follow (including unwritten ones)? Which tasks are repetitive and drain your energy for no reason? Then list the tools you already use (spreadsheets, email, specific websites).",
      quote: "Thinking through this and writing it down is already a great start: you will see your process in a way you may never have seen before.",
      tipTitle: "Tip: investigate the problem with Deep Research",
      tipBody: "You know there is a problem, but you may not know the <strong>best practices</strong> to solve it yet. Use <strong>Gemini Deep Research</strong> now to learn the topic before planning your agent.",
      promptsLabel: "Prompt examples to get started:",
      promptEngLabel: "For Engineering:",
      promptEng: "\"Investigate the main causes of non-compliance in civil construction projects and identify which local structural and worker-safety standards are most critical.\"",
      promptArchLabel: "For Architecture:",
      promptArch: "\"Research the standard structure of an architectural descriptive report, including required sections, technical vocabulary, and common writing mistakes.\"",
      promptMedLabel: "For Medicine:",
      promptMed: "\"Investigate best practices for summarizing electronic health records in SOAP format, considering local data-privacy and medical-governance requirements.\"",
      promptRetailLabel: "For Retail:",
      promptRetail: "\"Research best practices in customer support for fashion e-commerce and identify the 20 most common questions from online apparel shoppers.\"",
      promptAdminLabel: "For Administration:",
      promptAdmin: "\"Analyze accounts payable and receivable workflows in small businesses and identify the most common human errors when processing invoices and contracts.\"",
      promptEduLabel: "For Education:",
      promptEdu: "\"Research effective instructional-design methods for converting video lesson scripts into support materials that improve student retention.\"",
      alertTitle: "💡 Important tip:",
      alertBody: "You need to understand the basics of the topic. If you do not know what the agent should deliver, you cannot tell whether it is working or just <strong>\"hallucinating\"</strong> (making things up that sound true).",
      checklistTitle: "✅ Before moving on",
      check1: "You wrote how the process works today, even if it is still a draft.",
      check2: "You read at least one Deep Research report and took notes.",
      check3: "You listed the tools and systems involved in the process."
    },
    p2: {
      title: "Sketch your agent workflow",
      body1: "With your diagnosis done, pause for a second: do not jump straight into asking AI to build the agent. First, ask it to help you design the <strong>structure</strong> of what you want to build.",
      body2: "In <strong>Gemini</strong> (or alternatives like <strong>ChatGPT</strong> and <strong>Claude</strong>), paste what you learned in Step 1 and ask for planning support. Planning before execution is more efficient: you can visualize the <strong>\"virtual workers\"</strong> and the <strong>skills</strong> each one needs, without wasting effort.",
      codeComment: "// Ask like this:",
      codePrompt: "\"Based on the topic I described above, help me plan a set of agents. For each one, list the required <strong>skills</strong>, <strong>tools</strong>, and <strong>triggers</strong> (hooks).\"",
      checklistTitle: "✅ Before moving on",
      check1: "For each agent, define what it does, which tools it uses, and when it should start acting.",
      check2: "You can explain out loud what each agent is responsible for."
    },
    p3: {
      title: "Gather your agent's study material",
      body1: "An agent is only smart if it has <strong>high-quality material to study</strong>. This is not surface-level research: now is the time to go deep and collect real manuals, laws, and standards that govern your work.",
      howTitle: "How to use Gemini Deep Research:",
      howBody: "Gemini Deep Research works like a private investigator: it spends a few minutes scanning the web and delivers a complete report.",
      how1: "Open <a href=\"https://gemini.google.com\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold\">Gemini</a> and look for the <strong>\"Deep Research\"</strong> feature in the chat bar.",
      how2: "Define the topic based on Step 2 planning (for example: \"Investigate all local safety standards for civil construction projects\").",
      how3: "Download or copy the final report. It will become your agent's knowledge foundation.",
      alertTitle: "🚨 Attention:",
      alertBody: "Read every generated report. This is not just fuel for AI. It is also a great opportunity for you to learn and stay current on the topic.",
      checklistTitle: "✅ Before moving on",
      check1: "All researched material is saved in an easy-to-find folder.",
      check2: "You read each report from start to finish and highlighted key points."
    },
    p4: {
      title: "Your agent's study guide",
      body1: "Imagine AI as a brilliant student who has never worked at your company. The <strong>study guide</strong> is the custom learning material you hand over.",
      body2: "Unlike generic AI, your agent will rely on a source focused on your own data. This content <strong>defines how it behaves</strong>: it replies in your tone, follows your rules, and cites your sources. Without a study guide, answers are vague. With one, the agent behaves like an experienced team member.",
      whatTitle: "What is it?",
      whatBody: "It is your agent's <strong>initial knowledge base</strong>. It defines what the agent knows and exactly how it should act.",
      whyMdTitle: "Why Markdown (.md)?",
      whyMdBody: ".md files are plain text with lightweight formatting. AI tools read them well, without the visual clutter of PDF or Word files.",
      howLabel: "How to prepare the study guide:",
      how1: "Create a project folder on your computer.",
      how2: "Open your research reports in Google Docs and download each one as <strong>\"Formatted text (.md)\"</strong>.",
      how3: "Place those files inside the folder. Done, your study guide is ready.",
      checklistTitle: "✅ Before moving on",
      check1: "Folder created and text files organized inside it.",
      check2: "You reviewed the content and removed confidential information."
    },
    p5: {
      title: "Your agent's \"contract\"",
      body1: "Now use <a href=\"https://claude.ai\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">Claude</a>, <a href=\"https://github.com/features/copilot\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">GitHub Copilot</a>, or alternatives like <a href=\"https://cursor.sh\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">Cursor</a> and <a href=\"https://chatgpt.com\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">ChatGPT</a> (pointing to the study-guide folder created in Step 4). Ask AI to read the material and draft a <strong>contract</strong> for what will be built.",
      body2: "The contract is where AI explains, in plain language, exactly what it intends to do. Read it carefully and decide: \"yes, this is exactly what I want\" or \"this rule is wrong, change it\".",
      codeComment: "// Ask like this:",
      codePrompt: "\"Read the files in this folder and create a detailed agent specification in plain language, describing everything it should do, its rules, its tone of voice, and the situations where it must ask for human help.\"",
      alertTitle: "🚨 Attention:",
      alertBody: "Read everything. This is where you prevent AI hallucinations. A well-validated contract leads to a more reliable agent. Talk with AI or edit the text manually until it is exactly right.",
      checklistTitle: "✅ Before moving on",
      check1: "You read the full contract and understood what is written.",
      check2: "The rules and voice are yours, not the AI's.",
      check3: "You defined what the agent should do when it does not know the answer."
    },
    p6: {
      title: "Time to bring the agent to life",
      body1: "With the contract approved by you, the hardest part is done. Now give AI the order to \"turn the key\".",
      codeComment: "// Ask like this:",
      codePrompt: "\"The contract is perfect. Now execute the agent development as planned.\"",
      body2: "AI will generate the files, code, and instructions needed. Your first agent is now alive and ready to solve the pain you identified at the beginning.",
      outputTitle: "What you should expect as output:",
      output1: "Configuration files and system instructions (system prompt).",
      output2: "Folder structure with the study guide ready to use.",
      output3: "Example uses and suggested test cases.",
      output4: "Instructions for integration with the selected channel (WhatsApp, email, spreadsheet, etc.).",
      alertTitle: "🔄 Remember:",
      alertBody1: "The agent is born, but it still needs testing and tuning. Treat each run as a cycle: <strong>test -> adjust contract -> run again</strong>.",
      alertBody2: "Also watch <strong>privacy</strong>: avoid adding sensitive information to the study guide (contracts, personal data, trade secrets) without confirming how your tool handles that data.",
      checklistTitle: "✅ Congratulations! You built your first agent!",
      check1: "Your agent is live and responding.",
      check2: "You already know when you will review it, and you will not postpone that.",
      check3: "Compare the outcome with the original problem: was it worth it?"
    },
    footer: {
      title: "4 reminders to keep in mind",
      rule1Title: "You are the boss",
      rule1Desc: "AI executes, you decide. Read the contract and validate the study guide content. You are in charge.",
      rule2Title: "Organization always wins",
      rule2Desc: "One organized folder with clean .md files beats a thousand generic prompts. Messy study guide = confused agent.",
      rule3Title: "Do not rush",
      rule3Desc: "It does not need to be perfect on the first try. Refine the conversation, request contract adjustments, and try again.",
      rule4Title: "Keep coming back to improve",
      rule4Desc: "When issues appear, go back to the contract. A good agent is tested and improved over time.",
      developedBy: "Developed by",
      authorLinkedinAriaLabel: "Fernando Jorge da Silva profile on LinkedIn",
      copyright: "© 2026 · Made by Fernando Jorge da Silva. Feel free to share."
    }
  },

  es: {
    meta: {
      title: "Tu Primer Agente de IA, Sin Misterio",
      description: "Aprende a crear tu primer agente de IA desde cero, incluso sin ser del area de tecnologia y sin saber programar. Una guia simple en 7 pasos que te lleva del cero a la finalizacion del agente, basada en un problema real de tu dia a dia."
    },
    ui: { copied: "Copiado!", copy: "Copiar", backToTop: "Volver arriba" },
    nav: {
      openToc: "Abrir indice", closeToc: "Cerrar indice",
      linkedinAriaLabel: "Perfil del autor en LinkedIn",
      darkMode: "Alternar modo oscuro", indexLabel: "Indice"
    },
    toc: {
      step0: "0. Empieza por tu dolor", vocab: "Vocabulario",
      map: "El camino que vas a recorrer", example: "Ejemplo en la practica",
      step1: "1. Entiende tu proceso", step2: "2. Dibujalo en papel",
      step3: "3. Reune el material", step4: "4. La guia de estudio",
      step5: "5. El contrato", step6: "6. Dar vida al agente",
      final: "Recordatorios finales"
    },
    hero: {
      titleDesktop: "Tu<br>Primer<br>Agente de IA<br>Sin Misterio",
      titleMobile: "Tu Primer Agente de IA, Sin Misterio",
      p1: "Esa tarea que te agota todos los dias puede ser resuelta por un agente de IA, y tu mismo puedes crearlo. Sin necesidad de programar, sin necesidad de saber tecnologia.",
      p2: "Solo necesitas un problema real y ganas de seguir los pasos. El resto lo <strong class=\"text-white font-semibold\">aprendes haciendo</strong>.",
      badge: "Una guia practica: del cero a tu primer agente!"
    },
    s0: {
      title: "0. Punto de partida: empieza por tu dolor",
      p1: "Nadie crea un agente de IA solo por la tecnologia. Lo creamos porque algo duele: un problema que hay que resolver, una tarea repetitiva que desgasta, un informe que nadie soporta leer o un proceso que se traba porque depende de la memoria de una persona.",
      p2: "Antes de abrir cualquier herramienta, hazte tres preguntas simples para saber si vale la pena crear el agente:",
      q1Label: "Pregunta 1", q1Title: "Que te esta molestando?",
      q1Desc: "Describe el problema en una sola frase. Si no puedes, todavia no esta lo bastante claro.",
      q2Label: "Pregunta 2", q2Title: "A quien afecta?",
      q2Desc: "A ti, a tu equipo, a tus clientes? Saber quien siente ese dolor define el tono y los criterios del agente.",
      q3Label: "Pregunta 3", q3Title: "Cuanto te cuesta hoy?",
      q3Desc: "En tiempo, dinero o paciencia. Ese numero te servira para medir el beneficio despues.",
      p3: "Piensa en tu agente como un <strong>\"pasante digital\"</strong>. Que haria si pudiera trabajar 24/7 sin cansarse? Mira ejemplos de problemas reales por area que puedes empezar a resolver hoy:",
      engTitle: "Ingenieria",
      engProblem: "<strong>Tu dolor:</strong> Garantizar que los proyectos cumplan cientos de paginas de normas tecnicas y manuales de seguridad.",
      engSolution: "<strong>El Agente:</strong> Un Auditor de Cumplimiento que cruza datos del proyecto con normas aplicables y detecta errores al momento.",
      archTitle: "Arquitectura",
      archProblem: "<strong>Tu dolor:</strong> Redactar memorias descriptivas consume horas a partir de planos y listas de especificaciones.",
      archSolution: "<strong>El Agente:</strong> Un redactor tecnico que genera memorias descriptivas automaticamente con el formato de tu estudio y requisitos locales.",
      medTitle: "Medicina",
      medProblem: "<strong>Tu dolor:</strong> Revisar historias clinicas largas antes de la consulta quita tiempo valioso.",
      medSolution: "<strong>El Agente:</strong> Un asistente clinico que organiza el historial del paciente en formato SOAP, respetando normativa local de privacidad y del colegio medico, con revision humana obligatoria.",
      retailTitle: "Pequeno comercio",
      retailProblem: "<strong>Tu dolor:</strong> Horas perdidas respondiendo las mismas dudas por WhatsApp sobre tallas, cambios y envios.",
      retailSolution: "<strong>El Agente:</strong> Un especialista de atencion que conoce todo el inventario y la politica de la tienda al detalle.",
      adminTitle: "Administracion",
      adminProblem: "<strong>Tu dolor:</strong> Caos en la gestion de facturas y contratos, con vencimientos perdidos en carpetas desordenadas.",
      adminSolution: "<strong>El Agente:</strong> Un organizador de flujo que extrae fechas e importes automaticamente para un cronograma.",
      eduTitle: "Educacion",
      eduProblem: "<strong>Tu dolor:</strong> Tener mucho contenido grabado o escrito, pero no tener tiempo para crear evaluaciones y ejercicios.",
      eduSolution: "<strong>El Agente:</strong> Un disenador instruccional que convierte clases en materiales didacticos estructurados.",
      checklistTitle: "✅ Antes de pasar al Paso 1",
      check1: "Puedes describir el dolor en <strong>una sola frase</strong>.",
      check2: "Sabes <strong>a quien afecta</strong> ese dolor (quien usara el agente).",
      check3: "Tienes una estimacion del <strong>costo actual</strong> (tiempo, dinero, paciencia)."
    },
    vocab: {
      title: "Vocabulario del Agente",
      skillTitle: "Habilidad", skillTag: "(Skill)",
      skillDesc: "Cada cosa que el agente sabe hacer. Por ejemplo: \"escribir correos\", \"revisar hojas de calculo\".",
      toolTitle: "Herramienta", toolTag: "(Tool)",
      toolDesc: "Algo externo que el agente puede usar: una app, una hoja de calculo o un sistema de la empresa.",
      hookTitle: "Disparador", hookTag: "(Hook)",
      hookDesc: "Una regla del tipo \"siempre que pase X, haz Y\".",
      specTitle: "Especificacion", specTag: "(Spec)",
      specDesc: "El \"contrato\" que describe lo que hace el agente, en lenguaje simple.",
      mdTitle: "Markdown", mdTag: "(.md)",
      mdDesc: "Archivo de texto plano, facil de leer para personas y para IA.",
      promptTitle: "Prompt",
      promptDesc: "La instruccion que le das al agente. Cuanto mas clara sea, mejor sera la respuesta."
    },
    map: {
      title: "El camino que vas a recorrer",
      subtitle: "Siete pasos en secuencia. Cada paso se apoya en el anterior. No te saltes etapas.",
      step0Title: "Empieza por tu dolor",
      step0Desc: "Identifica un problema real de tu dia a dia. Sin eso, no hay agente.",
      step1Title: "Entiende tu propio proceso",
      step1Desc: "Mapea como resuelves hoy ese dolor: reglas, herramientas y cuellos de botella.",
      step2Title: "Dibuja el flujo de tu agente",
      step2Desc: "Lista que sabe hacer, que usa, cuando actua solo y la secuencia de actividades.",
      step3Title: "Reune material de estudio",
      step3Desc: "Investiga normas, manuales y buenas practicas. Eso se convierte en la guia de estudio del agente.",
      step4Title: "La guia de estudio de tu agente",
      step4Desc: "Organiza todo en una sola carpeta con archivos de texto. Ese es el cerebro del agente.",
      step5Title: "El \"contrato\" de tu agente",
      step5Desc: "La IA describe lo que piensa construir y tu lo apruebas punto por punto.",
      step6Title: "Hora de dar vida al agente",
      step6Desc: "Con el contrato listo, pide a la IA que ejecute. Aqui nace tu agente.",
      resultTitle: "Tu agente ya esta funcionando!",
      resultDesc: "Resolviendo el dolor que te molestaba en el Paso 0. Y lo mejor: lo hiciste tu mismo."
    },
    example: {
      title: "Ejemplo real: la pequena tienda de ropa",
      intro: "Para verlo mas claro, imagina una pequena tienda de ropa de tu barrio. Asi encaja cada paso en su rutina diaria:",
      step0Label: "Dolor",
      step0Text: "\"Pierdo horas al dia respondiendo las mismas dudas por WhatsApp y, aun asi, los clientes se quejan de la demora.\"",
      step1Label: "Entender el proceso",
      step1Text: "Lista de las 20 preguntas mas frecuentes (tallas, envio, devolucion, formas de pago) y tiempo promedio actual de respuesta.",
      step2Label: "Dibujar el flujo",
      step2Text: "<strong>Que sabe hacer:</strong> consultar tabla de tallas, calcular envio por codigo postal, explicar politica de devolucion. <strong>Que usa:</strong> hoja de calculo de inventario. <strong>Cuando actua solo:</strong> en cuanto entra un nuevo mensaje por WhatsApp.",
      step3Label: "Reunir material",
      step3Text: "Informe con buenas practicas de atencion en e-commerce de moda + checklist de normativa local de defensa del consumidor para devoluciones.",
      step4Label: "La guia de estudio",
      step4Text: "Carpeta con: <code>politica-devoluciones.md</code>, <code>tabla-tallas.md</code>, <code>faq.md</code>, <code>tono-de-voz.md</code>.",
      step5Label: "El contrato",
      step5Text: "Descripcion: persona, tono cercano, confirmar talla antes de enviar, derivar a un agente humano cuando el cliente pida descuento.",
      step6Label: "Dar vida al agente",
      step6Text: "Agente en produccion respondiendo el 80% de dudas en segundos, con revision semanal de transcripciones para mejorar la guia de estudio."
    },
    p1: {
      title: "Entiende tu propio proceso",
      body1: "El primer paso es entender tu <strong>\"piso operativo\"</strong>. No puedes ensenarle a una IA algo que tu mismo no puedes explicar como se hace hoy de forma manual.",
      body2: "Mira el proceso actual: donde estan los cuellos de botella? Que reglas sigues (incluidas las no escritas)? Que tareas son repetitivas y te desgastan sin necesidad? Luego lista las herramientas que usas (hojas de calculo, correo, sitios especificos).",
      quote: "Pensar y anotar todo esto ya es un gran inicio: vas a ver tu proceso de una forma que tal vez nunca habias visto.",
      tipTitle: "Consejo: investiga el problema con Deep Research",
      tipBody: "Sabes que existe un problema, pero no siempre conoces las <strong>mejores practicas</strong> para resolverlo. Usa <strong>Gemini Deep Research</strong> para aprender del tema antes de planificar el agente.",
      promptsLabel: "Ejemplos de prompts para empezar:",
      promptEngLabel: "Para Ingenieria:",
      promptEng: "\"Investiga las principales causas de incumplimiento en obras civiles e identifica que normas locales de seguridad estructural y laboral son mas criticas.\"",
      promptArchLabel: "Para Arquitectura:",
      promptArch: "\"Investiga la estructura estandar de una memoria descriptiva arquitectonica, incluyendo secciones obligatorias, vocabulario tecnico y errores frecuentes de redaccion.\"",
      promptMedLabel: "Para Medicina:",
      promptMed: "\"Investiga buenas practicas para resumir historias clinicas electronicas en formato SOAP, considerando normativa local de privacidad de pacientes y responsabilidad medica.\"",
      promptRetailLabel: "Para Comercio:",
      promptRetail: "\"Investiga mejores practicas de atencion al cliente para e-commerce de moda e identifica las 20 preguntas mas frecuentes de quienes compran ropa en linea.\"",
      promptAdminLabel: "Para Administracion:",
      promptAdmin: "\"Analiza flujos de cuentas por pagar y por cobrar en pequenas empresas e identifica los errores humanos mas comunes al procesar facturas y contratos.\"",
      promptEduLabel: "Para Educacion:",
      promptEdu: "\"Investiga metodologias efectivas de diseno instruccional para convertir guiones de videoclases en materiales de apoyo que mejoren la retencion del alumnado.\"",
      alertTitle: "💡 Consejo importante:",
      alertBody: "Es fundamental que entiendas lo basico del tema. Si no sabes que debe entregar el agente, no podras saber si realmente funciona o si solo esta <strong>\"alucinando\"</strong> (inventando cosas que suenan creibles).",
      checklistTitle: "✅ Antes de continuar",
      check1: "Escribiste como funciona hoy el proceso, aunque sea en borrador.",
      check2: "Leiste al menos un reporte de Deep Research y tomaste notas.",
      check3: "Listaste las herramientas y sistemas que forman parte del proceso."
    },
    p2: {
      title: "Dibuja el flujo de tu agente",
      body1: "Con el diagnostico listo, calma: no le pidas a la IA que construya el agente de inmediato. Primero, conversen para definir la <strong>estructura</strong> de lo que se va a construir.",
      body2: "En <strong>Gemini</strong> (o alternativas como <strong>ChatGPT</strong> y <strong>Claude</strong>), pega lo aprendido en el Paso 1 y pide ayuda para planificar. Planificar antes de ejecutar vale mas: visualizas los <strong>\"trabajadores virtuales\"</strong> y las <strong>habilidades</strong> que necesita cada uno, sin desperdiciar energia.",
      codeComment: "// Pidelo asi:",
      codePrompt: "\"Con base en el tema que describi arriba, ayudame a planificar un conjunto de agentes. Para cada uno, lista las <strong>habilidades</strong> (skills), <strong>herramientas</strong> (tools) y <strong>disparadores</strong> (hooks) necesarios.\"",
      checklistTitle: "✅ Antes de continuar",
      check1: "Para cada agente, define que hace, que herramientas usa y cuando entra en accion.",
      check2: "Puedes explicar en voz alta de que se encarga cada agente."
    },
    p3: {
      title: "Reune el material de estudio de tu agente",
      body1: "Un agente solo es inteligente si tiene <strong>material de calidad para estudiar</strong>. Aqui la investigacion no es superficial: es momento de profundizar y reunir manuales, leyes y normas reales que rigen tu trabajo.",
      howTitle: "Como usar Gemini Deep Research:",
      howBody: "Gemini Deep Research funciona como un investigador privado: pasa unos minutos rastreando la web y te entrega un informe completo.",
      how1: "Entra a <a href=\"https://gemini.google.com\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold\">Gemini</a> y busca la funcion <strong>\"Deep Research\"</strong> en la barra de chat.",
      how2: "Define el tema segun lo planificado en el Paso 2 (por ejemplo: \"Investigar todas las normas locales de seguridad para obras civiles\").",
      how3: "Descarga o copia el informe final. Esa sera la base de conocimiento de tu agente.",
      alertTitle: "🚨 Atencion:",
      alertBody: "Lee todos los informes generados. Ese conocimiento no solo sirve para alimentar la IA. Tambien es una excelente oportunidad para que tu aprendas y te actualices.",
      checklistTitle: "✅ Antes de continuar",
      check1: "Todo el material investigado esta guardado en una carpeta facil de ubicar.",
      check2: "Leiste cada informe de principio a fin y marcaste los puntos clave."
    },
    p4: {
      title: "La guia de estudio de tu agente",
      body1: "Imagina que la IA es un alumno brillante, pero que nunca trabajo en tu empresa. La <strong>guia de estudio</strong> es el material personalizado que le entregas.",
      body2: "A diferencia de una IA generica, tu agente tendra una fuente enfocada en tus datos. Ese contenido <strong>define como actua</strong>: responde con tu tono, sigue tus reglas y cita tus fuentes. Sin guia de estudio, responde de forma vaga. Con ella, actua como alguien con experiencia en tu equipo.",
      whatTitle: "Que es?",
      whatBody: "Es el <strong>conocimiento inicial</strong> de tu agente. Define el tema que domina y exactamente como debe actuar.",
      whyMdTitle: "Por que Markdown (.md)?",
      whyMdBody: "Los archivos .md son texto plano con formato simple. Las IAs los entienden muy bien, sin el ruido visual de PDF o Word.",
      howLabel: "Como preparar la guia de estudio:",
      how1: "Crea una carpeta en tu computadora con el nombre del proyecto.",
      how2: "Abre tus informes de investigacion en Google Docs y descarga cada uno como <strong>\"Texto con formato (.md)\"</strong>.",
      how3: "Guarda todos esos archivos dentro de la carpeta. Listo, tu guia de estudio ya esta armada.",
      checklistTitle: "✅ Antes de continuar",
      check1: "Carpeta creada y archivos de texto organizados dentro.",
      check2: "Revisaste el contenido y retiraste informacion confidencial."
    },
    p5: {
      title: "El \"contrato\" de tu agente",
      body1: "Ahora usa <a href=\"https://claude.ai\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">Claude</a>, <a href=\"https://github.com/features/copilot\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">GitHub Copilot</a>, o alternativas como <a href=\"https://cursor.sh\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">Cursor</a> y <a href=\"https://chatgpt.com\" target=\"_blank\" rel=\"noopener\" class=\"underline font-bold text-indigo-600 dark:text-indigo-300\">ChatGPT</a> (apuntando a la carpeta de guia de estudio del Paso 4). Pidele a la IA que lea el material y cree un <strong>contrato</strong> de lo que va a construir.",
      body2: "El contrato es el documento donde la IA explica, en lenguaje simple, exactamente lo que pretende hacer. Ahi debes leer con calma y decir: \"esto si, es lo que quiero\" o \"esta regla esta mal, cambiala\".",
      codeComment: "// Pidelo asi:",
      codePrompt: "\"Lee los archivos de esta carpeta y crea una especificacion detallada del agente en lenguaje natural, describiendo todo lo que debe hacer, sus reglas, su tono de voz y los casos en que debe pedir ayuda humana.\"",
      alertTitle: "🚨 Atencion:",
      alertBody: "Leelo todo. Aqui es donde evitas alucinaciones de la IA. Un contrato bien validado produce un agente mas confiable. Conversa con la IA o edita a mano hasta que quede exactamente como debe ser.",
      checklistTitle: "✅ Antes de continuar",
      check1: "Leiste el contrato completo y entendiste su contenido.",
      check2: "Las reglas y el tono son tuyos, no de la IA.",
      check3: "Definiste que debe hacer el agente cuando no sepa responder."
    },
    p6: {
      title: "Hora de dar vida al agente",
      body1: "Con el contrato aprobado por ti, la parte mas dificil ya paso. Ahora solo dale a la IA la orden de \"girar la llave\".",
      codeComment: "// Pidelo asi:",
      codePrompt: "\"El contrato esta perfecto. Ahora ejecuta el desarrollo del agente segun lo planificado.\"",
      body2: "La IA creara todos los archivos, codigos e instrucciones necesarias. Tu primer agente acaba de nacer, listo para resolver el dolor que identificaste al inicio.",
      outputTitle: "Que deberias recibir como salida:",
      output1: "Archivos de configuracion e instrucciones del sistema (system prompt).",
      output2: "Estructura de carpetas con la guia de estudio lista para usar.",
      output3: "Ejemplos de uso y casos de prueba sugeridos.",
      output4: "Instrucciones para integrarlo con el canal elegido (WhatsApp, correo, hoja de calculo, etc.).",
      alertTitle: "🔄 Recuerda:",
      alertBody1: "El agente nace, pero necesita pruebas y ajustes. Trata cada uso como un ciclo: <strong>probar -> ajustar contrato -> ejecutar de nuevo</strong>.",
      alertBody2: "Atencion tambien a la <strong>privacidad</strong>: evita incluir informacion sensible en la guia de estudio (contratos, datos personales, secretos comerciales) sin verificar antes como la herramienta tratara esos datos.",
      checklistTitle: "✅ Felicidades! Creaste tu primer agente!",
      check1: "Tu agente ya esta activo y respondiendo.",
      check2: "Ya sabes cuando vas a revisarlo, y no lo vas a postergar.",
      check3: "Compara el resultado con el problema inicial: valio la pena?"
    },
    footer: {
      title: "4 recordatorios para no olvidar",
      rule1Title: "Tu mandas",
      rule1Desc: "La IA ejecuta, pero tu decides. Lee el contrato y valida el contenido de la guia de estudio. Tu tienes el control.",
      rule2Title: "La organizacion siempre gana",
      rule2Desc: "Una carpeta ordenada con .md limpios vale mas que mil prompts genericos. Guia desordenada = agente confundido.",
      rule3Title: "No te apresures",
      rule3Desc: "No tiene que quedar perfecto a la primera. Ajusta la conversacion, pide cambios en el contrato e intenta otra vez.",
      rule4Title: "Vuelve siempre para mejorar",
      rule4Desc: "Cuando encuentres problemas, vuelve al contrato. Un buen agente es uno que se prueba y mejora con el tiempo.",
      developedBy: "Desarrollado por",
      authorLinkedinAriaLabel: "Perfil de Fernando Jorge da Silva en LinkedIn",
      copyright: "© 2026 · Hecho por Fernando Jorge da Silva. Compartelo libremente."
    }
  }
};

// ── Engine ────────────────────────────────────────────────────────────────

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
  const localeMap = { pt: 'pt-BR', en: 'en-US', es: 'es-419' };
  document.documentElement.lang = localeMap[currentLang] || 'pt-BR';
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
