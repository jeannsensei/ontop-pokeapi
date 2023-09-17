export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: Array<PokemonListPokemon>;
}

export interface PokemonListPokemon {
  name: string;
  url: string;
}

export interface Pokemon {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export type PokemonDetails = {
  name: string;
  image: string;
  height: number;
  weight: number;
  types: Array<string>;
  evolutionChain: Array<PokemonEvolutionChain>;
};

export type PokemonEvolutionChain = {
  id: string;
  name: string;
  image: string;
};
