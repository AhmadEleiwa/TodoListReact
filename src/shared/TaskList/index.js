import { useEffect, useState } from "react";
import TaskCard from "../TaskCard";

import "./style.css";
import { useData } from "../../contexts/DataContext";
import { useTheme } from "../../contexts/Theme";

const TaskList = (props) => {
  const [indexItem, setIndexItem] = useState(-1);
  const { data, searchText } = useData();
  const theme = useTheme();
  const setIndexHandler = (index) => {
    if (indexItem !== index) setIndexItem(index);
    else setIndexItem(-1);
  };

  let groupByAssignee,
    dat = data.filter((p) => p.title.match(searchText));
  if (props.groupByAssignee) {
    let s = [...data];
    let ls = {};
    for (let item of s) {
      if (ls[item.assignee] === undefined) ls[item.assignee] = [item];
      else ls[item.assignee].push(item);
    }
    groupByAssignee = Object.entries(ls);
  }
  return (
    <>
      {!props.groupByAssignee ? (
        <div className="task-list">
          {dat.map((item, index) => (
            <TaskCard
              key={item._id}
              setIndexHandler={setIndexHandler}
              id={item._id}
              value={item.title}
              assignee={item.assignee}
              taskEnable={item.status}
              inputEnable={item._id !== indexItem}
            />
          ))}
        </div>
      ) : (
        groupByAssignee.map((p) => (
          <div key={p[0]} style={{ marginTop: "1em" }}>
            <div
              style={{
                display: "flex",
                marginBottom: "2em",
                flexDirection: "column",
                gap: "1em",
              }}
            >
              {p[1].map((item, index) => (
                <TaskCard
                  key={item.id}
                  setIndexHandler={setIndexHandler}
                  id={item.id}
                  value={item.value}
                  assignee={item.assignee}
                  taskEnable={item.state}
                  inputEnable={item.id !== indexItem}
                />
              ))}
            </div>
            <hr color={theme.pallete.paperBorder} />
          </div>
        ))
      )}
    </>
  );
};

export default TaskList;
