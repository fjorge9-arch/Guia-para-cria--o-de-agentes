# AGENTS — Desmistificando IA (Repositório Unificado)

Este repositório utiliza o modelo SDLC orientado por papéis de agente para orquestrar a fusão e a evolução contínua do produto.

---

## Referência de Governança

- **Constituição:** [fusion/CONSTITUICAO.md](fusion/CONSTITUICAO.md) (durante a fusão) → raiz do repo unificado após a conclusão
- **Especificação:** [fusion/SPEC-SDD.md](fusion/SPEC-SDD.md) (durante a fusão) → raiz do repo unificado após a conclusão
- **Backlog:** [fusion/TASKS.md](fusion/TASKS.md) (durante a fusão) → raiz do repo unificado após a conclusão

---

## Modo de Trabalho

1. **Constituição primeiro:** toda decisão estrutural respeita [CONSTITUICAO.md](fusion/CONSTITUICAO.md).
2. **Especificação depois:** toda implementação tem vínculo explícito com um requisito em [SPEC-SDD.md](fusion/SPEC-SDD.md).
3. **Execução orientada por backlog:** cada task em [TASKS.md](fusion/TASKS.md) tem DoD verificável antes de ser fechada.
4. **Gate de segurança:** nenhuma task de fase encerra com vulnerabilidade OWASP crítica/alta em aberto.

---

## Papéis de Agente Adotados

### Requirements Analyst
- **Responsabilidade:** garantir que requisitos, critérios de aceite e não-objetivos estejam completos e sem ambiguidade antes de qualquer implementação.
- **Atuação nesta fusão:** validar que RF1–RF11 e RNF1–RNF8 cobrem todos os aspectos da migração; identificar requisitos faltantes ou conflitantes.

### Software Architect
- **Responsabilidade:** avaliar trade-offs arquiteturais, documentar ADRs e garantir que a estrutura de diretórios e contratos de dados sejam coerentes.
- **Atuação nesta fusão:** decisões sobre estrutura de assets unificados, estratégia de merge git, namespacing de CSS e i18n, contratos de `localStorage`.

### Developer
- **Responsabilidade:** implementar cada task com fidelidade ao DoD, respeitando a stack (HTML/CSS/JS puro) e os guardrails técnicos.
- **Atuação nesta fusão:** execução das Fases 2–5 (importar, unificar assets, adicionar navegação cruzada, corrigir paths).

### Code Reviewer
- **Responsabilidade:** revisar diffs buscando regressões, duplicação residual, paths incorretos, chaves i18n faltantes e violações de segurança.
- **Atuação nesta fusão:** revisão obrigatória dos arquivos `styles.css`, `i18n.js` e `main.js` unificados antes de fechar T04, T05 e T06.

### QA Engineer
- **Responsabilidade:** executar os checklists de validação funcional das Fases 6 e 8, registrar evidências e bloquear tasks com regressão.
- **Atuação nesta fusão:** execução completa dos checklists de T10 e T11; validação de T12 (robots.txt e sitemap); smoke test de T15 em produção.

### Release Engineer
- **Responsabilidade:** garantir que a entrega em produção seja confiável, com HTTPS ativo, redirects configurados e repositórios de origem arquivados corretamente.
- **Atuação nesta fusão:** execução de T15 (GitHub Pages / domínio) e T16 (arquivamento dos repos de origem).

---

## Gates Mínimos de Qualidade

1. Requisito mapeado na SPEC antes de codificar.
2. Task vinculada a requisito funcional ou não funcional da SPEC-SDD.
3. Validação funcional sem regressão crítica nas duas seções (Guia e Plataforma).
4. Evidência de verificação registrada na task (screenshot, nota ou log).
5. **Gate OWASP obrigatório:** sem vulnerabilidade crítica/alta em aberto sem mitigação formal aprovada.
6. **Gate de segredos obrigatório:** zero segredos hard-coded em qualquer artefato versionado.

---

## Restrições Específicas deste Projeto

- Stack obrigatória: HTML, CSS e JavaScript puros — sem framework, bundler ou build step.
- Preservação de histórico git: importação via `git subtree` ou `git merge --allow-unrelated-histories`; sem squash de commits de origem, exceto quando documentado explicitamente na task.
- Conteúdo markdown de lições: migrado sem nenhuma alteração de texto, nome de arquivo ou estrutura de diretório.
- Arquivos `estudos/styles.css` e `estudos/i18n.js`: eliminados somente após confirmar que o arquivo unificado os substitui completamente (T04 e T05 concluídos).
- Repositórios de origem (`Guia-para-criacao-de-agentes` e `Material-de-estudo`): não deletar — apenas arquivar após T15 validado.

---

## Política de Segurança Aplicada

- Aderência obrigatória ao OWASP Top 10 vigente e baseline OWASP ASVS L1.
- Falha de segurança crítica/alta bloqueia entrega da fase até correção ou mitigação aprovada.
- Entradas de usuário validadas por allowlist; saídas tratadas para evitar XSS e injeção.
- Dependências e configurações verificadas antes de qualquer release.
- Nenhum segredo hard-coded em código, markdown, commits ou arquivos de configuração versionados.
