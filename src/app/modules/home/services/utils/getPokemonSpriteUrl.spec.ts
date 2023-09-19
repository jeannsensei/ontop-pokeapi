import { getPokemonSpriteUrl } from './getPokemonSpriteUrl';

describe('getPokemonSpriteUrl', () => {
  it('should return the correct sprite url with the id', () => {
    const result = getPokemonSpriteUrl('99');
    expect(result).toEqual(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png'
    );
  });
});
