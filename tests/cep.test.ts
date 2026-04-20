import { describe, test, expect } from "bun:test";
import { validarCEP } from "../src/trilha-estagio/04-cep/cep";

describe("Task 04: Validador de CEP", () => {
  test("aceita CEP com máscara e devolve formatado", () => {
    expect(validarCEP("01310-100")).toBe("01310-100");
  });

  test("aceita CEP sem máscara e devolve formatado", () => {
    expect(validarCEP("01310100")).toBe("01310-100");
  });

  test("aceita outro CEP válido", () => {
    expect(validarCEP("60000-000")).toBe("60000-000");
  });

  test("rejeita CEP com todos zeros", () => {
    expect(validarCEP("00000-000")).toBeNull();
  });

  test("rejeita CEP com todos noves", () => {
    expect(validarCEP("99999-999")).toBeNull();
  });

  test("rejeita CEP com todos os dígitos iguais (1)", () => {
    expect(validarCEP("11111-111")).toBeNull();
  });

  test("rejeita CEP com 7 dígitos", () => {
    expect(validarCEP("1234567")).toBeNull();
  });

  test("rejeita CEP com 9 dígitos", () => {
    expect(validarCEP("123456789")).toBeNull();
  });

  test("rejeita entrada vazia", () => {
    expect(validarCEP("")).toBeNull();
  });

  test("rejeita entrada não numérica", () => {
    expect(validarCEP("abcde-fgh")).toBeNull();
  });

  test("rejeita CEP com letra no meio", () => {
    expect(validarCEP("01310-10X")).toBeNull();
  });
});
