/**
 * Desafio para a futura Engenheira:
 *
 * Você precisa criar uma função chamada 'validarCEP'.
 * Ela recebe uma string (ex: "01310-100" ou "01310100") e devolve:
 *  - Se válido: o CEP NORMALIZADO no formato "XXXXX-XXX"
 *  - Se inválido: null
 *
 * Regras:
 * 1. Aceita com máscara ou sem. Depois de limpar, precisa ter 8 dígitos.
 * 2. Rejeita CEP com todos os dígitos iguais ("00000000", "99999999", "11111111"...).
 * 3. Vazio, letra, tamanho errado = inválido.
 * 4. Não precisa validar região — qualquer primeiro dígito (0-9) serve.
 *
 * Dicas:
 * 1. `entrada.replace(/\D/g, '')` já te dá só os dígitos.
 * 2. `.length === 8` resolve o tamanho.
 * 3. Pra "todos iguais": se o Set dos caracteres tem tamanho 1, é inválido.
 * 4. Formata: `${limpo.slice(0,5)}-${limpo.slice(5)}`.
 *
 * Se passar de 40 linhas, refatora. Essa é a mais simples da trilha.
 */

export function validarCEP(_cep: string): string | null {
  // TODO: implementar
  return null;
}
