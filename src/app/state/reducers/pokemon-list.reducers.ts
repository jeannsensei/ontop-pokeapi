import { createReducer, on } from '@ngrx/store';

import { PokemonListState } from './../../core/models/pokemon-list.state';
import { PokemonListActions } from '../actions/pokemon-list.actions';

export const initialState: PokemonListState = {
  isLoading: true,
  pokemonListItems: [],
};

export const pokemonListReducer = createReducer(
  initialState,
  on(PokemonListActions.loadingPokemonList, (state): PokemonListState => {
    return { ...state, isLoading: true };
  }),
  on(
    PokemonListActions.loadedPokemonList,
    (state, { pokemonListItems }): PokemonListState => {
      return { ...state, isLoading: false, pokemonListItems };
    }
  )
);
