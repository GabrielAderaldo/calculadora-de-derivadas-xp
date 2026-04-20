# Task 02 — Validador de CNPJ

## Contexto

Do lado pessoa jurídica do ERP, todo fornecedor, cliente e financiador tem CNPJ. Mesmo problema do CPF: se entra CNPJ inválido, trava emissão de nota, conciliação bancária, relatório fiscal. Precisamos da mesma validação robusta.

## História

> **Como** usuário do financeiro
> **Quero** que o sistema rejeite CNPJs inválidos no cadastro
> **Para** que a gente não descubra depois que o fornecedor tem documento errado

## Regras de negócio

1. O CNPJ pode chegar com máscara (`12.345.678/0001-95`) ou sem (`12345678000195`).
2. Depois de limpar pontos, barra e traço, precisa ter exatamente **14 dígitos numéricos**.
3. Os dois últimos dígitos são verificadores — calculados igual ao CPF, mas com pesos diferentes.
4. CNPJ com todos os dígitos iguais é considerado inválido.
5. Entradas vazias, com letras, com tamanho errado são inválidas.

## Algoritmo dos dígitos verificadores

**Primeiro dígito verificador:**
1. Pega os 12 primeiros dígitos.
2. Multiplica pelos pesos `5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2` (nessa ordem).
3. Soma tudo.
4. `resto = soma % 11`.
5. Se `resto < 2`, dígito é `0`. Senão, `11 - resto`.

**Segundo dígito verificador:**
- Mesma coisa, com os 13 primeiros dígitos (incluindo o primeiro verificador) e pesos `6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2`.

## Critérios de aceite

- [ ] Aceita CNPJ com e sem máscara
- [ ] Valida os dois dígitos verificadores
- [ ] Rejeita CNPJ com todos os dígitos iguais
- [ ] Rejeita tamanho errado
- [ ] Rejeita caracteres não numéricos
- [ ] Tem testes cobrindo todos os casos da tabela

## Casos de teste obrigatórios

| Entrada | Esperado | Motivo |
|---------|----------|--------|
| `"11.222.333/0001-81"` | válido | CNPJ real formatado |
| `"11222333000181"` | válido | Mesmo sem máscara |
| `"45.723.174/0001-10"` | válido | Outro CNPJ válido |
| `"11.111.111/1111-11"` | inválido | Todos os dígitos iguais |
| `"00.000.000/0000-00"` | inválido | Todos zeros |
| `"11.222.333/0001-82"` | inválido | Segundo dígito errado |
| `"123"` | inválido | Tamanho errado |
| `""` | inválido | Vazio |
| `"11.222.333/0001-8X"` | inválido | Letra no meio |
| `"112223330001811"` | inválido | 15 dígitos |

## Como entregar

1. Cria `cnpj.ts` e `cnpj.test.ts` (em pasta separada do CPF)
2. Todos os testes da tabela passando com `yarn test cnpj`
3. Branch `estagio/02-cnpj` com PR

## Dica

O algoritmo é quase idêntico ao do CPF. Olha pro código do CPF que você fez, entende o que é parecido e o que muda. Mas, por enquanto, **não tenta reaproveitar código entre CPF e CNPJ**. Implementa do zero, mesmo que pareça cópia. A gente vai falar sobre isso depois que estiver funcionando — tem motivo.

## O que NÃO fazer

- ❌ Não usa lib externa
- ❌ Não pega a resposta pronta na internet
- ❌ Não mexe no arquivo do CPF pra "reutilizar" agora — implementa do zero

## Entregáveis

- [ ] `cnpj.ts` com a implementação
- [ ] `cnpj.test.ts` com todos os casos passando
- [ ] PR na branch `estagio/02-cnpj`
- [ ] Você consegue apontar pra mim, olhando lado a lado, o que o código do CNPJ tem de parecido com o do CPF e o que é diferente
