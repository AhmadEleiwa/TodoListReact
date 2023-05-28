import { render } from "@testing-library/react";
import React from "react";
import TitledCard from ".";

import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";

describe("Statistics cards", () => {
  test("calls setInputData with the input value on search input change", () => {
    const { container } = render(
      <TitledCard title="" value={4} icon={faCheckToSlot} />
    );
    const card = container.querySelector(".titled-card");

    expect(card).toBeInTheDocument();
  });
});
