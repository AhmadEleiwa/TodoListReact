import { fireEvent, render } from "@testing-library/react";
import React from "react";
import TaskCard from ".";
describe("Statistics cards", () => {

  test("calls setInputData with the input value on search input change", () => {
    const { container } = render(
      <TaskCard
        _id=""
        title=""
        assignee=""
        taskEnable
        inputEnable
        setIndexHandler={()=>{}}
      />
    );
    const inputEle = container.querySelector("input");

    fireEvent.change(inputEle!, {target:{value:'test'}})
    expect(inputEle).toHaveValue('test');
  });

  test("check if the input is disabled", () => {
    const { container } = render(
      <TaskCard
        _id=""
        title=""
        assignee=""
        taskEnable
        inputEnable={true}
        setIndexHandler={()=>{}}
      />
    );
    const inputEle = container.querySelector("input");
    expect(inputEle).toBeDisabled();
  });


});
