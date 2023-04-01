import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./slice/pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer,
  },
});
