import { describe, test, expect } from "bun:test";
import { validarCNPJ } from "../src/trilha-estagio/02-cnpj/cnpj";

describe("Task 02: Validador de CNPJ", () => {
  test("aceita CNPJ válido formatado", () => {
    expect(validarCNPJ("11.222.333/0001-81")).toBe(true);
  });

  test("aceita o mesmo CNPJ sem máscara", () => {
    expect(validarCNPJ("11222333000181")).toBe(true);
  });

  test("aceita outro CNPJ válido", () => {
    expect(validarCNPJ("45.723.174/0001-10")).toBe(true);
  });

  test("rejeita CNPJ com todos os dígitos iguais", () => {
    expect(validarCNPJ("11.111.111/1111-11")).toBe(false);
  });

  test("rejeita CNPJ com todos zeros", () => {
    expect(validarCNPJ("00.000.000/0000-00")).toBe(false);
  });

  test("rejeita CNPJ com segundo dígito verificador errado", () => {
    expect(validarCNPJ("11.222.333/0001-82")).toBe(false);
  });

  test("rejeita tamanho errado (curto)", () => {
    expect(validarCNPJ("123")).toBe(false);
  });

  test("rejeita entrada vazia", () => {
    expect(validarCNPJ("")).toBe(false);
  });

  test("rejeita letra no meio dos dígitos", () => {
    expect(validarCNPJ("11.222.333/0001-8X")).toBe(false);
  });

  test("rejeita CNPJ com 15 dígitos", () => {
    expect(validarCNPJ("112223330001811")).toBe(false);
  });
});
