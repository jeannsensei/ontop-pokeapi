import { createReducer, on } from '@ngrx/store';

import { PokemonDetailState } from './../../core/models/pokemon-detail.state';
import { PokemonDetailActions } from '../actions/pokemon-detail.actions';

export const initialState: PokemonDetailState = {
  isPokemonLoaded: true,
};

export const pokemonDetailReducer = createReducer(
  initialState,
  on(
    PokemonDetailActions.setLoadingPokemonDetail,
    (state, { isPokemonLoaded }): PokemonDetailState => {
      return { ...state, isPokemonLoaded };
    }
  )
);
