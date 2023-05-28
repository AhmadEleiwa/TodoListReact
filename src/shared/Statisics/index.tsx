import TitledCard from "../TitledCard";
import {
  faCheckToSlot,
  faCheck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import React, {FC} from "react";
import "./style.css";
import { useData } from "../../contexts/DataContext";

const Statsics: FC = () => {
  const dataContext = useData();

  return (
    <div className="statisics-list">
      <TitledCard
        title="TODOS"
        value={dataContext.statistics.all}
        icon={faCheckToSlot}
      />
      <TitledCard
        title="Done"
        value={dataContext.statistics.done}
        icon={faCheck}
      />
      <TitledCard
        title="PENDING"
        value={dataContext.statistics.pending}
        icon={faClock}
      />

    </div>
  );
};

export default Statsics;
