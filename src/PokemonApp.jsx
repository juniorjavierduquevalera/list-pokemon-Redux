import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slice/pokemon/thunks";
import "./pokemon.css";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <section className="bg-sky-950 p-10 rounded-lg w-screen md:w-96 border-2 border-yellow-400">
        <h1 className="font-semibold text-2xl text-yellow-400 text-center">
          PokemonApp
        </h1>
        <hr />
        <p className="font-semibold text-center m-3">
          Loading: {isLoading ? "True" : "False"}
        </p>

        <ul>
          {pokemons.map(({ name, url }) => (
            <>
              <li className="my-2" key={name}>
                {name}
              </li>
              <hr />
            </>
          ))}
        </ul>

        <button
          className="btn btn-outline border-yellow-400 block w-full mt-4 hover:bg-yellow-400"
          disabled={isLoading}
          onClick={() => dispatch(getPokemons(page))}
        >
          Next
        </button>
      </section>
    </>
  );
};
