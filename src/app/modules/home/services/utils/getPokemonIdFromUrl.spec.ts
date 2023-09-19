import {
  getPokemonIdFromSpeciesUrl,
  getPokemonIdFromUrl,
} from './getPokemonIdFromUrl';

describe('getPokemonIdFromUrl', () => {
  it('should return the id', () => {
    const testUrl = 'https://pokeapi.co/api/v2/pokemon/1/';
    const result = getPokemonIdFromUrl(testUrl);
    expect(result).toEqual('1');
  });
});

describe('getPokemonIdFromSpeciesUrl', () => {
  it('should return the id', () => {
    const testUrl = 'https://pokeapi.co/api/v2/pokemon-species/99/';
    const result = getPokemonIdFromSpeciesUrl(testUrl);
    expect(result).toEqual('99');
  });
});
