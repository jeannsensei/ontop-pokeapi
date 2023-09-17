export interface PokemonEvolutionChainResponse {
  baby_trigger_item?: unknown;
  chain: Chain;
  id: number;
}

interface Chain {
  evolution_details: unknown[];
  evolves_to: EvolvesTo[];
  is_baby: boolean;
  species: Species;
}

interface EvolvesTo {
  evolution_details: Evolutiondetail[];
  evolves_to: EvolvesTo[];
  is_baby: boolean;
  species: Species;
}

interface Species {
  name: string;
  url: string;
}

interface Evolutiondetail {
  gender?: unknown;
  held_item?: unknown;
  item?: unknown;
  known_move?: unknown;
  known_move_type?: unknown;
  location?: unknown;
  min_affection?: unknown;
  min_beauty?: unknown;
  min_happiness?: unknown;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species?: unknown;
  party_type?: unknown;
  relative_physical_stats?: unknown;
  time_of_day: string;
  trade_species?: unknown;
  trigger: {
    name: string;
    url: string;
  };
  turn_upside_down: boolean;
}
