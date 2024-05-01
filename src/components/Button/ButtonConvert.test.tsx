import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ButtonConvert from "./ButtonConvert";

describe("ButtonConvert", () => {
  it("should render the term 'Converter' in the button", () => {
    render(<ButtonConvert />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.textContent).toBe("Converter");
  });
});