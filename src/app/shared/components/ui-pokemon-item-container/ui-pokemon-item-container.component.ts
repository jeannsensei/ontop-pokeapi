import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { Pokemon } from './../../../core/models/pokemon.interface';
import { AppState } from 'src/app/state/app.state';
import { selectPokemonListItems } from 'src/app/state/selectors/pokemon-list.selectors';

@Component({
  selector: 'app-ui-pokemon-item-container',
  templateUrl: './ui-pokemon-item-container.component.html',
  styleUrls: ['./ui-pokemon-item-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPokemonItemContainerComponent implements OnInit {
  pokemonList$: Observable<Pokemon[]> = new Observable();
  currentPage = 1;
  itemsPerPage = 10;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.pokemonList$ = this.store
      .select(selectPokemonListItems)
      .pipe(map(pokemonList => this.paginateList(pokemonList)));
  }

  paginateList(pokemonList: Pokemon[]) {
    const startItem = (this.currentPage - 1) * this.itemsPerPage;
    const endItem = this.currentPage * this.itemsPerPage;
    const pokemonListPaginated = pokemonList.slice(startItem, endItem);
    return pokemonListPaginated;
  }

  nextPageHandler() {
    this.currentPage += 1;
    this.onPageChanged();
  }

  prevPageHandler() {
    if (this.currentPage === 1) return;
    this.currentPage -= 1;
    this.onPageChanged();
  }

  onPageChanged() {
    this.pokemonList$ = this.store
      .select(selectPokemonListItems)
      .pipe(map(pokemonList => this.paginateList(pokemonList)));
  }
}
