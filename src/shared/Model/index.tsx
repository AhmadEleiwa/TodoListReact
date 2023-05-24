import React, { FC, useState } from "react";
import Button from "../Button";
import "./style.css";
import { Todo, useData } from "../../contexts/DataContext";
import { useTheme } from "../../contexts/Theme";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  conformModel: boolean;
  title: string;
  submitHandler: () => void;
};
const Model: FC<Props> = ({
  onClose,
  isOpen,
  conformModel,
  title,
  submitHandler,
}) => {
  const [inputData, setInputData] = useState<Todo>({
    _id: "",
    title: "",
    assignee: "",
    status: false,
  });

  const theme = useTheme();
  const dataContext = useData();

  const inputHandler = (event) => {
    const key = event.target.name;
    setInputData({ ...inputData, [key]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dataContext.addTodo!({ ...inputData, status: false });
    onClose();
  };
  return (
    <>
      {isOpen && <div className="black-drop" onClick={onClose}></div>}
      {isOpen && (
        <div
          className="model"
          style={{
            backgroundColor: theme.pallete.backgroundPaper,
            boxShadow: `0px 2px 8px 0 ${theme.pallete.dropShadow}`,
          }}
        >
          {conformModel ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitHandler();
                onClose();
              }}
            >
              <p>{title}</p>
              <Button>CONFORM</Button>
              <Button onClick={onClose}>CANCLE</Button>
            </form>
          ) : (
            <form onSubmit={onSubmitHandler}>
              <input
                name="title"
                onInput={inputHandler}
                required
                placeholder="TASK"
                style={{ color: theme.pallete.textPrimary }}
              />
              <input
                name="assignee"
                list="assignees"
                onInput={inputHandler}
                required
                placeholder="ASSIGNEE"
                style={{ color: theme.pallete.textPrimary }}
              />
              <Button>ADD TASK</Button>
              <Button onClick={onClose}>CANCLE</Button>

              <datalist id="assignees">
                {dataContext.data!.map((p, index) => {
                  return <option key={index} value={p.assignee} />;
                })}
              </datalist>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default Model;
