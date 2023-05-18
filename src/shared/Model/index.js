import { useState } from "react";
import Button from "../Button";
import "./style.css";
import { useData } from "../../contexts/DataContext";
import { useTheme } from "../../contexts/Theme";

const Model = (props) => {
  const [inputData, setInputData] = useState({ title: "", assignee: "" });

  const theme = useTheme();
  const dataContext = useData();

  const inputHandler = (event) => {
    const key = event.target.name;
    setInputData({ ...inputData, [key]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dataContext.addTodo({...inputData, status:false})
    props.onClose();
  };
  return (
    <>
      {props.isOpen && (
        <div className="black-drop" onClick={props.onClose}></div>
      )}
      {props.isOpen && (
        <div
          className="model"
          style={{
            backgroundColor: theme.pallete.backgroundPaper,
            boxShadow: `0px 2px 8px 0 ${theme.pallete.dropShadow}`,
          }}
        >
          {props.conformModel ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                props.submitHandler();
                props.onClose();
              }}
            >
              <p>{props.title}</p>
              <Button>CONFORM</Button>
              <Button onClick={props.onClose}>CANCLE</Button>
            </form>
          ) : (
            <form onSubmit={submitHandler}>
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
              <Button onClick={props.onClose}>CANCLE</Button>

              <datalist id="assignees">
                {dataContext.data.map((p, index) => {
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
