import { describe, test, expect } from "bun:test";
import { validarCPF } from "../src/trilha-estagio/01-cpf/cpf";

describe("Task 01: Validador de CPF", () => {
  test("aceita CPF válido com máscara", () => {
    expect(validarCPF("529.982.247-25")).toBe(true);
  });

  test("aceita o mesmo CPF sem máscara", () => {
    expect(validarCPF("52998224725")).toBe(true);
  });

  test("aceita outro CPF válido", () => {
    expect(validarCPF("123.456.789-09")).toBe(true);
  });

  test("rejeita CPF com todos os dígitos iguais (1)", () => {
    expect(validarCPF("111.111.111-11")).toBe(false);
  });

  test("rejeita CPF com todos zeros", () => {
    expect(validarCPF("000.000.000-00")).toBe(false);
  });

  test("rejeita CPF com todos noves", () => {
    expect(validarCPF("999.999.999-99")).toBe(false);
  });

  test("rejeita CPF com segundo dígito verificador errado", () => {
    expect(validarCPF("529.982.247-26")).toBe(false);
  });

  test("rejeita CPF com tamanho errado (curto)", () => {
    expect(validarCPF("123")).toBe(false);
  });

  test("rejeita entrada vazia", () => {
    expect(validarCPF("")).toBe(false);
  });

  test("rejeita entrada não numérica", () => {
    expect(validarCPF("abc.def.ghi-jk")).toBe(false);
  });

  test("rejeita letra no meio dos dígitos", () => {
    expect(validarCPF("529.982.247-2A")).toBe(false);
  });

  test("rejeita CPF com 12 dígitos", () => {
    expect(validarCPF("529982247256")).toBe(false);
  });
});
