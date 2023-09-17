import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

import { Pokemon } from './../../../core/models/pokemon.interface';
import { PokemonListResponse } from '../../../core/models/pokemon.interface';
import { getPokemonIdFromUrl } from './utils/getPokemonIdFromUrl';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    // TODO: paginate - 1273
    return this.http
      .get<PokemonListResponse>(`${environment.baseurl}pokemon?limit=10`)
      .pipe(map(this.getPokemonCompleteInfo));
  }

  private getPokemonCompleteInfo(
    response: PokemonListResponse
  ): Array<Pokemon> {
    const pokemonList = response.results.map((pokemon) => {
      const pokemonId = getPokemonIdFromUrl(pokemon.url);
      const transformeSpriteUrl = environment.spriteBaseurl.replace(
        /{{(.*?)}}/,
        pokemonId
      );
      return {
        id: pokemonId,
        name: pokemon.name,
        image: transformeSpriteUrl,
      };
    });

    return pokemonList;
  }
}
