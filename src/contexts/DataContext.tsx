import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type Todo = {
  title: string;
  asssignee: string;
  status: boolean;
};
type Statistics = {
  done: number;
  all: number;
  pending: number;
  deleted: number;
};
interface Data {
  data?: Todo[];
  searchText: string;
  statistics: Statistics;
  setSearchText?: Dispatch<SetStateAction<string>>;
  updateTodo?: (ids: string[], payload: object) => {};
  deleteTodo?: (ids: string[]) => {};
  addTodo?: (data: Todo) => {};
}
const DataContext = createContext<Data>({
  data: [],
  searchText: "",
  statistics: { deleted: 0, done: 0, all: 0, pending: 0 },
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState<Todo[]>(() => []);
  const [searchText, setSearchText] = useState<string>("");
  let done = 0,
    pending = 0;
  for (let item of data) {
    if (item.status === false) pending += 1;
    else done += 1;
  }
  let statistics: Statistics = {
    all: data.length,
    done: done,
    pending: pending,
    deleted: 0,
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get("https://podcast-dudm.onrender.com/api/todo")
      .then((res) => setData(res.data.todo))
      .catch((err) => console.log(err));
  };

  const updateTodo = async (ids, payload) => {
    await axios
      .put("https://podcast-dudm.onrender.com/api/todo", { ids: ids, payload })
      .then((res) => setData(res.data.todo))
      .catch((err) => console.log(err.message));

    // getData();
  };
  const deleteTodo = async (ids) => {
    console.log({ ids: ids });
    await axios
      .post("https://podcast-dudm.onrender.com/api/todo", { ids: ids })
      .then()
      .catch((err) => console.log(err.message));
    getData();
  };
  const addTodo = async (d) => {
    console.log(d);
    await axios
      .post("https://podcast-dudm.onrender.com/api/todo/add", { ...d })
      .then()
      .catch((err) => console.log(err.message));
    getData();
  };

  return (
    <DataContext.Provider
      value={{
        searchText: searchText,
        setSearchText: setSearchText,
        data: data,
        statistics: statistics,
        updateTodo: updateTodo,
        deleteTodo: deleteTodo,
        addTodo: addTodo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
