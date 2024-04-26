//import { useState } from "react";

import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  // --------------------------------Solucion 1 ------------------------------------------
  // const [inputValue, setInputValue] = useState("");

  // const onInputChange = ({ target }) => {
  //   setInputValue(target.value);
  // };

  // const onSubmit = (event) => {
  //   event.preventDefault(); //evita que se recargue la página al enviar el formulario (comportamiento por defecto)
  //   // console.log(inputValue);
  //   if (inputValue.trim().length <= 1) return; //trim() elimina los espacios en blanco al inicio y al final
  //   //setCategories((categories) => [inputValue, ...categories]);
  //   handleNewTodo(inputValue.trim());
  //   setInputValue("");
  // };
  //---------------------------------------------------------------------------------------
  // --------------------------------Solucion 2 ------------------------------------------
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.trim().length <= 1) return;

    onNewTodo({
      id: new Date().getTime(),
      desc: description,
      done: false,
    });
    onResetForm();
  };

  return (
    <>
      {/* TodoAdd onNewTodo(todo)*/}
      {/* {id: new Date().... description: '', done: flase} */}

      <form onSubmit={(event) => onFormSubmit(event)} aria-label="form">
        <input
          type="text"
          placeholder="¿Que hay que hacer?"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </>
  );
};
