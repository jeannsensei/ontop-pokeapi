import { ActionReducerMap } from '@ngrx/store';
import { PokemonListState } from '../core/models/pokemon-list.state';

import { pokemonListReducer } from './reducers/pokemon-list.reducers';
import { pokemonDetailReducer } from './reducers/pokemon-detail.reducers';
import { PokemonDetailState } from '../core/models/pokemon-detail.state';

export interface AppState {
  pokemonList: PokemonListState;
  pokemonDetail: PokemonDetailState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  pokemonList: pokemonListReducer,
  pokemonDetail: pokemonDetailReducer,
};
