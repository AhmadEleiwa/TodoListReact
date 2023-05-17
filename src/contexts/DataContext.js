import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext({
  data: [],
  statistics: { all: 0, done: 0, pending: 0, deleted: 0 },
  changeHandler: () => {},
});

export const useData = useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  let done = 0,
    pending = 0;
  for (item of data) {
    if (item.status === false) pending += 1;
    else done += 1;
  }
  let statistics = { all: data.length, done: done, pending: pending };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.get(
      "https://todolist-backend-wg1w.onrender.com/api/todo"
    );
    setData(res.data.todos);
  };

  const updateTodo = async (id, d) => {
    await axios
      .put("https://todolist-backend-wg1w.onrender.com/api/todo/" + id, { d })
      .then(getData())
      .catch((err) => console.log(err.message));
  };
  const deleteTodo = async (id) => {
    await axios
      .delete("https://todolist-backend-wg1w.onrender.com/api/todo/" + id)
      .then(getData())
      .catch((err) => console.log(err.message));
  };
  const addTodo = async (d) => {
    await axios
      .post("https://todolist-backend-wg1w.onrender.com/api/todo/", { d })
      .then(getData())
      .catch((err) => console.log(err.message));
  };

  return (
    <DataContext.Provider
      value={{
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
