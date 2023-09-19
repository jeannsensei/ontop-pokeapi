import {
  expectedPokemonDetailsResponse,
  getPokemonDetailsMockResponse,
  getPokemonListMockExpectedResponse,
  getPokemonListMockResponse,
  mockPokemonSpeciesMockResponse,
  pokemonEvolutionChainMockResponse,
} from './../../../mocks/pokemon.service.mocks';
import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';
import { environment } from '../../../../environments/environment';

describe('PokemonService', () => {
  let service: PokemonService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    });
    service = TestBed.inject(PokemonService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of Pokemon', () => {
    service.getPokemonList().subscribe(pokemonList => {
      expect(pokemonList).toEqual(getPokemonListMockExpectedResponse);
    });

    const req = controller.expectOne(
      `${environment.baseurl}/pokemon?limit=1273`
    );
    expect(req.request.method).toBe('GET');
    req.flush(getPokemonListMockResponse);
  });

  it('should return the pokemon details', () => {
    const fakePokemonId = '1';
    service.getPokemonDetails('1').subscribe(transformedPokemonDetails => {
      expect(transformedPokemonDetails).toEqual(expectedPokemonDetailsResponse);
    });

    // 1st request to get pokemon details
    const pokemonDetailsReq = controller.expectOne(
      `${environment.baseurl}/pokemon/${fakePokemonId}`
    );
    expect(pokemonDetailsReq.request.method).toBe('GET');
    pokemonDetailsReq.flush(getPokemonDetailsMockResponse);
    // 2nd request to get pokemon species url
    const pokemonSpeciesReq = controller.expectOne(
      getPokemonDetailsMockResponse.species.url
    );
    expect(pokemonSpeciesReq.request.method).toBe('GET');
    pokemonSpeciesReq.flush(mockPokemonSpeciesMockResponse);
    // 3rd request to get evolution chain
    const pokemonEvolutionChainReq = controller.expectOne(
      mockPokemonSpeciesMockResponse.evolution_chain.url
    );
    expect(pokemonEvolutionChainReq.request.method).toBe('GET');
    pokemonEvolutionChainReq.flush(pokemonEvolutionChainMockResponse);
  });
});
