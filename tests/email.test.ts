import { describe, test, expect } from "bun:test";
import { validarEmail } from "../src/trilha-estagio/05-email/email";

describe("Task 05: Validador de E-mail", () => {
  test("aceita e-mail simples", () => {
    expect(validarEmail("joao@empresa.com")).toBe("joao@empresa.com");
  });

  test("normaliza em minúsculo", () => {
    expect(validarEmail("Joao.Silva@Empresa.COM.BR")).toBe(
      "joao.silva@empresa.com.br",
    );
  });

  test("aceita parte local com '+'", () => {
    expect(validarEmail("user+tag@gmail.com")).toBe("user+tag@gmail.com");
  });

  test("aceita caracteres '_' e '-' na parte local e subdomínio", () => {
    expect(validarEmail("user-name_1@sub.empresa.io")).toBe(
      "user-name_1@sub.empresa.io",
    );
  });

  test("rejeita e-mail sem '@'", () => {
    expect(validarEmail("semarroba.com")).toBeNull();
  });

  test("rejeita e-mail com dois '@'", () => {
    expect(validarEmail("a@b@c.com")).toBeNull();
  });

  test("rejeita parte local vazia", () => {
    expect(validarEmail("@empresa.com")).toBeNull();
  });

  test("rejeita domínio vazio", () => {
    expect(validarEmail("joao@")).toBeNull();
  });

  test("rejeita domínio sem '.'", () => {
    expect(validarEmail("joao@empresa")).toBeNull();
  });

  test("rejeita parte local começando com '.'", () => {
    expect(validarEmail(".joao@empresa.com")).toBeNull();
  });

  test("rejeita parte local terminando com '.'", () => {
    expect(validarEmail("joao.@empresa.com")).toBeNull();
  });

  test("rejeita '..' na parte local", () => {
    expect(validarEmail("joao..silva@empresa.com")).toBeNull();
  });

  test("rejeita '..' no domínio", () => {
    expect(validarEmail("joao@empresa..com")).toBeNull();
  });

  test("rejeita TLD com 1 caractere", () => {
    expect(validarEmail("joao@empresa.c")).toBeNull();
  });

  test("rejeita espaço no meio", () => {
    expect(validarEmail("joao @empresa.com")).toBeNull();
  });

  test("rejeita entrada vazia", () => {
    expect(validarEmail("")).toBeNull();
  });
});
