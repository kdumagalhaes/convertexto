import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import Header from "./Header";

// eslint-disable-next-line max-len
const descriptionText = "Cansado de trocar entre português brasileiroe português europeu manualmente? Apresentamos a solução perfeita: um editor de texto online que converte seus textos instantaneamente!";
describe("Header", () => {
  it("should render title properly", () => {
    render(<Header />);
    const h1Element = screen.getByRole("heading", {level: 1});
    expect(h1Element.textContent).toBe("Convertexto");
  }); 

  it("should render description properly", () => {
    render(<Header />);
    const pElement = screen.getByRole("paragraph");
    expect(pElement.textContent).toBe(descriptionText);
  });
});