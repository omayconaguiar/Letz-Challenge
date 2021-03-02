import pokemon from "./pokemon.json";
export const buildPokemonList = (size) => {
  const result = [];

  for (let i = 0; i < size; i += 1) {
    result.push({
      ...pokemon[i]
    });
  }

  return result;
};

export const buildPokemon = () => buildPokemonList(1)[0];
