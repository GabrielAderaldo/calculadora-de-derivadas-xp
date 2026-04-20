# Task 04 — Validador de CEP

## Contexto

Cadastro de endereço de fornecedor, cliente e empresa usa CEP. Precisamos validar formato e rejeitar CEPs claramente inválidos antes de chamar qualquer API de consulta.

## História

> **Como** usuário do cadastro
> **Quero** que o sistema já rejeite CEPs obviamente errados
> **Para** economizar chamadas à API externa e erros de digitação

## Regras de negócio

1. CEP pode chegar com máscara (`01310-100`) ou sem (`01310100`).
2. Depois de remover o traço, precisa ter exatamente **8 dígitos numéricos**.
3. **Sequências inválidas** que a gente rejeita explicitamente:
   - `"00000000"` (todos zeros)
   - `"99999999"` (todos noves)
   - Qualquer CEP com todos os 8 dígitos iguais
4. **Regiões existentes no Brasil:** o primeiro dígito representa a região (0 a 9 são todos válidos — todas as regiões existem). Não precisa validar região aqui, só formato.
5. Aceita qualquer outro CEP de 8 dígitos como formalmente válido (a validação real de existência é feita pela API depois).

## Saída esperada

A função deve devolver:
- Se válido: CEP **normalizado** no formato `"XXXXX-XXX"` (com máscara padrão)
- Se inválido: sinalize do jeito que preferir (consistente com as escolhas que você fez no Telefone)

## Critérios de aceite

- [ ] Aceita com e sem máscara
- [ ] Retorna CEP formatado com traço
- [ ] Rejeita tamanho errado
- [ ] Rejeita caracteres não numéricos
- [ ] Rejeita sequências de dígitos iguais
- [ ] Testes cobrindo todos os casos

## Casos de teste obrigatórios

| Entrada | Esperado |
|---------|----------|
| `"01310-100"` | válido, retorna `"01310-100"` |
| `"01310100"` | válido, retorna `"01310-100"` |
| `"60000-000"` | válido, retorna `"60000-000"` |
| `"00000-000"` | inválido |
| `"99999-999"` | inválido |
| `"11111-111"` | inválido |
| `"1234567"` | inválido (7 dígitos) |
| `"123456789"` | inválido (9 dígitos) |
| `""` | inválido |
| `"abcde-fgh"` | inválido |
| `"01310-10X"` | inválido |

## Como entregar

1. `cep.ts` + `cep.test.ts`
2. Testes passando
3. Branch `estagio/04-cep` com PR

## Dica

Essa é a mais simples da trilha até agora. É um exercício de **não complicar**. Resolve em 15-20 linhas. Se tá escrevendo 80 linhas, você tá fazendo alguma coisa errada — para e simplifica.

Mas olha o detalhe da **saída formatada**. É a primeira task que pede mais que `true/false`. Pensa: seu validador agora tem **dois comportamentos** — validar e formatar. Isso vai virar conversa depois.

## O que NÃO fazer

- ❌ Não usa regex complexa. `replace(/\D/g, '')` pra limpar e `.length === 8` pra validar tamanho já resolve 80% do problema.
- ❌ Não tenta validar se o CEP existe de verdade (isso é API externa, outro problema)

## Entregáveis

- [ ] `cep.ts` com implementação
- [ ] `cep.test.ts` com casos passando
- [ ] PR em `estagio/04-cep`
- [ ] Sua função é curta e direta (se passou de 40 linhas, refatora antes de abrir PR)
