# Task 03 — Validador de Telefone Brasileiro

## Contexto

Cadastro de fornecedor e colaborador exige telefone pra contato. O problema é que telefone brasileiro tem N formatos: fixo, celular, com DDD, com `+55`, com parênteses, com traço, só dígitos. A gente precisa aceitar qualquer formato razoável, **normalizar** internamente, e rejeitar o que for inválido.

## História

> **Como** atendente de cadastro
> **Quero** conseguir digitar o telefone do jeito que o cliente me passar
> **Para** que eu não tenha que ficar reformatando manualmente

## Regras de negócio

1. Aceita formatos com qualquer combinação de: parênteses no DDD, espaços, traços, `+55` no começo.
2. Depois de limpar tudo que não é dígito, precisa ter:
   - **11 dígitos** para celular (DDD com 2 + nono dígito `9` + 8 dígitos)
   - **10 dígitos** para fixo (DDD com 2 + 8 dígitos)
   - Se vier com `55` na frente (13 ou 12 dígitos depois de limpar), remove os dois primeiros e valida o resto.
3. **DDD válido:** precisa estar entre `11` e `99`. Não precisa validar DDDs específicos (23, 25, 26 e outros não existem, mas pra essa task ignora).
4. **Nono dígito:** se tem 11 dígitos (celular), o terceiro dígito (logo depois do DDD) **tem que ser `9`**. Se não for, é inválido.
5. **Primeiro dígito do número (fixo):** se tem 10 dígitos, o terceiro dígito **não pode ser `0` nem `1`** (fixos começam de 2 a 5).
6. Entradas com menos de 10 dígitos ou mais de 13 (depois de limpar e antes de remover o `55`) são inválidas.

## Saída esperada

A função não deve só dizer "válido ou inválido". Ela deve:
- Se válido: devolver um objeto com `{ ddd, numero, tipo: "celular" | "fixo" }`
- Se inválido: devolver algo que sinalize erro (do jeito que você preferir — `null`, lança erro, `undefined`, objeto com `erro`. Decide e documenta no README da sua implementação.)

## Critérios de aceite

- [ ] Aceita com máscara, sem máscara, com `+55`, sem `+55`
- [ ] Identifica corretamente celular vs fixo
- [ ] Extrai DDD e número separados
- [ ] Rejeita DDD fora da faixa 11-99
- [ ] Rejeita celular sem o nono dígito
- [ ] Rejeita fixo começando com 0 ou 1
- [ ] Testes cobrindo todos os casos

## Casos de teste obrigatórios

| Entrada | Esperado |
|---------|----------|
| `"(85) 98765-4321"` | válido, celular, DDD 85, número 987654321 |
| `"85987654321"` | válido, celular |
| `"+5585987654321"` | válido, celular |
| `"+55 (85) 98765-4321"` | válido, celular |
| `"(11) 3456-7890"` | válido, fixo, DDD 11, número 34567890 |
| `"1134567890"` | válido, fixo |
| `"(85) 87654321"` | inválido (celular sem o 9) |
| `"(85) 8765-4321"` | inválido (celular sem o 9) |
| `"(85) 1234-5678"` | inválido (fixo começando com 1) |
| `"(85) 0234-5678"` | inválido (fixo começando com 0) |
| `"(05) 98765-4321"` | inválido (DDD menor que 11) |
| `"98765-4321"` | inválido (sem DDD) |
| `""` | inválido |
| `"abc"` | inválido |

## Como entregar

1. `telefone.ts` + `telefone.test.ts`
2. Escreve no topo do `telefone.ts` um comentário curto explicando como você decidiu sinalizar erro
3. Testes passando
4. Branch `estagio/03-telefone` com PR

## Dica

Essa é mais chata que CPF/CNPJ porque tem vários caminhos possíveis. Antes de codar, rabisca no papel: quais são os passos? Algo tipo:
1. Limpa tudo que não é dígito
2. Se começa com `55` e tem 12 ou 13 dígitos no total, remove os dois primeiros
3. Agora olha o tamanho: 10 ou 11?
4. Cada ramo tem sua própria validação

Escreve primeiro a função de "limpar" isoladamente e testa ela. Depois a função de "classificar tipo". Depois junta tudo.

## O que NÃO fazer

- ❌ `if` gigante com 15 condições aninhadas. Se tá ficando assim, quebra em funções menores.
- ❌ Não usa regex complicada que você não entende — prefere código explícito
- ❌ Não valida DDDs específicos (fica simples: `ddd >= 11 && ddd <= 99`)

## Entregáveis

- [ ] `telefone.ts` com a implementação e decisão de erro documentada no topo
- [ ] `telefone.test.ts` com todos os casos passando
- [ ] PR na branch `estagio/03-telefone`
- [ ] Consegue desenhar num papel o fluxo de decisão que seu código segue
