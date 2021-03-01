import React from "react";
import {searchPokemon, getPokemons, getPokemonData} from "../api";
import ReactDOM from "react-dom";

test("renders searchPokemon", () => {
    const div = document.createElement("div");
    ReactDOM.render(<searchPokemon/>, div);
});

test("renders getPokemons", () => {
    const div = document.createElement("div");
    ReactDOM.render(<getPokemons/>, div);
});

test("renders getPokemonData", () => {
    const div = document.createElement("div");
    ReactDOM.render(<getPokemonData/>, div);
});

