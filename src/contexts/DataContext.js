import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext({
  searchText: "",
  setSearchText: () => {},
  data: [],
  statistics: { all: 0, done: 0, pending: 0, deleted: 0 },
  updateTodo: () => {},
  deleteTodo: () => {},
  addTodo: () => {},
  updateTodoById: () => {},
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => []);
  const [searchText, setSearchText] = useState("");
  let done = 0,
    pending = 0;
  for (let item of data) {
    if (item.status === false) pending += 1;
    else done += 1;
  }
  let statistics = { all: data.length, done: done, pending: pending };
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
    console.log(d)
    await axios
      .post("https://podcast-dudm.onrender.com/api/todo/add", {...d})
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
