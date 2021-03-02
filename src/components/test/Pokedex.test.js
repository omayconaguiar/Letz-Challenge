import React from "react";
import Pokedex from "../Pokedex";
import ReactDOM from "react-dom";

const pokemons = [
  {
    id: 1,
    name: 'charizard',
    sprites: { front_default: 'jpg' },
    types: [ { slot: 1, type: ['Object'] } ]
  }
]

test("renders Pokedex", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Pokedex pokemons={pokemons}/>, div);
});

