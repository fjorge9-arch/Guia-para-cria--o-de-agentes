## Constituição do Projeto — Desmistificando IA (Repositório Unificado)

Documento normativo da fusão e evolução futura do ecossistema **Desmistificando IA**, composto originalmente por dois repositórios complementares:

- `Guia-para-criacao-de-agentes` — guia introdutório de 7 etapas para criar um agente de IA
- `Material-de-estudo` (subpasta `estudos/`) — plataforma de estudo com lições, quiz, casos práticos e histórico

---

### 1. Propósito

Garantir a fusão segura, rastreável e sem regressão dos dois projetos em um único repositório `desmistificando-ia`, e reger a evolução do produto unificado com os mesmos princípios já estabelecidos no Material-de-estudo.

---

### 2. Fonte de Verdade

- A especificação oficial desta fusão é o documento [SPEC-SDD.md](SPEC-SDD.md).
- O backlog executável é o [TASKS.md](TASKS.md).
- Em caso de conflito entre implementação e especificação, prevalece a especificação até que seja formalmente revisada.

---

### 3. Princípios Inegociáveis

1. **SDD-first:** toda mudança relevante precisa de vínculo explícito com requisito e critério de aceite.
2. **Rastreabilidade ponta a ponta:** objetivo → requisito → task → validação → entrega.
3. **Evolução incremental:** passos pequenos, reversíveis e testáveis.
4. **Zero regressão:** todas as funcionalidades existentes em ambos os projetos devem permanecer operacionais após a fusão.
5. **Integridade de dados:** nenhuma alteração pode comprometer histórico de progresso, quiz ou sincronização (plataforma de estudos).
6. **Preservação de histórico git:** o histórico de commits de ambos os repositórios de origem deve ser preservado no repositório de destino.

---

### 4. Guardrails Técnicos

1. **Stack obrigatória neste ciclo:** HTML, CSS e JavaScript puros — sem migração de framework.
2. **Assets unificados:** um único diretório `/assets/` compartilhado entre as duas seções; sem duplicação de arquivos de estilo, i18n ou utilitários.
3. **Estrutura de rotas:**
   - `/` → Guia (landing page e ponto de entrada do domínio)
   - `/estudos/` → Plataforma de Estudos
   - `/assets/` → assets compartilhados
4. **localStorage:** chaves `theme` e `lang` são compartilhadas entre seções; chaves de progresso da plataforma (`studyProgress`, etc.) são isoladas e mantidas intactas.
5. **Nenhum hard-code de credenciais** em código, markdown, commits ou arquivos de configuração versionados.

---

### 5. Políticas de Conteúdo

1. O conteúdo markdown de lições em `estudos/content/**/*.md` é migrado sem alteração de texto ou estrutura.
2. Novos markdowns devem continuar entrando no catálogo sem cadastro manual hard-coded.
3. Metadados mínimos por lição (id, título, tópico, resumo, origem) devem ser mantidos.

---

### 6. Políticas de Qualidade e Pronto para Entrega

Uma task de migração só pode ser concluída quando:

1. Requisito da SPEC associado estiver atendido.
2. Critério de aceite correspondente estiver validado.
3. Nenhuma funcionalidade existente (Guia ou Plataforma) apresentar regressão.
4. Evidência de validação estiver registrada (teste manual ou automatizado).

---

### 7. Gestão de Mudanças

1. Mudanças de escopo da fusão exigem atualização da SPEC antes da implementação.
2. Mudanças estruturais de arquitetura exigem ADR documentado na SPEC.
3. Toda decisão técnica relevante deve ser registrada em linguagem objetiva e verificável.

---

### 8. Política de Exceção

Se houver urgência operacional (ex.: regressão crítica em produção), pode-se aplicar mitigação temporária somente quando:

1. O risco de indisponibilidade for maior que o risco da exceção.
2. Houver registro da exceção, prazo de reversão e task de correção definitiva aberta.

---

### 9. Política de Segurança OWASP (Obrigatória)

1. Todas as entregas devem atender ao OWASP Top 10 vigente e ao baseline OWASP ASVS L1 para aplicações web.
2. Nenhuma funcionalidade segue para entrega com falha de segurança classificada como crítica ou alta.
3. Entradas de usuário devem ser validadas por allowlist; saídas devem ser tratadas para evitar injeção e XSS.
4. Segredos nunca podem ser hard-coded em código, markdown, commits ou arquivos de configuração versionados.

---

### 10. Vigência

Esta constituição entra em vigor imediatamente, aplica-se ao processo de fusão e permanece válida como lei fundamental do repositório `desmistificando-ia` até substituição formal.
