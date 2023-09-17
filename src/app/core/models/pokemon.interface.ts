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
}
