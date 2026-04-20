/**
 * Desafio para a futura Engenheira:
 *
 * Você precisa criar uma função chamada 'validarTelefone'.
 * Ela recebe uma string (ex: "(85) 98765-4321") e devolve:
 *  - Se válido: { ddd, numero, tipo: "celular" | "fixo" }
 *  - Se inválido: null
 *
 * Regras:
 * 1. Aceita parênteses, espaço, traço, "+55" no começo.
 * 2. Limpa tudo que não for dígito.
 * 3. Se vier com 12 ou 13 dígitos começando com "55", remove os dois primeiros.
 * 4. 11 dígitos = celular. O 3º dígito (depois do DDD) TEM que ser "9".
 * 5. 10 dígitos = fixo. O 3º dígito NÃO pode ser "0" nem "1".
 * 6. DDD entre 11 e 99.
 * 7. Qualquer outro tamanho ou formato = inválido (null).
 *
 * Dicas:
 * 1. Escreve primeiro uma função que só LIMPA a string e testa ela.
 * 2. Depois, uma função que CLASSIFICA o tamanho (10 vs 11).
 * 3. No final, junta tudo com um switch/if em cima do tamanho.
 * 4. Evita ifs gigantes aninhados — quebra em funções pequenas.
 */

export type Telefone = Readonly<{
  ddd: string;
  numero: string;
  tipo: "celular" | "fixo";
}>;

export function validarTelefone(_entrada: string): Telefone | null {
  // TODO: implementar
  return null;
}
