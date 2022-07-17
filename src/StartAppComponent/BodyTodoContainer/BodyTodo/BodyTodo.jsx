import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import S from "./BodyTodo.module.css";
import TodoFormControl from "./TodoFormControl/TodoFormControl";
import TodoSelect from './TodoSelect/TodoSelect'
const BodyTodo = (props) => {
  return (
    <div className={`container  ${S.body}`}>
      <TodoSelect/>
      <TodoFormControl addTodo={props.addTodo} />
      {props.data &&
        props.data.map((el) => (
          <TodoItem
            changeDone={props.changeDone}
            key={el.id}
            id={el.id}
            name={el.name}
            success={el.done}
            dellTodo={props.dellTodo}
            timeCreate={el.timeCreate}
          />
        ))}
    </div>
  );
};
export default BodyTodo;
