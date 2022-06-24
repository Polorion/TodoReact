import React, { useState } from "react";
import S from "./TodoFormControl.module.css";
const TodoFormControl = (props) => {
  const [valueInput, setValueInput] = useState("");

  const hendel = (e) => {
    setValueInput(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.addTodo(valueInput);
    setValueInput("");
  };
  return (
    <div className={S.formBody}>
      <form action="">
        <label>
          <input
            type="text"
            value={valueInput}
            onInput={hendel}
            placeholder={"Названия дела"}
          />
        </label>
        <button onClick={onSubmit} type={"submit"}>
          Добавить дело
        </button>
      </form>
    </div>
  );
};
export default TodoFormControl;
