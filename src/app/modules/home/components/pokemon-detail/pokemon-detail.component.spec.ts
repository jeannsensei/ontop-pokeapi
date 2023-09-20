import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BehaviorSubject, of } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { AppState, ROOT_REDUCERS } from './../../../../state/app.state';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { SharedModule } from '../../../../shared/shared.module';
import { UiPokemonDetailsComponent } from '../../../../shared/components/ui-pokemon-details/ui-pokemon-details.component';
import { PokemonService } from '../../services/pokemon.service';
import { expectedPokemonDetailsResponse } from '../../../../mocks/pokemon.service.mocks';

const initialState: AppState = {
  pokemonDetail: { isPokemonLoaded: true },
  pokemonList: {
    isLoaded: false,
    pokemonListItems: [],
  },
};

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;
  let store: Store<AppState>;
  let queryParamsSubject: BehaviorSubject<Params>;
  let pokemonService: PokemonService;
  let router: Router;

  beforeEach(async () => {
    queryParamsSubject = new BehaviorSubject<Params>({});
    await TestBed.configureTestingModule({
      declarations: [PokemonDetailComponent, UiPokemonDetailsComponent],
      imports: [
        SharedModule,
        StoreModule.forRoot(ROOT_REDUCERS),
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: queryParamsSubject.asObservable(),
          },
        },
        {
          provide: PokemonService,
          useValue: {
            getPokemonDetails: () => of(expectedPokemonDetailsResponse),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    store = TestBed.inject(Store);
    pokemonService = TestBed.inject(PokemonService);
  });

  it('should create', () => {
    const newParams: Params = { id: '1' };
    queryParamsSubject.next(newParams);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should go to the pokemon list route if the id is invalid', () => {
    spyOn(store, 'select').and.returnValue(of(false));
    const newParams = { id: 'adfasf' };
    queryParamsSubject.next(newParams);
    fixture.detectChanges();

    const currentUrl = router.url;
    expect(currentUrl).toBe('/');
    expect(component).toBeTruthy();
    expect(store.select).toHaveBeenCalled();
  });

  it('should stay in the same route if ID is valid and get pokemon details', () => {
    spyOn(store, 'select').and.returnValue(of(true));
    const newParams = { id: '1' };
    queryParamsSubject.next(newParams);
    spyOn(component, 'getPokemonDetails');

    fixture.detectChanges();

    pokemonService
      .getPokemonDetails('1')
      .subscribe(transformedPokemonDetails => {
        expect(transformedPokemonDetails).toEqual(
          expectedPokemonDetailsResponse
        );
        expect(store.select).toHaveBeenCalled();
      });

    expect(component.getPokemonDetails).toHaveBeenCalledWith('1');
  });
});
