/**
 * Desafio para a futura Engenheira:
 *
 * Essa é a task mais importante da trilha. NO JAVASCRIPT "0.1 + 0.2 !== 0.3".
 * Se você armazenar dinheiro em float, mais cedo ou mais tarde vai ter bug.
 * A solução: armazena em CENTAVOS (inteiro). "R$ 12,34" -> 1234.
 *
 * O que você precisa implementar:
 *
 *  - parseDinheiro(entrada: string | number): Dinheiro | null
 *      "R$ 1.234,56" -> { centavos: 123456 }
 *      "-R$ 100,00"  -> { centavos: -10000 }
 *      "R$abc"       -> null
 *
 *  - formatarDinheiro(d: Dinheiro): string
 *      { centavos: 123456 } -> "R$ 1.234,56"
 *      { centavos: -10000 } -> "-R$ 100,00"
 *
 *  - somar, subtrair, multiplicar, igual, maiorQue
 *      Operações SEMPRE devolvem NOVO Dinheiro. Nunca modificam o original.
 *
 * Regras críticas:
 * 1. Armazena SEMPRE como inteiro em centavos. Nunca float.
 * 2. Multiplicação por decimal arredonda com Math.round (bancário fica pra depois).
 * 3. Formata à mão — proibido usar Intl.NumberFormat nessa task.
 * 4. Proibido importar lib de dinheiro (dinero.js, big.js, decimal.js).
 *
 * Dicas:
 * 1. Começa pelo parser: só string -> centavos. Testa. Depois number.
 * 2. Depois o formatter (inverso). Testa isolado.
 * 3. Depois as 3 operações. Uma de cada vez.
 * 4. Comparações por último (são as mais simples — só compara centavos).
 * 5. Lembra do teste famoso: R$ 0,10 + R$ 0,20 TEM que dar R$ 0,30.
 */

export type Dinheiro = Readonly<{ centavos: number }>;

export function parseDinheiro(_entrada: string | number): Dinheiro | null {
  // TODO: implementar
  return null;
}

export function formatarDinheiro(_d: Dinheiro): string {
  // TODO: implementar
  return "";
}

export function somar(_a: Dinheiro, _b: Dinheiro): Dinheiro {
  // TODO: implementar
  return { centavos: 0 };
}

export function subtrair(_a: Dinheiro, _b: Dinheiro): Dinheiro {
  // TODO: implementar
  return { centavos: 0 };
}

export function multiplicar(_a: Dinheiro, _quantidade: number): Dinheiro {
  // TODO: implementar
  return { centavos: 0 };
}

export function igual(_a: Dinheiro, _b: Dinheiro): boolean {
  // TODO: implementar
  return false;
}

export function maiorQue(_a: Dinheiro, _b: Dinheiro): boolean {
  // TODO: implementar
  return false;
}
