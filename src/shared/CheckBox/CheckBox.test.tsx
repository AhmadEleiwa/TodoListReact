import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckBox from ".";

describe("CheckBox", () => {
  test("renders unchecked CheckBox", () => {
    const { container } = render(
      <CheckBox onClick={jest.fn()} checked={false} />
    );
    const checkBoxElement = container.querySelector(".empty-cricle");
    expect(checkBoxElement).toBeInTheDocument();
  });

  test("renders checked CheckBox", () => {
    const { container } = render(
      <CheckBox onClick={jest.fn()} checked={true} />
    );
    const checkBoxElement = container.querySelector("svg");
    expect(checkBoxElement).toBeInTheDocument();
  });

  test("calls onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const { container } = render(
      <CheckBox onClick={onClickMock} checked={false} />
    );
    const checkBoxElement = container.querySelector(".empty-cricle");
    fireEvent.click(checkBoxElement!);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
