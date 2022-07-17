import GeneratorRandomString from "../util/generateRandomString";

export const setTodoItem = (value) => {
  const localArray = JSON.parse(localStorage.getItem("data"));
  localArray.unshift(createTodo(value));
  localStorage.setItem("data", JSON.stringify(localArray));
};

export const deleteTodo = (id) => {
  localStorage.setItem(
    "data",
    JSON.stringify(
      JSON.parse(localStorage.getItem("data")).filter((el) => el.id !== id)
    )
  );
};

export const changeTodo = (id) => {
  const local = JSON.parse(localStorage.getItem("data"));
  local.forEach((el) => {
    if (el.id === id) {
      el.done = !el.done;
    }
  });
  localStorage.setItem("data", JSON.stringify(local));
};

export const createTodo = (value) => {
  return {
    name: value,
    done: false,
    id: GeneratorRandomString(),
    status:"active",
    timeCreate: new Date()
  };
};

export const getItem = () => {
  if (JSON.parse(localStorage.getItem("data")) === null) {
    localStorage.setItem("data", JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem("data"));
};
export const getItemActive = () => {
  if (JSON.parse(localStorage.getItem("data")) === null) {
    localStorage.setItem("data", JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem("data"));
};
