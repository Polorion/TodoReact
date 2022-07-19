import React, { useEffect, useState } from "react";
import BodyTodo from "./BodyTodo/BodyTodo";
import {
  changeTodo,
  deleteTodo,
  getItem,
  setTodoItem, test,
} from "../../store/LocalStore";

const BodyTodoContainer = () => {
  const [data, setData] = useState(getItem());

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

  useEffect(() => {


  }, [data]);

  return (
    <>
      <BodyTodo
        addTodo={addTodo}
        dellTodo={dellTodo}
        data={data}
        changeDone={changeDone}
      />
    </>
  );
};
export default BodyTodoContainer;
