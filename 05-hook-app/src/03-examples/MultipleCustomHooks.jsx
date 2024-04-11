import React from "react";
import { useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/3"
  );
  return (
    <>
      <h1>Informacion de Pokemon</h1>
      <hr />
      {isLoading && <p>Loading...</p>}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <h2>{data?.name}</h2>
    </>
  );
};
