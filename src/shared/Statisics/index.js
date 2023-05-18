import TitledCard from "../TitledCard";
import {
  faCheckToSlot,
  faCheck,
  faClock,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import { useData } from "../../contexts/DataContext";

const Statsics = (props) => {
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
      <TitledCard
        title="DELETED"
        value={dataContext.statistics.deleted}
        icon={faTrash}
      />
    </div>
  );
};

export default Statsics;
