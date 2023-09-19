import { stringToSlug } from './stringToSlug';

describe('stringToSlug', () => {
  it('should return the pokemon-ontop', () => {
    const result = stringToSlug('Pokemon ontop');
    expect(result).toEqual('pokemon-ontop');
  });
});
