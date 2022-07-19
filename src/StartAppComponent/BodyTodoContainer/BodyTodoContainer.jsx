import React, { useEffect, useState } from "react";
import BodyTodo from "./BodyTodo/BodyTodo";
import {
  changeTodo,
  deleteTodo,
  getActiveItem,
  getItem,
  setTodoItem,
  test,
} from "../../store/LocalStore";

const BodyTodoContainer = () => {
  const [data, setData] = useState(getItem());

  const activePost = (value) => {
    switch (value) {
      case "0":
        localStorage.setItem("ActiveTodo", "all");
        break;
      case "1":
        localStorage.setItem("ActiveTodo", "finish");

        break;
      case "2":
        localStorage.setItem("ActiveTodo", "active");

        break;
    }
    setData(getItem());
  };

  const addTodo = (value) => {
    setTodoItem(value);
    setData(getItem());
  };
  const dellTodo = (id) => {
    deleteTodo(id);
    setData(getItem());
  };

  const changeDone = (id) => {
    changeTodo(id);
    setData(getItem());
  };

  useEffect(() => {}, [data]);

  return (
    <>
      <BodyTodo
        activePost={activePost}
        addTodo={addTodo}
        dellTodo={dellTodo}
        data={data}
        changeDone={changeDone}
      />
    </>
  );
};
export default BodyTodoContainer;
