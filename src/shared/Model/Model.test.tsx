import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Model from ".";

describe("Model component", () => {
  test("renders without errors", () => {
    render(<Model />);
  });

  test("calls onClose when black-drop is clicked", () => {
    const onCloseMock = jest.fn();
    const { container } = render(<Model isOpen={true} onClose={onCloseMock} />);
    const blackDrop = container.querySelector(".black-drop");
    fireEvent.click(blackDrop!);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });


  test("renders conform model when confroModel checked", () => {
    const onCloseMock = jest.fn();
    const { container } = render(<Model isOpen={true} conformModel={true} onClose={onCloseMock} />);
    const conformModel = container.querySelector("#conformModel");

    expect(conformModel).toBeInTheDocument();
  });

  test("renders addTaskModel mode when confroModel unchecked", () => {
    const onCloseMock = jest.fn();
    const { container } = render(<Model isOpen={true} conformModel={false} onClose={onCloseMock} />);
    const addTaskModel = container.querySelector("#addTaskModel");

    expect(addTaskModel).toBeInTheDocument();
  });


});
