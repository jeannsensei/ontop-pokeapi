import {
  PokemonSpecie,
  getPokemonEvolutionChain,
} from './getPokemonEvolutionChain';

const pokemonDataMock = {
  evolution_details: [],
  evolves_to: [
    {
      evolution_details: [
        {
          gender: null,
          held_item: null,
          item: null,
          known_move: null,
          known_move_type: null,
          location: null,
          min_affection: null,
          min_beauty: null,
          min_happiness: null,
          min_level: 16,
          needs_overworld_rain: false,
          party_species: null,
          party_type: null,
          relative_physical_stats: null,
          time_of_day: '',
          trade_species: null,
          trigger: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
          },
          turn_upside_down: false,
        },
      ],
      evolves_to: [
        {
          evolution_details: [
            {
              gender: null,
              held_item: null,
              item: null,
              known_move: null,
              known_move_type: null,
              location: null,
              min_affection: null,
              min_beauty: null,
              min_happiness: null,
              min_level: 36,
              needs_overworld_rain: false,
              party_species: null,
              party_type: null,
              relative_physical_stats: null,
              time_of_day: '',
              trade_species: null,
              trigger: {
                name: 'level-up',
                url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
              },
              turn_upside_down: false,
            },
          ],
          evolves_to: [],
          is_baby: false,
          species: {
            name: 'blastoise',
            url: 'https://pokeapi.co/api/v2/pokemon-species/9/',
          },
        },
      ],
      is_baby: false,
      species: {
        name: 'wartortle',
        url: 'https://pokeapi.co/api/v2/pokemon-species/8/',
      },
    },
  ],
  is_baby: false,
  species: {
    name: 'squirtle',
    url: 'https://pokeapi.co/api/v2/pokemon-species/7/',
  },
};

describe('getPokemonEvolutionChain', () => {
  it('should return an array of pokemon evolutions', () => {
    const result = getPokemonEvolutionChain(pokemonDataMock as PokemonSpecie);
    const firstStageEvolution = result[0]?.species?.name;
    const secondStageEvolution = result[1]?.species?.name;
    const thirdStageEvolution = result[2]?.species?.name;

    expect(firstStageEvolution).toEqual('squirtle');
    expect(secondStageEvolution).toEqual('wartortle');
    expect(thirdStageEvolution).toEqual('blastoise');
  });
});
