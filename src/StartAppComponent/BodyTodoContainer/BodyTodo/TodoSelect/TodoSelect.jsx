import { useState } from "react";

const TodoSelect = (props) => {
  const [active, setActive] = useState("active");
  const setOprional = (active) => {
    setActive(active);
  };
  return (
    <>
      <label htmlFor="">
        сортировать
        <select
          onChange={(value) => {
            props.activePost(value.target.value);
          }}
        >
          <option value="0">все задачи</option>
          <option value="1">выполненные задачи</option>
          <option value="2">не выполненные задачи</option>
        </select>
      </label>
    </>
  );
};

export default TodoSelect;
