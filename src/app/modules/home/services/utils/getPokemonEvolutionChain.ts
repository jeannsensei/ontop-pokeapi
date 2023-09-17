interface PokemonSpecie {
  species: {
    name: string;
    url: string;
  };
  evolves_to?: PokemonSpecie[];
}

export const getPokemonEvolutionChain = (
  pokemon: PokemonSpecie
): PokemonSpecie[] => {
  let pokemonEvoChain: PokemonSpecie[] = [];
  pokemonEvoChain = [...pokemonEvoChain, pokemon];

  if (pokemon.evolves_to) {
    pokemon.evolves_to.forEach(evolution => {
      pokemonEvoChain = [
        ...pokemonEvoChain,
        ...getPokemonEvolutionChain(evolution),
      ];
    });
  }

  return pokemonEvoChain;
};
