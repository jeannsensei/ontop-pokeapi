import { createReducer, on } from '@ngrx/store';

import { PokemonListState } from './../../core/models/pokemon-list.state';
import { PokemonListActions } from '../actions/pokemon-list.actions';

export const initialState: PokemonListState = {
  isLoading: false,
  pokemonListItems: [],
};

export const pokemonListReducer = createReducer(
  initialState,
  on(PokemonListActions.getPokemonList, (state): PokemonListState => {
    return { ...state };
  })
);
