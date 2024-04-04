import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]); //...categories es para que no se pierda la información que ya tenía
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        //   setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />
      {/* Listado de Gifs */}

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
        {/* <li>ABC</li> */}
      </ol>
      {/* Gif Item */}
    </>
  );
};
