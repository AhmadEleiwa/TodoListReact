import { useState } from "react";
import TaskCard from "../TaskCard";

import "./style.css";
import { useData } from "../../contexts/DataContext";
import { useTheme } from "../../contexts/Theme";
import React, { FC } from "react";

type Props ={ 
  groupByAssignee:boolean,
}
const TaskList: FC<Props> = ({groupByAssignee}) => {
  const [indexItem, setIndexItem] = useState<string>('-1');
  const { data, searchText } = useData();
  const theme = useTheme();
  const setIndexHandler = (index:string) => {
    if (indexItem !== index) setIndexItem(index);
    else setIndexItem('-1');
  };

  let groupByAssigneeItem,
    dat = data!.filter((p) => p.title.match(searchText));
  if (groupByAssignee) {
    let s = [...data!];
    let ls = {};
    for (let item of s) {
      if (ls[item.assignee] === undefined) ls[item.assignee] = [item];
      else ls[item.assignee].push(item);
    }
    groupByAssigneeItem = Object.entries(ls);
  }
  return (
    <>
      {!groupByAssignee ? (
        <div className="task-list">
          {dat.map((item, index) => (
            <TaskCard
              key={item._id}
              setIndexHandler={setIndexHandler}
              _id={item._id}
              title={item.title}
              assignee={item.assignee}
              taskEnable={item.status}
              inputEnable={item._id !== indexItem}
            />
          ))}
        </div>
      ) : (
        groupByAssigneeItem.map((p) => (
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
                  key={item._id}
                  setIndexHandler={setIndexHandler}
                  _id={item._id}
                  title={item.title}
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
