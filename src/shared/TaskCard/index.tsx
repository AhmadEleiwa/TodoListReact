import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction, useState } from "react";
import CheckBox from "../CheckBox";
import Model from "../Model";

import "./style.css";
import { Todo, useData } from "../../contexts/DataContext";
import { useTheme } from "../../contexts/Theme";
import React, { FC } from "react";

interface Props extends Omit<Todo, "status"> {
  taskEnable: boolean;
  setIndexHandler:(index:string)=>void;
  inputEnable: boolean;
}

const TaskCard: FC<Props> = ({
  title,
  assignee,
  _id,
  taskEnable,
  setIndexHandler,
  inputEnable,
}) => {
  const [inputData, setInputData] = useState<string>();
  const [modelOpen, setModelOpen] = useState<boolean>(false);

  const theme = useTheme();
  const { data, updateTodo, deleteTodo } = useData();

  const editTask = () => {
    updateTodo!([_id], { title: inputData });
  };
  const taskCheckHandler = (e:any) => {
    updateTodo!([_id], { status: !taskEnable });
  };

  return (
    <div
      className="task-card"
      style={{
        backgroundColor: taskEnable
          ? theme.pallete.disabled
          : theme.pallete.paper,
        boxShadow: `0 2px 8px 0 ${theme.pallete.dropShadow}`,
      }}
    >
      <CheckBox onClick={taskCheckHandler} checked={taskEnable} />
      <div className="task-body">
        <input
          onKeyDown={(e) => {
            console.log(e.key);
            if (e.key === "Enter") {
              console.log("enter");
              editTask();
              setIndexHandler('-1');
            }
          }}
          style={{
            color: theme.pallete.main,
            border: `1px solid ${theme.pallete.paperBorder}`,
            textDecoration: taskEnable ? "line-through" : "none",
          }}
          onChange={(e) => setInputData(e.target.value)}
          disabled={inputEnable}
          defaultValue={title}
        />
        <p style={{ color: theme.pallete.textSecondary }}>{assignee}</p>
      </div>
      <div className="control">
        <FontAwesomeIcon
          icon={faEdit}
          onClick={() => {
            setIndexHandler(_id);
          }}
          color={
            !taskEnable
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
          deleteTodo!([_id]);
        }}
        onClose={() => {
          setModelOpen(false);
        }}
      />
    </div>
  );
};

export default TaskCard;
