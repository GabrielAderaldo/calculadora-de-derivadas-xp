/**
 * Desafio para a futura Engenheira:
 *
 * Você precisa criar uma função chamada 'validarEmail'.
 * Ela recebe uma string (ex: "joao@empresa.com") e devolve:
 *  - Se válido: o e-mail NORMALIZADO em minúsculo
 *  - Se inválido: null
 *
 * Regras:
 * 1. Tem que ter exatamente UM "@" separando parte local e domínio.
 * 2. Parte local (antes do @):
 *    - Não vazia
 *    - Só letras, dígitos e os caracteres ".", "_", "-", "+"
 *    - Não começa nem termina com "."
 *    - Não tem ".." (dois pontos seguidos)
 * 3. Domínio (depois do @):
 *    - Não vazio
 *    - Tem pelo menos um "."
 *    - Cada pedaço separado por "." tem >= 1 caractere
 *    - Último pedaço (TLD) tem >= 2 caracteres
 *    - Só letras, dígitos e "-" (e "-" não fica no começo/fim de um pedaço)
 * 4. Espaço em qualquer lugar = inválido.
 * 5. Normaliza em minúsculo antes de devolver.
 *
 * Dicas:
 * 1. NÃO tenta fazer uma regex gigante. Quebra em passos.
 * 2. `const [local, dominio] = entrada.split('@')` — mas cuidado se vierem 2 "@".
 * 3. Escreve funções pequenas: `ehLocalValido(local)`, `ehDominioValido(dom)`.
 * 4. Cada função testável isolada. Se tá difícil de testar, tá grande demais.
 */

export function validarEmail(_email: string): string | null {
  // TODO: implementar
  return null;
}
