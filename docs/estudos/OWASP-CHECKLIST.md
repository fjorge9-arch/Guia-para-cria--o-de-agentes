## OWASP Security Checklist - Release Gate

Checklist obrigatorio para liberar qualquer versao do projeto.

### A. Top 10 (aplicavel)
1. A01 Broken Access Control
- [ ] Controles de autorizacao aplicados por acao sensivel.
- [ ] Falhas de privilegio horizontal/vertical testadas.

2. A02 Cryptographic Failures
- [ ] Dados sensiveis em transito protegidos.
- [ ] Nenhum segredo em texto puro em artefato versionado.

3. A03 Injection
- [ ] Entradas validadas por allowlist.
- [ ] Saidas tratadas para evitar injecao em contexto HTML/JS.

4. A04 Insecure Design
- [ ] Ameaças principais identificadas para fluxos criticos.
- [ ] Mitigacoes documentadas na SPEC/Tasks.

5. A05 Security Misconfiguration
- [ ] Configuracoes seguras por padrao.
- [ ] Modo debug/desenvolvimento nao exposto em release.

6. A06 Vulnerable and Outdated Components
- [ ] Dependencias analisadas para CVEs.
- [ ] Sem CVE critica/alta aberta sem mitigacao formal.

7. A07 Identification and Authentication Failures
- [ ] Sessao e autenticacao com expiracao adequada.
- [ ] Fluxos de login/logout e revogacao testados.

8. A08 Software and Data Integrity Failures
- [ ] Artefatos de build/versionamento controlados.
- [ ] Integridade de dados de sync validada.

9. A09 Security Logging and Monitoring Failures
- [ ] Erros de auth/sync/seguranca registrados.
- [ ] Eventos relevantes com contexto minimo para investigacao.

10. A10 Server-Side Request Forgery (quando aplicavel)
- [ ] Validacao de destinos remotos em chamadas server-side.
- [ ] Nenhum endpoint interno exposto indevidamente.

### B. ASVS L1 Baseline
- [ ] Requisitos aplicaveis do ASVS L1 revisados.
- [ ] Evidencias anexadas por requisito aplicado.

### C. Secrets Policy
- [ ] Chaves/tokens/senhas ausentes de codigo e markdown.
- [ ] Segredos mantidos apenas em mecanismo seguro de runtime.

### D. Evidencias Minimas da Release
- [ ] Data da verificacao.
- [ ] Responsavel pela verificacao.
- [ ] Resultado final: APROVADO ou BLOQUEADO.
- [ ] Riscos aceitos formalmente (se houver).

### E. Regra de Bloqueio
A release fica BLOQUEADA se qualquer item critico de seguranca estiver pendente sem mitigacao formal aprovada.
