import { useState } from "react";
import Header from "../shared/Header";
import TaskList from "../shared/TaskList";

import Container from "../shared/Container";
import ControlButtons from "../shared/ControlButtons";
import Statsics from "../shared/Statisics";
import SearchField from "../shared/SearchField";
import { DataProvider } from "../contexts/DataContext";
import React, {FC} from "react";
import "./style.css";
const HomePage:FC = () => {
 
  const [allowGroupByAssigne, setAllowGroupByAssignee] = useState(false);

  return (
    <DataProvider>
      <Header />
      <Container>
        <div className="box">
          <Statsics />
          <div className="body">
            <SearchField />
            <ControlButtons
              groupByAssignee={() => setAllowGroupByAssignee((prev) => !prev)}
            />
            <TaskList groupByAssignee={allowGroupByAssigne} />
          </div>
        </div>
      </Container>
    </DataProvider>
  );
};

export default HomePage;
