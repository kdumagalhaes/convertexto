import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ButtonClear from "./ButtonClear";

describe("ButtonClear", () => {
  it("should render the term 'Limpar' in the button", () => {
    render(<ButtonClear />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.textContent).toBe("Limpar");
  });
});