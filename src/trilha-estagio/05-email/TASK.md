# Task 05 — Validador de E-mail

## Contexto

Cadastro de usuário, fornecedor, colaborador — todo mundo tem e-mail. Hoje o sistema aceita qualquer string com `@` e depois dá pau quando o envio de e-mail falha. Queremos uma validação razoável (nem perfeita, nem ingênua).

## História

> **Como** usuário
> **Quero** que o sistema me avise na hora quando digito um e-mail claramente errado
> **Para** não descobrir depois que a notificação nunca foi enviada

## Regras de negócio

1. E-mail tem exatamente **um `@`** separando **parte local** e **domínio**.
2. **Parte local** (antes do `@`):
   - Não vazia
   - Permitidos: letras (a-z, A-Z), dígitos (0-9), e os caracteres `.`, `_`, `-`, `+`
   - Não pode começar nem terminar com `.`
   - Não pode ter dois `.` seguidos
3. **Domínio** (depois do `@`):
   - Não vazio
   - Tem pelo menos um `.` (ex: `empresa.com`, `empresa.com.br`)
   - Cada "pedaço" separado por `.` tem que ter pelo menos 1 caractere
   - O último pedaço (TLD) tem pelo menos 2 caracteres (ex: `com`, `br`, `io`)
   - Permitidos no domínio: letras, dígitos, `-` (mas `-` não pode estar no começo ou fim de um pedaço)
4. Tudo case-insensitive (a.b@C.D é igual a A.B@c.d). Pra normalizar, converte tudo pra minúsculo antes.
5. Espaço em qualquer lugar = inválido.

## Saída esperada

- Se válido: devolve o e-mail **normalizado em minúsculo**
- Se inválido: sinaliza (consistente com Telefone/CEP)

## Critérios de aceite

- [ ] Valida as regras da parte local e do domínio
- [ ] Normaliza em minúsculo
- [ ] Rejeita espaços
- [ ] Rejeita e-mails com zero ou dois `@`
- [ ] Testes cobrindo todos os casos

## Casos de teste obrigatórios

| Entrada | Esperado |
|---------|----------|
| `"joao@empresa.com"` | válido, retorna `"joao@empresa.com"` |
| `"Joao.Silva@Empresa.COM.BR"` | válido, retorna `"joao.silva@empresa.com.br"` |
| `"user+tag@gmail.com"` | válido |
| `"user-name_1@sub.empresa.io"` | válido |
| `"semarroba.com"` | inválido (sem `@`) |
| `"a@b@c.com"` | inválido (dois `@`) |
| `"@empresa.com"` | inválido (parte local vazia) |
| `"joao@"` | inválido (domínio vazio) |
| `"joao@empresa"` | inválido (domínio sem `.`) |
| `".joao@empresa.com"` | inválido (começa com `.`) |
| `"joao.@empresa.com"` | inválido (termina com `.`) |
| `"joao..silva@empresa.com"` | inválido (`..`) |
| `"joao@empresa..com"` | inválido (`..` no domínio) |
| `"joao@empresa.c"` | inválido (TLD com 1 char) |
| `"joao @empresa.com"` | inválido (espaço) |
| `""` | inválido |

## Como entregar

1. `email.ts` + `email.test.ts`
2. Testes passando
3. Branch `estagio/05-email` com PR

## Dica

Não cai na armadilha de tentar fazer uma regex gigante. Quebra em etapas:
1. Verifica que tem exatamente um `@`
2. Split: `[local, domain] = entrada.split('@')`
3. Valida a parte local (pode ser outra função)
4. Valida o domínio (pode ser outra função)
5. Se tudo passou, retorna normalizado

Pequenas funções, cada uma testável isoladamente. Se tá difícil testar, é porque tá grande demais.

## O que NÃO fazer

- ❌ Regex de 80 caracteres "definitiva do RFC 5322" — isso existe mas é pesadelo, não usa
- ❌ Tentar validar se o domínio existe de verdade (DNS é outro problema)
- ❌ Aceitar IPs no domínio (`user@[192.168.0.1]`) — ignora esse caso, não faz parte do escopo

## Entregáveis

- [ ] `email.ts` com implementação dividida em funções pequenas
- [ ] `email.test.ts` com todos os casos passando
- [ ] PR em `estagio/05-email`
- [ ] Se eu pedir pra você adicionar "e-mail não pode ser de provedor descartável" depois, seu código aguenta sem reescrever do zero?
