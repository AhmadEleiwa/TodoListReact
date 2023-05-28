import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ControlButtons from ".";

describe("control buttons", () => {
  test("renders buttons element", () => {
    const onClickMock = jest.fn();
    const { container, getByText } = render(
      <ControlButtons groupByAssignee={onClickMock} />
    );
    const controlButtons = container.querySelector(".control-buttons");
    const markAllAsDone = getByText("Mark All as Done");
    const markAllAsUnDone = getByText("Mark All as Un-Done");
    const groupByAssignee = getByText("Group By Assignee");
    const clearDoneTasks = getByText("Clear Done Tasks");
    const clearAllTasks = getByText("Clear All Tasks");

    expect(controlButtons).toBeInTheDocument();
    expect(markAllAsDone).toBeInTheDocument();
    expect(markAllAsUnDone).toBeInTheDocument();
    expect(groupByAssignee).toBeInTheDocument();
    expect(clearDoneTasks).toBeInTheDocument();
    expect(clearAllTasks).toBeInTheDocument();
  });

  test("calls onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <ControlButtons groupByAssignee={onClickMock} />
    );
    const groupByAssignee = getByText("Group By Assignee");

    fireEvent.click(groupByAssignee!);

    expect(onClickMock).toBeCalled();
  });
});
