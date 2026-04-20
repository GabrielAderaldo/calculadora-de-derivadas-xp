import { describe, test, expect } from "bun:test";
import { validarTelefone } from "../src/trilha-estagio/03-telefone/telefone";

describe("Task 03: Validador de Telefone BR", () => {
  test("aceita celular com máscara completa", () => {
    expect(validarTelefone("(85) 98765-4321")).toEqual({
      ddd: "85",
      numero: "987654321",
      tipo: "celular",
    });
  });

  test("aceita celular só com dígitos", () => {
    expect(validarTelefone("85987654321")).toEqual({
      ddd: "85",
      numero: "987654321",
      tipo: "celular",
    });
  });

  test("aceita celular com +55", () => {
    expect(validarTelefone("+5585987654321")).toEqual({
      ddd: "85",
      numero: "987654321",
      tipo: "celular",
    });
  });

  test("aceita celular com +55 e máscara", () => {
    expect(validarTelefone("+55 (85) 98765-4321")).toEqual({
      ddd: "85",
      numero: "987654321",
      tipo: "celular",
    });
  });

  test("aceita fixo com máscara", () => {
    expect(validarTelefone("(11) 3456-7890")).toEqual({
      ddd: "11",
      numero: "34567890",
      tipo: "fixo",
    });
  });

  test("aceita fixo sem máscara", () => {
    expect(validarTelefone("1134567890")).toEqual({
      ddd: "11",
      numero: "34567890",
      tipo: "fixo",
    });
  });

  test("rejeita celular sem o 9 (10 dígitos + aparência de celular)", () => {
    expect(validarTelefone("(85) 87654321")).toBeNull();
  });

  test("rejeita celular com 10 dígitos sem o 9", () => {
    expect(validarTelefone("(85) 8765-4321")).toBeNull();
  });

  test("rejeita fixo começando com 1", () => {
    expect(validarTelefone("(85) 1234-5678")).toBeNull();
  });

  test("rejeita fixo começando com 0", () => {
    expect(validarTelefone("(85) 0234-5678")).toBeNull();
  });

  test("rejeita DDD menor que 11", () => {
    expect(validarTelefone("(05) 98765-4321")).toBeNull();
  });

  test("rejeita número sem DDD", () => {
    expect(validarTelefone("98765-4321")).toBeNull();
  });

  test("rejeita entrada vazia", () => {
    expect(validarTelefone("")).toBeNull();
  });

  test("rejeita entrada não numérica", () => {
    expect(validarTelefone("abc")).toBeNull();
  });
});
