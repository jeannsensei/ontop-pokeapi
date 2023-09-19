import { Pokemon } from './pokemon.interface';

export interface PokemonListState {
  isLoaded: boolean;
  pokemonListItems: Array<Pokemon>;
}
