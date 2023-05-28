import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchField from ".";

describe("Model component", () => {
  test("renders without errors", () => {
    render(<SearchField />);
  });

  test("calls setSearchText with the input value on search input change", () => {
    const { getByPlaceholderText } = render(<SearchField />);
    const searchInput = getByPlaceholderText("Search TODOs");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput).toHaveValue('test');
  });



});
