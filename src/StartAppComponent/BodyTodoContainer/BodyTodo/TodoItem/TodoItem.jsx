import React from "react";
import S from "./TodoItem.module.css";
import appZero from "../../../../util/addZeroData";
import prindDayOfTheWeek from "../../../../util/prindDayOfTheWeek";
import prindMount from "../../../../util/prindMount";
const TodoItem = (props) => {
  const data = props.timeCreate;
  let date = new Date(data);
  const year = date.getFullYear();
  const month = prindMount(date.getMonth());
  const day = date.getDate();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const DayOfTheWeek = prindDayOfTheWeek(date.getDay());

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
        <div className={S.createTime}>
          {DayOfTheWeek} {day}-{month}-{appZero(year)} года ({hours}:
          {appZero(minute)})
        </div>
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
