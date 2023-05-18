import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CheckBox from "../CheckBox";
import Model from "../Model";

import "./style.css";
import { useData } from "../../contexts/DataContext";
import { useTheme } from "../../contexts/Theme";

const TaskCard = (props) => {
  const [inputData, setInputData] = useState();
  const [modelOpen, setModelOpen] = useState(false);

  const theme = useTheme();
  const { data, updateTodo, deleteTodo } = useData();

  const editTask = (e) => {
    const item = data.find((p) => p._id === props.id);
    updateTodo([{ ...item, title: inputData }]);
    console.log(inputData)
  };
  const taskCheckHandler = (e) => {
    const item = data.find((p) => p._id === props.id);
    updateTodo([{ ...item, status: !item.status }]);
  };
  return (
    <div
      className="task-card"
      style={{
        backgroundColor: props.taskEnable
          ? theme.pallete.disabled
          : theme.pallete.paper,
        boxShadow: `0 2px 8px 0 ${theme.pallete.dropShadow}`,
      }}
    >
      <CheckBox onClick={taskCheckHandler} checked={props.taskEnable} />
      <div className="task-body">
        <input
          onKeyDown={(e) => {
            console.log(e.key);
            if (e.key === "Enter") {
              console.log("enter");
              editTask();
              props.setIndexHandler(-1);
            }
          }}
          style={{
            color: theme.pallete.main,
            border: `1px solid ${theme.pallete.paperBorder}`,
            textDecoration: props.taskEnable ? "line-through" : "none",
          }}
          onInput={(e)=>setInputData(e.target.value)}
          disabled={props.inputEnable}
          defaultValue={props.value}
        />
        <p style={{ color: theme.pallete.textSecondary }}>{props.assignee}</p>
      </div>
      <div className="control">
        <FontAwesomeIcon
          icon={faEdit}
          onClick={() => {
            props.setIndexHandler(props.id);
            
          }}
          color={
            !props.taskEnable
              ? theme.pallete.main
              : theme.pallete.buttonDisabled
          }
        />
        <FontAwesomeIcon
          onClick={() => {
            setModelOpen(true);
          }}
          icon={faTrash}
          color={"red"}
        />
      </div>
      <Model
        isOpen={modelOpen}
        conformModel
        submitHandler={() => {
          deleteTodo([props.id]);
        }}
        onClose={() => {
          setModelOpen(false);
        }}
      />
    </div>
  );
};

export default TaskCard;
