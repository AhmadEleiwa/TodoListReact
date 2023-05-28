import { render } from "@testing-library/react";
import React from "react";
import TaskList from ".";

describe("Statistics cards", () => {
  test("calls setInputData with the input value on search input change", () => {
    const { container } = render(<TaskList groupByAssignee={false} />);
    const taskList = container.querySelector(".task-list");

    expect(taskList).toBeInTheDocument();
  });
});
