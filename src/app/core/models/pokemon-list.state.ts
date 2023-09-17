import { Pokemon } from './pokemon.interface';

export interface PokemonListState {
  isLoading: boolean;
  pokemonListItems: Array<Pokemon>;
}
