import { describe, it, expect } from "vitest";
import { verifyNumeric, verifyType } from "./pokemonComparison";

describe("verifyNumeric", () => {
  it("retourne 'green' quand les valeurs sont égales", () => {
    expect(verifyNumeric(10, 10)).toBe("green");
  });

  it("retourne 'red higher' quand la valeur cible est plus grande", () => {
    expect(verifyNumeric(5, 10)).toBe("red higher");
  });

  it("retourne 'red lower' quand la valeur cible est plus petite", () => {
    expect(verifyNumeric(15, 10)).toBe("red lower");
  });
});

describe("verifyType", () => {
  const targetTypes = ["fire", "flying"];

  it("retourne 'green' quand le type est au bon emplacement", () => {
    expect(verifyType("fire", 0, targetTypes)).toBe("green");
    expect(verifyType("flying", 1, targetTypes)).toBe("green");
  });

  it("retourne 'yellow' quand le type existe mais au mauvais emplacement", () => {
    expect(verifyType("flying", 0, targetTypes)).toBe("yellow");
  });

  it("retourne 'red' quand le type n'existe pas chez le Pokémon cible", () => {
    expect(verifyType("water", 0, targetTypes)).toBe("red");
  });

  it("retourne 'red' quand le type est undefined", () => {
    expect(verifyType(undefined, 1, targetTypes)).toBe("red");
  });
});
