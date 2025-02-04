import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  FC,
  PropsWithChildren,
} from "react";

export type Todo = {
  _id:string,
  title: string;
  assignee: string;
  status: boolean;
};
export type Statistics = {
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
  updateTodo?: (ids: string[], payload: object) => void;
  deleteTodo?: (ids: string[]) => void;
  addTodo?: (data: Todo) => void;       
}
const DataContext = createContext<Data>({
  data: [],
  searchText: "",
  statistics: { deleted: 0, done: 0, all: 0, pending: 0 },
});
const apiToken = "https://13.51.64.210:5501/api";

console.log(apiToken)
export const useData = () => useContext<Data>(DataContext);

export const DataProvider :FC<PropsWithChildren> = ({ children }) => {
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
      .get(`${apiToken}/todo`)
      .then((res) => setData(res.data.todo))
      .catch((err) => console.log(err));
  };

  const updateTodo = async (ids:string[], payload:object) => {
    await axios
      .put(`${apiToken}/todo`, { ids: ids, payload })
      .then((res) => setData(res.data.todo))
      .catch((err) => console.log(err.message));

    // getData();
  };
  const deleteTodo = async (ids:string[]) => {
    console.log({ ids: ids });
    await axios
      .post(`${apiToken}/todo`, { ids: ids })
      .then()
      .catch((err) => console.log(err.message));
    getData();
  };
  const addTodo = async (d:Todo) => {
    console.log(d);
    await axios
      .post(`${apiToken}/todo/add`, { ...d })
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
