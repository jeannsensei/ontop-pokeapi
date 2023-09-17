import { createAction, props } from '@ngrx/store';

const setLoadingPokemonDetail = createAction(
  '[Pokemon List] Loading Pokemon Details State',
  props<{ isPokemonLoaded: boolean }>()
);

export const PokemonDetailActions = {
  setLoadingPokemonDetail,
};
