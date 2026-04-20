# Task 06 — Valor Monetário (BRL)

## Contexto

Essa é a task mais importante da trilha. No ERP financeiro, trabalhar com dinheiro usando `number` do JavaScript é receita pra bug. `0.1 + 0.2 !== 0.3` não é piada, é realidade — e quando acontece numa fatura de R$ 10.000,00 vira prejuízo real.

A gente quer um tipo que:
- Entenda strings em formato brasileiro (`"R$ 1.234,56"`)
- Armazene internamente em **centavos** (número inteiro) pra evitar erro de ponto flutuante
- Permita somar, subtrair, multiplicar por quantidade, comparar
- Formate de volta pra string brasileira pra mostrar na tela

## História

> **Como** contador
> **Quero** que qualquer cálculo financeiro no sistema seja exato até o último centavo
> **Para** não ter que explicar pro cliente por que a soma de 10 parcelas deu R$ 99,99 em vez de R$ 100,00

## Regras de negócio

### Parsing (entrada de string)

1. Aceita formatos: `"R$ 1.234,56"`, `"1.234,56"`, `"1234,56"`, `"1234.56"`, `"1234"`, `"0,01"`
2. Aceita também `number` diretamente (`1234.56` → 123456 centavos)
3. Rejeita strings com formato inválido (`"R$abc"`, `""`, `"1,234,567"`)
4. Armazena internamente como **inteiro em centavos**: `R$ 12,34` → `1234`
5. Suporta valores negativos: `"-R$ 100,00"` ou `"R$ -100,00"` → `-10000` centavos (débito)

### Operações

1. **Somar** dois valores → novo valor
2. **Subtrair** dois valores → novo valor (pode dar negativo)
3. **Multiplicar por quantidade** (inteiro ou decimal): `R$ 10,00 × 3 = R$ 30,00`
   - Multiplicação por decimal arredonda pra 2 casas usando **arredondamento bancário** (se tiver `0,5` no final, arredonda pro par mais próximo — mas pra simplificar nessa versão, pode usar `Math.round` normal e deixa o bancário como tarefa futura)
4. **Comparar** dois valores: `igual`, `maior`, `menor`, `maiorOuIgual`, `menorOuIgual`
5. Operações nunca modificam o valor original — sempre devolvem um **novo** valor (imutabilidade)

### Formatação (saída)

1. `formatar()` devolve `"R$ 1.234,56"`
2. Negativos ficam `"-R$ 1.234,56"` (sinal antes do `R$`)
3. Zero fica `"R$ 0,00"`

## Saída esperada

Você vai precisar de mais que uma função dessa vez. Sugestão de API (sinta-se livre pra mudar):

```ts
// criar
const valor = Dinheiro.de("R$ 1.234,56");   // parse
const zero = Dinheiro.zero();                // fábrica auxiliar
const direto = Dinheiro.deCentavos(1234);    // sem parsing

// operações (retornam novo Dinheiro)
const total = valor.somar(outro);
const descontado = valor.subtrair(outro);
const triplo = valor.multiplicar(3);

// comparação
valor.igual(outro);    // boolean
valor.maiorQue(outro); // boolean

// saída
valor.formatar();   // "R$ 1.234,56"
valor.centavos;     // 123456 (número)
```

Mas você pode fazer com funções puras se preferir. O importante é o **comportamento**, não a forma.

## Critérios de aceite

- [ ] Parse de todos os formatos da lista
- [ ] Armazenamento em centavos (inteiro)
- [ ] Soma, subtração, multiplicação corretas
- [ ] Comparações corretas
- [ ] Formatação BR correta (ponto de milhar, vírgula decimal, `R$`)
- [ ] Imutabilidade: operações não mudam o valor original
- [ ] Rejeita entradas inválidas
- [ ] Testes cobrindo todos os casos abaixo

## Casos de teste obrigatórios

### Parsing

| Entrada | Centavos esperados |
|---------|---------------------|
| `"R$ 1.234,56"` | 123456 |
| `"1.234,56"` | 123456 |
| `"1234,56"` | 123456 |
| `"1234.56"` | 123456 |
| `"1234"` | 123400 |
| `"0,01"` | 1 |
| `"-R$ 100,00"` | -10000 |
| `1234.56` (number) | 123456 |
| `0` (number) | 0 |
| `"R$abc"` | inválido |
| `""` | inválido |
| `"1,234,567"` | inválido |

### Operações

| Operação | Esperado |
|----------|----------|
| `R$ 10,00 + R$ 5,50` | `R$ 15,50` |
| `R$ 10,00 - R$ 15,00` | `-R$ 5,00` |
| `R$ 10,00 × 3` | `R$ 30,00` |
| `R$ 10,00 × 0,1` | `R$ 1,00` |
| `R$ 0,10 + R$ 0,20` | `R$ 0,30` (**o teste famoso**) |
| `R$ 10,00 == R$ 10,00` | `true` |
| `R$ 10,01 > R$ 10,00` | `true` |

### Formatação

| Centavos | Saída |
|----------|-------|
| 0 | `"R$ 0,00"` |
| 1 | `"R$ 0,01"` |
| 100 | `"R$ 1,00"` |
| 123456 | `"R$ 1.234,56"` |
| -10000 | `"-R$ 100,00"` |
| 100000000 | `"R$ 1.000.000,00"` |

## Como entregar

1. `dinheiro.ts` + `dinheiro.test.ts`
2. Todos os testes passando — **incluindo obrigatoriamente o teste `R$ 0,10 + R$ 0,20 === R$ 0,30`**
3. Branch `estagio/06-dinheiro` com PR
4. No PR, escreve um parágrafo explicando **por que usar centavos em inteiro é melhor que usar `number` float**

## Dica

Essa tem bastante código. Quebra em partes pequenas e testa cada uma:
1. **Parser** (string → centavos): escreve e testa antes de pensar em qualquer outra coisa
2. **Formatter** (centavos → string): escreve e testa isoladamente
3. **Operações**: uma de cada vez, teste pra cada
4. **Comparações**: simples, deixa por último

Se você criar um objeto (classe, factory, o que preferir), lembra que **operações devem devolver novo objeto, não modificar o atual**. Isso é regra do jogo, não sugestão.

## O que NÃO fazer

- ❌ **NUNCA** armazenar como float. `this.valor = 12.34` é proibido. Tem que ser inteiro em centavos.
- ❌ Não usa `Intl.NumberFormat` nessa task — escreve o formatter à mão (ganho de aprendizado). Em produção a gente usaria `Intl`, mas aqui o foco é exercitar manipulação de string.
- ❌ Não importa lib de dinheiro (`dinero.js`, `big.js`, `decimal.js`). A gente saber fazer à mão é o ponto.

## Entregáveis

- [ ] `dinheiro.ts` com parsing, formatação, 4 operações, comparações
- [ ] `dinheiro.test.ts` com todos os casos passando
- [ ] PR em `estagio/06-dinheiro` com explicação sobre centavos vs float
- [ ] Você consegue me explicar, sem slides, por que `0.1 + 0.2 !== 0.3` em JavaScript
