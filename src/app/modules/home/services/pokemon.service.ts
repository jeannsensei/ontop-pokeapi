import {
  Observable,
  catchError,
  forkJoin,
  map,
  mergeMap,
  of,
  throwError,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

import {
  Pokemon,
  PokemonDetails,
  PokemonEvolutionChain,
} from './../../../core/models/pokemon.interface';
import { PokemonListResponse } from '../../../core/models/pokemon.interface';
import { PokemonEvolutionChainResponse } from './../../../core/models/pokemon-evolution-chain.interface';
import { PokemonDetailsResponse } from './../../../core/models/pokemon-details.interface';
import {
  getPokemonIdFromSpeciesUrl,
  getPokemonIdFromUrl,
} from './utils/getPokemonIdFromUrl';
import { stringToSlug } from '../../../shared/utils/stringToSlug';
import { getPokemonSpriteUrl } from './utils/getPokemonSpriteUrl';
import { getPokemonEvolutionChain } from './utils/getPokemonEvolutionChain';
import { PokemonSpeciesResponse } from './../../../core/models/pokemon-species.interface';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http
      .get<PokemonListResponse>(`${environment.baseurl}/pokemon?limit=1273`)
      .pipe(
        map(this.getPokemonCompleteInfo),
        catchError(error => {
          return throwError(() => error);
        })
      );
  }

  private getPokemonCompleteInfo(
    response: PokemonListResponse
  ): Array<Pokemon> {
    const pokemonList = response.results.map(pokemon => {
      const pokemonId = getPokemonIdFromUrl(pokemon.url);
      const spriteUrl = getPokemonSpriteUrl(pokemonId);
      return {
        id: pokemonId,
        name: pokemon.name,
        image: spriteUrl,
        slug: stringToSlug(pokemon.name),
      };
    });

    return pokemonList;
  }

  getPokemonDetails(id: string) {
    const getPokemonDetails$ = this.http.get<PokemonDetailsResponse>(
      `${environment.baseurl}/pokemon/${id}`
    );

    let pokemonDetails: PokemonDetailsResponse;

    return getPokemonDetails$.pipe(
      mergeMap(pokemonDetailsResp => {
        pokemonDetails = pokemonDetailsResp;
        const pokemonSpeciesUrl = pokemonDetailsResp.species.url;
        return this.http.get<PokemonSpeciesResponse>(pokemonSpeciesUrl);
      }),
      mergeMap(pokemonSpeciesResp => {
        const pokemonEvChainUrl = pokemonSpeciesResp.evolution_chain.url;
        return this.http.get<PokemonEvolutionChainResponse>(pokemonEvChainUrl);
      }),
      mergeMap(pokemonEvChainResponse => {
        return forkJoin([of(pokemonDetails), of(pokemonEvChainResponse)]);
      }),
      map(this.getTransformedPokemonDetails),
      catchError(error => {
        return throwError(() => error);
      })
    );
  }

  private getTransformedPokemonDetails(
    res: [PokemonDetailsResponse, PokemonEvolutionChainResponse]
  ): PokemonDetails {
    const [pokemonDetails, pokemonEvolutionChain] = res;

    const spriteUrl = getPokemonSpriteUrl(String(pokemonDetails.id));
    const pokemonTypes = pokemonDetails.types.map(t => t.type.name);
    const evolutionChain = getPokemonEvolutionChain(
      pokemonEvolutionChain.chain
    );
    const pokemonEvoChain: PokemonEvolutionChain[] = evolutionChain.map(ev => {
      const id = getPokemonIdFromSpeciesUrl(ev.species.url);
      return {
        id: id,
        name: ev.species.name,
        image: getPokemonSpriteUrl(id),
      };
    });

    return {
      name: pokemonDetails.name,
      height: pokemonDetails.height,
      weight: pokemonDetails.weight,
      image: spriteUrl,
      types: pokemonTypes,
      evolutionChain: pokemonEvoChain,
    };
  }
}
