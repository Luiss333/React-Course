import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   desc: "Recolectar la piedra del alma",
  //   done: false,
  // }
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  // Usamos useReducer para manejar el estado de los todos en lugar de useState
  //    para tener un mejor control de las acciones que se realizan sobre el estado,
  //    donde dispatch es la función que se encarga de enviar las acciones al reducer.
  // También usamos un inicializador init para obtener los todos del localStorage si existen.
  // todoReducer es una función que se encarga de manejar las acciones que se realizan
  //    sobre el estado de los todos.
  // InitialState es un arreglo de objetos que representan los todos.

  const [todosCount, setTodosCount] = useState(0);
  const [pendingTodosCount, setPendingTodosCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodosCount(todos.length);
    setPendingTodosCount(todos.filter((todo) => !todo.done).length);
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id, //Payload funciona como un argumento que se envía al reducer
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };
  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  };
};
