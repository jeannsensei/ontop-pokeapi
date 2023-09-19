import { Store, StoreModule } from '@ngrx/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { AppState, ROOT_REDUCERS } from './../../../../state/app.state';

import { PokemonListComponent } from './pokemon-list.component';
import { PokemonService } from '../../services/pokemon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../../../shared/shared.module';
import { pokemonListMocked } from '../../../../mocks/ui-pokemon-item-container.component.mocks';
import { UiPokemonItemComponent } from '../../../../shared/components/ui-pokemon-item/ui-pokemon-item.component';

const initialState: AppState = {
  pokemonDetail: { isPokemonLoaded: true },
  pokemonList: {
    isLoaded: false,
    pokemonListItems: pokemonListMocked,
  },
};

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let store: Store<AppState>;
  const pokemonServiceMock = jasmine.createSpyObj('PokemonService', [
    'getPokemonList',
  ]);
  const mockPokemonList$ = of([pokemonListMocked]);

  beforeEach(async () => {
    // Create a mock ActivatedRoute object
    const activatedRouteMock = {
      snapshot: {
        paramMap: convertToParamMap({}),
      },
    };

    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent, UiPokemonItemComponent],
      imports: [
        StoreModule.forRoot(ROOT_REDUCERS),
        HttpClientTestingModule,
        SharedModule,
      ],
      providers: [
        provideMockStore({ initialState }),
        { provide: PokemonService, useValue: pokemonServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    pokemonServiceMock.getPokemonList.and.returnValue(mockPokemonList$);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadedPokemonList action on initialization', () => {
    spyOn(store, 'dispatch');

    component.ngOnInit();

    expect(pokemonServiceMock.getPokemonList).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalled();
  });
});
