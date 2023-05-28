import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Switch from ".";

describe("Switch", () => {
  test("renders switch element", () => {
    const { getByTestId } = render(<Switch />);
    const switchElement = getByTestId("switch");
    const thumbElement = getByTestId("thumb");

    expect(switchElement).toBeInTheDocument();
    expect(thumbElement).toBeInTheDocument();

  });

});
