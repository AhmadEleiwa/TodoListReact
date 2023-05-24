import { useRef, useState, FC } from "react";
import Button from "../Button";
import Model from "../Model";
import React from "react";
import "./style.css";
import { useData } from "../../contexts/DataContext";

type CurrentHandler = {
  title:string,
  handler: ()=>void,
}
type Props = {
  groupByAssignee:()=>void,

}
const ControlButtons:FC<Props> = ({groupByAssignee}) => {
  const [modelOpen, setModelOpen] = useState<boolean>(false);

  const dataContext = useData();

  const handler = useRef<CurrentHandler>({ title: "", handler: ()=>{} });

  const markAllHandler = () => {
    const ids = dataContext.data!.map((p) => p._id);

    dataContext.updateTodo!(ids, { status: false });
  };

  const marAsUndone = () => {
    const ids = dataContext.data!.map((p) => p._id);
    dataContext.updateTodo!(ids, { status: true });
  };

  const clearDoneTask = () => {
    let ids: string[] = [];
    for (let i of dataContext.data!) {
      if (i.status === true) {
        ids.push(i._id);
      }
    }
    dataContext.deleteTodo!(ids);
  };
  const clearAll = () => {
    const ids = dataContext.data!.map((p) => p._id);
    dataContext.deleteTodo!(ids);
  };
  const groupByAssigneeHandler = () => {
    groupByAssignee();
  };

  const openHandler = (value:CurrentHandler) => {
    setModelOpen(true);
    handler.current = value;
  };
  return (
    <div className="control-buttons">
      <Button onClick={markAllHandler}>Mark All as Done</Button>
      <Button onClick={marAsUndone}>Mark All as Un-Done</Button>
      <Button
        onClick={() => {
          openHandler({
            title: "Are sure for deleteing all tasks",
            handler: clearDoneTask,
          });
        }}
      >
        Clear Done Tasks
      </Button>
      <Button
        onClick={() => {
          openHandler({
            title: "Are sure for deleteing all tasks",
            handler: clearAll,
          });
        }}
      >
        Clear All Tasks
      </Button>
      <Button onClick={groupByAssigneeHandler}>Group By Assignee</Button>
      <Model
        isOpen={modelOpen}
        conformModel
        submitHandler={handler.current.handler}
        onClose={() => {
          setModelOpen(false);
        }}
      />
    </div>
  );
};

export default ControlButtons;
