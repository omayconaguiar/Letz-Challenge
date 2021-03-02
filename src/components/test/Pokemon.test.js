import React from "react";
import Pokemon from "../Pokemon";
import ReactDOM from "react-dom";
import {buildPokemon} from '../test/mock/pokemons'

test("renders Pokemon", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Pokemon pokemon={buildPokemon()}/>, div);
});

