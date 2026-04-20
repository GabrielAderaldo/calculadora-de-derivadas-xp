/**
 * Desafio para a futura Engenheira:
 *
 * Você precisa criar uma função chamada 'derivarTermo'. [x]
 * Ela recebe uma string (ex: "x^2") e deve retornar outra string (ex: "2x").
 *
 * Dicas: "x^n" -> n*x^n-1 ->   n = 2 -> 2*x^2-1 -> 2*x^1 -> 2x
 * 1. Use o método .split('^') para separar o 'x' do número.
 * 2. O expoente (o número que vem depois do ^) vira o multiplicador na frente.
 * 3. O novo expoente será o antigo menos 1.
 */

export function derivarTermo(termo: string): string {
  //["x","^","n"]
  var n = "";
  for (let interator = 0; interator < termo.length; interator++) {
    if (termo[interator] == "^") {
      n = termo[interator + 1];
    }
  }

  let elevado = n - 1;

  return `${n}${termo[0]}^${n - 1}`;
}
