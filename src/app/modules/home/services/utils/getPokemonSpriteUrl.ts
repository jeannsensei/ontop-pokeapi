import { environment } from '../../../../../environments/environment';

export const getPokemonSpriteUrl = (pokemonId: string) => {
  return environment.spriteBaseurl.replace(/{{(.*?)}}/, pokemonId);
};
