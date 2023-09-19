import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPokemonItemContainerComponent } from './ui-pokemon-item-container.component';
import { StoreModule } from '@ngrx/store';
import { AppState, ROOT_REDUCERS } from 'src/app/state/app.state';
import { UiPokemonItemComponent } from '../ui-pokemon-item/ui-pokemon-item.component';
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

const initialState: AppState = {
  pokemonDetail: { isPokemonLoaded: true },
  pokemonList: {
    isLoaded: false,
    pokemonListItems: [],
  },
};

describe('UiPokemonItemContainerComponent', () => {
  let component: UiPokemonItemContainerComponent;
  let fixture: ComponentFixture<UiPokemonItemContainerComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiPokemonItemContainerComponent, UiPokemonItemComponent],
      imports: [StoreModule.forRoot(ROOT_REDUCERS), RouterTestingModule],
      providers: [
        provideMockStore({ initialState }),
        // Other necessary providers...
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UiPokemonItemContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the pagination with currentPage 1 and increase it by 1', () => {
    // Set initial current page
    component.currentPage = 1;
    // Simulate click on previous button
    const prevButton = fixture.nativeElement.querySelector('.prev-btn');
    prevButton.click();
    expect(component.currentPage).toBe(1);
    // Simulate click on next button
    const nextButton = fixture.nativeElement.querySelector('.next-btn');
    nextButton.click();
    expect(component.currentPage).toBe(2);
  });

  it('should render app-ui-pokemon-item', async () => {
    const { debugElement } = fixture;
    const mockState = {
      pokemonDetail: { isPokemonLoaded: true },
      pokemonList: {
        isLoading: false,
        pokemonListItems: [
          {
            id: '1',
            name: 'Pikachu',
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
            slug: 'pikachu',
          },
        ],
      },
    };
    store.setState(mockState);
    fixture.detectChanges();

    const childComponent = debugElement.query(By.css('app-ui-pokemon-item'));
    expect(childComponent).toBeTruthy();
  });
});
