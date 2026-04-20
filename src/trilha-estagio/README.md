# Trilha de Estágio — Value Objects Brasileiros

Bem-vindo! Essa trilha é uma sequência de pequenas tasks, no estilo de histórias de usuário de XP, pra você treinar três coisas que aparecem todo dia no backend de um ERP financeiro:

1. **Laços de repetição** — percorrer dígitos, caracteres, listas
2. **Manipulação de strings** — limpar, cortar, formatar, comparar
3. **Lógica de decisão composta** — múltiplas condições encadeadas

Cada task é um "objeto de valor" — um tipo de dado do nosso domínio (CPF, CNPJ, Telefone, CEP, E-mail, Dinheiro) que precisa ser validado antes de entrar no sistema.

---

## Como funciona a trilha

1. Lê o `TASK.md` da próxima pasta em ordem numérica
2. Implementa **do jeito que você souber** — a primeira versão é pra soltar a mão, não pra ficar perfeita
3. Escreve testes cobrindo os exemplos da task
4. Roda os testes e me chama pra revisar
5. Depois que aprovo a primeira versão, vou pedir pequenas mudanças — é aí que a coisa fica interessante

---

## Regras do jogo

- **Sem lib de validação pronta.** Nada de `cpf-cnpj-validator`, `validator.js`, nem `yup`. Quero ver você pensando.
- **TypeScript puro.** Não precisa de NestJS, não precisa de banco, não precisa de Docker. Um arquivo `.ts` com a implementação e outro `.test.ts` com os testes já servem.
- **Testes obrigatórios.** Mínimo: todos os casos da tabela da task. Ideal: alguns que você inventar.
- **Escreve teste primeiro se conseguir.** Se não conseguir, escreve o código primeiro e depois o teste. O importante é os dois existirem no final.
- **Se travar 30 minutos, me chama.** Não fica duas horas preso.

---

## Ordem da trilha

| # | VO | Foco principal |
|---|-----|----|
| 01 | CPF | Laço de repetição + dígito verificador |
| 02 | CNPJ | Reforça o laço com pesos diferentes |
| 03 | Telefone BR | Múltiplos formatos, ramificações |
| 04 | CEP | Formato + faixas |
| 05 | E-mail | Decomposição de string em partes |
| 06 | Dinheiro (BRL) | Parsing e aritmética segura |

Depois dessas 6 a gente conversa sobre próximos passos.

---

## O que esperar

No começo parece que cada task é só "valida essa string aí". Mas conforme você avança, vou pedir mudanças que vão fazer o código antigo doer — duplicação aparecendo em três lugares, testes quebrando quando muda a regra, código que funciona mas ninguém entende. É proposital. É assim que se sente na pele por que certos padrões existem.

Não se preocupa em acertar o "jeito certo" na primeira. Se preocupa em entregar **funcionando** e com **testes passando**. O resto a gente lapida junto.

Boa trilha.
