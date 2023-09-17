import { Pokemon } from './../../core/models/pokemon.interface';
import { createAction, props } from '@ngrx/store';

const loadingPokemonList = createAction('[Pokemon List] Loading Pokemon List State');

const loadedPokemonList = createAction(
  '[Pokemon List] Pokemon List Loaded',
  props<{ pokemonListItems: Array<Pokemon> }>()
);

export const PokemonListActions = {
  loadingPokemonList,
  loadedPokemonList,
};
