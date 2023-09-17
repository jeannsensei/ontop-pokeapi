// considering we have an url like this: https://pokeapi.co/api/v2/pokemon/1/
export const getPokemonIdFromUrl = (url: string) => {
  return url.split('/')[6];
};
