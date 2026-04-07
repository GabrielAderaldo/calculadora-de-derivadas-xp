import { describe, test, expect } from "bun:test";
import { derivarTermo } from "../src/calculadora";

describe("Fase 1: Regra da Potência Simples", () => {
  test("deve derivar x^2 para 2x", () => {
    const entrada = "x^2";
    const resultadoEsperado = "2x";
    
    expect(derivarTermo(entrada)).toBe(resultadoEsperado);
  });

  test("deve derivar x^3 para 3x^2", () => {
    const entrada = "x^3";
    const resultadoEsperado = "3x^2";
    
    expect(derivarTermo(entrada)).toBe(resultadoEsperado);
  });
});
