import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);
  const [categories2, setCategories2] = useState(["One Punch", "Dragon Ball"]);
  const [categories3, setCategories3] = useState(["One Punch", "Dragon Ball"]);

  console.log(categories);

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}

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
