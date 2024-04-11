import { useCounter, useFetch } from "../hooks";
import { LoadingMessage, PokemonCard } from "../03-examples";

export const Layout = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  console.log(data);
  return (
    <>
      <h1>Informacion de Pokemon</h1>
      <hr />
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={data.id}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <h2>{data?.name}</h2> */}
      <button
        className="btn btn-primary"
        onClick={() => (counter > 1 ? decrement() : null)}
      >
        Anterior
      </button>
      <button className="btn btn-primary" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};
