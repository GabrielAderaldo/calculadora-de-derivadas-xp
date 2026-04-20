# Task 01 — Validador de CPF

## Contexto

No nosso ERP, todo fornecedor pessoa física (prestador de serviço, autônomo, MEI) precisa ter CPF cadastrado. Se um CPF inválido entra no sistema, o financeiro não consegue emitir nota, não consegue gerar DARF, e trava tudo. Hoje a validação acontece "no JavaScript do front" e nem sempre funciona — queremos uma validação nossa, no servidor, confiável.

## História

> **Como** usuário do financeiro
> **Quero** que o sistema rejeite CPFs inválidos no momento do cadastro
> **Para** que eu não descubra o problema só quando for emitir uma nota fiscal

## Regras de negócio

1. O CPF pode chegar com máscara (`123.456.789-09`) ou sem máscara (`12345678909`).
2. Depois de remover pontos e traço, precisa ter exatamente **11 dígitos numéricos**.
3. Os dois últimos dígitos são verificadores e devem bater com o cálculo oficial da Receita Federal.
4. CPFs com **todos os dígitos iguais** (`111.111.111-11`, `000.000.000-00`, etc.) são matematicamente válidos mas a Receita considera inválidos. Rejeita também.
5. Qualquer entrada vazia, com letras, com tamanho errado, ou com símbolos estranhos é inválida.

## Algoritmo dos dígitos verificadores

**Primeiro dígito verificador:**
1. Pega os 9 primeiros dígitos.
2. Multiplica cada um pelos pesos `10, 9, 8, 7, 6, 5, 4, 3, 2` (na ordem).
3. Soma tudo.
4. Calcula `resto = soma % 11`.
5. Se `resto < 2`, o dígito é `0`. Senão, o dígito é `11 - resto`.

**Segundo dígito verificador:**
- Mesma coisa, mas agora com os **10 primeiros dígitos** (incluindo o primeiro verificador que você acabou de calcular) e pesos `11, 10, 9, 8, 7, 6, 5, 4, 3, 2`.

## Critérios de aceite

- [ ] Aceita CPF com e sem máscara
- [ ] Valida os dois dígitos verificadores corretamente
- [ ] Rejeita CPF com todos os dígitos iguais
- [ ] Rejeita entradas com tamanho diferente de 11 (depois de limpar a máscara)
- [ ] Rejeita entradas com caracteres não numéricos (depois de limpar a máscara)
- [ ] Tem testes cobrindo todos os casos da tabela abaixo

## Casos de teste obrigatórios

| Entrada | Esperado | Motivo |
|---------|----------|--------|
| `"529.982.247-25"` | válido | CPF real bem formatado |
| `"52998224725"` | válido | Mesmo CPF sem máscara |
| `"123.456.789-09"` | válido | Outro CPF válido |
| `"111.111.111-11"` | inválido | Todos os dígitos iguais |
| `"000.000.000-00"` | inválido | Todos zeros |
| `"999.999.999-99"` | inválido | Todos noves |
| `"529.982.247-26"` | inválido | Segundo dígito errado |
| `"123"` | inválido | Tamanho errado |
| `""` | inválido | Vazio |
| `"abc.def.ghi-jk"` | inválido | Não numérico |
| `"529.982.247-2A"` | inválido | Letra no meio |
| `"529982247256"` | inválido | 12 dígitos |

## Como entregar

1. Cria um arquivo `cpf.ts` com a sua implementação
2. Cria um arquivo `cpf.test.ts` com os casos de teste da tabela (usa Jest — já tá no projeto)
3. Roda `yarn test cpf` e garante que está tudo verde
4. Commita numa branch `estagio/01-cpf` e abre PR pra eu revisar

## Dica (se travar)

Começa escrevendo o mais bobo possível: uma função que recebe string e devolve `true` ou `false`. Faz ela passar no primeiro caso (`"529.982.247-25"` → `true`). Depois ataca o próximo caso. **Um de cada vez.**

Não tenta escrever o algoritmo todo de cabeça. Escreve o laço que multiplica os dígitos pelos pesos, testa com `console.log`, e só depois encaixa no resto da função.

## O que NÃO fazer

- ❌ Não instala lib nenhuma (`yarn add` zero)
- ❌ Não copia código pronto do StackOverflow sem entender linha por linha
- ❌ Não tenta resolver todos os 12 casos numa função só de primeira — vai iterando

## Entregáveis

- [ ] `cpf.ts` com a implementação
- [ ] `cpf.test.ts` com os 12 casos da tabela passando
- [ ] Branch `estagio/01-cpf` com PR aberto
- [ ] Consegue me explicar em 2 minutos o que seu código faz
