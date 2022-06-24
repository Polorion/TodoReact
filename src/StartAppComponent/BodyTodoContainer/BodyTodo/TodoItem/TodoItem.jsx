import React from "react";
import S from "./TodoItem.module.css";
const TodoItem = (props) => {
  const dellitem = (e) => {
    e.preventDefault();
    props.dellTodo(props.id);
  };
  const successOrFail = (e) => {
    e.preventDefault();
    props.changeDone(props.id);
  };
  return (
    <>
      <div className={`${props.success && S.ok} ${S.body}`}>
        <p>{props.name}</p>
        <div className={S.btnBody}>
          <button onClick={successOrFail}>
            {props.success ? "Выполнено" : "Невыполнено"}
          </button>
          <button onClick={dellitem}>Удалить</button>
        </div>
      </div>
    </>
  );
};
export default TodoItem;
