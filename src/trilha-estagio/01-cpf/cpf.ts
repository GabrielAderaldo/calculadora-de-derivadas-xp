/**
 * Desafio para a futura Engenheira:
 *
 * Você precisa criar uma função chamada 'validarCPF'.
 * Ela recebe uma string (ex: "529.982.247-25") e devolve true/false.
 *
 * Regras:
 * 1. Aceita com máscara ("529.982.247-25") ou sem ("52998224725").
 * 2. Depois de limpar, precisa ter 11 dígitos numéricos.
 * 3. Os 2 últimos são dígitos verificadores (calcula e compara).
 * 4. CPF com todos os dígitos iguais (ex: "111.111.111-11") é inválido.
 * 5. Qualquer coisa estranha (vazio, letra, tamanho errado) é inválido.
 *
 * Dicas:
 * 1. Primeiro limpa a string: remove tudo que não for dígito.
 * 2. Monta um laço que multiplica cada dígito pelo peso (10,9,8,...) e soma.
 * 3. resto = soma % 11. Se resto < 2, dígito = 0. Senão, dígito = 11 - resto.
 * 4. Faz o primeiro dígito. Depois repete para o segundo com pesos (11,10,9,...).
 * 5. Compara os dois dígitos calculados com os dois últimos da string.
 */

export function validarCPF(_cpf: string): boolean {
  // TODO: implementar
  return false;
}
