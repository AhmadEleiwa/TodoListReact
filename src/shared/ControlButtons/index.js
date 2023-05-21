import { useRef, useState } from "react";
import Button from "../Button";
import Model from "../Model";

import "./style.css";
import { useData } from "../../contexts/DataContext";

const ControlButtons = (props) => {
  const [modelOpen, setModelOpen] = useState(false);

  const dataContext = useData();

  const handler = useRef({ title: "", handler: null });

  const markAllHandler = () => {
    const ids = dataContext.data.map(p => p._id)

    dataContext.updateTodo(ids, {status:false});
  };

  const marAsUndone = () => {
    const ids = dataContext.data.map(p => p._id)
    dataContext.updateTodo(ids,{status:true});
  };

  const clearDoneTask = () => {
    let ids = []
    for(let i of dataContext.data){
      if(i.status === true){
        ids.push(i._id)
      }
    }
    dataContext.deleteTodo(ids);
  };
  const clearAll = () => {
    dataContext.deleteTodo(dataContext.data);
  };
  const groupByAssignee = () => {
    props.groupByAssignee();
  };

  const openHandler = (value) => {
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
      <Button onClick={groupByAssignee}>Group By Assignee</Button>
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
