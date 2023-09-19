import { createReducer, on } from '@ngrx/store';

import { PokemonListState } from './../../core/models/pokemon-list.state';
import { PokemonListActions } from '../actions/pokemon-list.actions';

export const initialState: PokemonListState = {
  isLoaded: true,
  pokemonListItems: [],
};

export const pokemonListReducer = createReducer(
  initialState,
  on(
    PokemonListActions.loadedPokemonList,
    (state, { pokemonListItems }): PokemonListState => {
      return { ...state, pokemonListItems };
    }
  )
);
