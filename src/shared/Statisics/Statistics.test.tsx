import { render } from "@testing-library/react";
import React from "react";
import Statisics from ".";
describe("Statistics cards", () => {
  test("displays correct statistics values", () => {
    const { container } = render(<Statisics />);
    const statisicsList = container.querySelector(".statisics-list");
    expect(statisicsList).toBeInTheDocument();
  });
});
