import React from "react";
import { render } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  test("renders button with correct text", () => {
    const buttonText = "Click me";
    const { getByText } = render(<Button>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });
});
