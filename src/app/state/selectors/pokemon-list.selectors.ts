import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

export const selectPokemonList = (state: AppState) => state.pokemonList;

export const selectPokemonListItems = createSelector(
  selectPokemonList,
  (state) => state.pokemonListItems
);

export const selectPokemonListLoading = createSelector(
  selectPokemonList,
  (state) => state.isLoading
);
