import { ActionReducerMap } from '@ngrx/store';
import { PokemonListState } from '../core/models/pokemon-list.state';
import { pokemonListReducer } from './reducers/pokemon-list.reducers';

export interface AppState {
  pokemonList: PokemonListState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  pokemonList: pokemonListReducer,
};
