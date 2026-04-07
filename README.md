# 🚀 Missão: Calculadora de Derivadas (XP Training)

Este repositório é o seu campo de treinamento para se tornar uma Engenheira de Software. Aqui, usamos **Extreme Programming (XP)**: Eu escrevo os testes (TDD), e você faz o código passar.

## 🎓 Trilha de Aprendizado: Engenharia do Mundo Real

### Fase 1: O "Mundo de Texto" (Fundamentos)
Para o ERP da Envolve, o maior erro é a imprecisão. Aqui você aprenderá:

1. **Tipagem (Type System):** Por que `string` não é `number` e por que `Decimal` é o rei do financeiro.
2. **Paradigmas:**
   - **Imperativo:** "Faça isso, depois aquilo" (O robô burro).
   - **Funcional:** "Dada esta entrada, retorne esta saída" (O matemático puro).
   - **OO (Orientação a Objetos):** "Eu sou um Objeto e sei fazer estas coisas" (O especialista).
3. **Memória:** A diferença entre **Passagem por Valor** (copiar a foto) e **Referência** (dar a chave da casa).

---

## 🛠️ Como Jogar: O Ciclo TDD

1. **Clone o Repositório:** `git clone https://github.com/GabrielAderaldo/calculadora-de-derivadas-xp.git`
2. **Instale as Ferramentas:** `bun install`
3. **Rode o Teste:** `bun test` (Ele vai falhar!)
4. **Codifique:** Abra o arquivo `src/calculadora.ts` e resolva o desafio.
5. **Vença:** Se o teste ficar **VERDE**, você ganhou a missão!

### 🎯 Desafio Atual: `derivarTermo("x^2")`
**Objetivo:** Transformar o texto "x^n" no texto "nx^(n-1)".

> **Dica XP:** No ERP, nunca alteramos o dado original. Nós recebemos o dado, calculamos o novo e retornamos ele. **Imutabilidade** é a nossa maior aliada contra bugs!

---
## 👑 Regra de Ouro da Envolve
*"Código é para humanos lerem e máquinas executarem ocasionalmente."*
Use nomes de variáveis que façam sentido. `expoente` é melhor que `n`. `multiplicador` é melhor que `m`.
