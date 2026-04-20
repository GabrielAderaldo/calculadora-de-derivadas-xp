import { describe, test, expect } from "bun:test";
import {
  parseDinheiro,
  formatarDinheiro,
  somar,
  subtrair,
  multiplicar,
  igual,
  maiorQue,
} from "../src/trilha-estagio/06-dinheiro/dinheiro";

describe("Task 06: Dinheiro (BRL) — Parsing", () => {
  test('parseia "R$ 1.234,56"', () => {
    expect(parseDinheiro("R$ 1.234,56")).toEqual({ centavos: 123456 });
  });

  test('parseia "1.234,56"', () => {
    expect(parseDinheiro("1.234,56")).toEqual({ centavos: 123456 });
  });

  test('parseia "1234,56"', () => {
    expect(parseDinheiro("1234,56")).toEqual({ centavos: 123456 });
  });

  test('parseia "1234.56"', () => {
    expect(parseDinheiro("1234.56")).toEqual({ centavos: 123456 });
  });

  test('parseia "1234" como valor inteiro em reais', () => {
    expect(parseDinheiro("1234")).toEqual({ centavos: 123400 });
  });

  test('parseia "0,01"', () => {
    expect(parseDinheiro("0,01")).toEqual({ centavos: 1 });
  });

  test('parseia negativo "-R$ 100,00"', () => {
    expect(parseDinheiro("-R$ 100,00")).toEqual({ centavos: -10000 });
  });

  test("parseia number direto 1234.56", () => {
    expect(parseDinheiro(1234.56)).toEqual({ centavos: 123456 });
  });

  test("parseia number zero", () => {
    expect(parseDinheiro(0)).toEqual({ centavos: 0 });
  });

  test('rejeita string inválida "R$abc"', () => {
    expect(parseDinheiro("R$abc")).toBeNull();
  });

  test("rejeita string vazia", () => {
    expect(parseDinheiro("")).toBeNull();
  });

  test('rejeita formato ambíguo "1,234,567"', () => {
    expect(parseDinheiro("1,234,567")).toBeNull();
  });
});

describe("Task 06: Dinheiro (BRL) — Formatação", () => {
  test("0 centavos -> R$ 0,00", () => {
    expect(formatarDinheiro({ centavos: 0 })).toBe("R$ 0,00");
  });

  test("1 centavo -> R$ 0,01", () => {
    expect(formatarDinheiro({ centavos: 1 })).toBe("R$ 0,01");
  });

  test("100 centavos -> R$ 1,00", () => {
    expect(formatarDinheiro({ centavos: 100 })).toBe("R$ 1,00");
  });

  test("123456 centavos -> R$ 1.234,56", () => {
    expect(formatarDinheiro({ centavos: 123456 })).toBe("R$ 1.234,56");
  });

  test("negativo -10000 -> -R$ 100,00", () => {
    expect(formatarDinheiro({ centavos: -10000 })).toBe("-R$ 100,00");
  });

  test("100000000 centavos -> R$ 1.000.000,00", () => {
    expect(formatarDinheiro({ centavos: 100000000 })).toBe("R$ 1.000.000,00");
  });
});

describe("Task 06: Dinheiro (BRL) — Operações", () => {
  test("R$ 10,00 + R$ 5,50 = R$ 15,50", () => {
    const r = somar({ centavos: 1000 }, { centavos: 550 });
    expect(r).toEqual({ centavos: 1550 });
  });

  test("R$ 10,00 - R$ 15,00 = -R$ 5,00", () => {
    const r = subtrair({ centavos: 1000 }, { centavos: 1500 });
    expect(r).toEqual({ centavos: -500 });
  });

  test("R$ 10,00 × 3 = R$ 30,00", () => {
    const r = multiplicar({ centavos: 1000 }, 3);
    expect(r).toEqual({ centavos: 3000 });
  });

  test("R$ 10,00 × 0,1 = R$ 1,00", () => {
    const r = multiplicar({ centavos: 1000 }, 0.1);
    expect(r).toEqual({ centavos: 100 });
  });

  test("o teste famoso: R$ 0,10 + R$ 0,20 = R$ 0,30", () => {
    const r = somar({ centavos: 10 }, { centavos: 20 });
    expect(r).toEqual({ centavos: 30 });
    expect(formatarDinheiro(r)).toBe("R$ 0,30");
  });

  test("imutabilidade: somar não altera os operandos", () => {
    const a = { centavos: 1000 };
    const b = { centavos: 500 };
    somar(a, b);
    expect(a).toEqual({ centavos: 1000 });
    expect(b).toEqual({ centavos: 500 });
  });
});

describe("Task 06: Dinheiro (BRL) — Comparações", () => {
  test("R$ 10,00 igual R$ 10,00", () => {
    expect(igual({ centavos: 1000 }, { centavos: 1000 })).toBe(true);
  });

  test("R$ 10,00 diferente de R$ 10,01", () => {
    expect(igual({ centavos: 1000 }, { centavos: 1001 })).toBe(false);
  });

  test("R$ 10,01 maior que R$ 10,00", () => {
    expect(maiorQue({ centavos: 1001 }, { centavos: 1000 })).toBe(true);
  });

  test("R$ 10,00 não é maior que R$ 10,00", () => {
    expect(maiorQue({ centavos: 1000 }, { centavos: 1000 })).toBe(false);
  });
});
