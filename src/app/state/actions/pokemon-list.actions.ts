import { createAction } from '@ngrx/store';

const getPokemonList = createAction('[Pokemon List] Get Pokemon List');

export const PokemonListActions = {
  getPokemonList: getPokemonList,
};
