import GeneratorRandomString from "../util/generateRandomString";

export const setTodoItem = (value) => {
  const localArray = JSON.parse(localStorage.getItem("data"));
  localArray.forEach((el) => (el.anim = false));
  localArray.unshift(createTodo(value));
  localStorage.setItem("data", JSON.stringify(localArray));
  setTimeout(() => {
    const localArray = JSON.parse(localStorage.getItem("data"));
    localArray.forEach((el) => (el.anim = false));
    localStorage.setItem("data", JSON.stringify(localArray));
  }, 300);
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
    status: "active",
    timeCreate: new Date(),
    anim: true,
  };
};

export const getItem = () => {
  if (JSON.parse(localStorage.getItem("data")) === null) {
    localStorage.setItem("data", JSON.stringify([]));
  }
  const activePost = localStorage.getItem("ActiveTodo");
  switch (activePost) {
    case "finish":
      return JSON.parse(localStorage.getItem("data")).filter((el) => {
        if (el.done === true) {
          return el;
        }
      });
      break;
    case "active":
      return JSON.parse(localStorage.getItem("data")).filter((el) => {
        if (el.done !== true) {
          return el;
        }
      });
      break;
    case "all":
      return JSON.parse(localStorage.getItem("data"));
      break;
  }
};
