/**
 * Desafio para a futura Engenheira:
 *
 * Você precisa criar uma função chamada 'validarCNPJ'.
 * Ela recebe uma string (ex: "11.222.333/0001-81") e devolve true/false.
 *
 * Regras:
 * 1. Aceita com máscara ("11.222.333/0001-81") ou sem ("11222333000181").
 * 2. Depois de limpar, precisa ter 14 dígitos numéricos.
 * 3. Os 2 últimos são dígitos verificadores.
 * 4. CNPJ com todos os dígitos iguais é inválido.
 * 5. Vazio, letra, tamanho errado = inválido.
 *
 * Dicas:
 * 1. Limpa a string (só dígitos).
 * 2. Primeiro dígito: pesos (5,4,3,2,9,8,7,6,5,4,3,2) sobre os 12 primeiros.
 * 3. Segundo dígito: pesos (6,5,4,3,2,9,8,7,6,5,4,3,2) sobre os 13 primeiros.
 * 4. Em ambos: resto = soma % 11. Se resto < 2 -> 0, senão -> 11 - resto.
 * 5. Implementa do zero, mesmo que pareça cópia do CPF. A gente conversa depois.
 */

export function validarCNPJ(_cnpj: string): boolean {
  // TODO: implementar
  return false;
}
