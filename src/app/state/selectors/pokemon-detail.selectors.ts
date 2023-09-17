import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

export const selectPokemonDetail = (state: AppState) => state.pokemonDetail;

export const selectPokemonDetailLoading = createSelector(
  selectPokemonDetail,
  state => state.isPokemonLoaded
);
