import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPokemonListLoading } from './../../../../state/selectors/pokemon-list.selectors';

import { PokemonListActions } from '../../../../state/actions/pokemon-list.actions';
import { AppState } from '../../../../state/app.state';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListComponent implements OnInit {
  isLoading$: Observable<boolean> = new Observable();

  constructor(
    private store: Store<AppState>,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectPokemonListLoading);

    this.store.dispatch(PokemonListActions.loadingPokemonList());

    this.pokemonService.getPokemonList().subscribe({
      next: (pokemonListItems) => {
        this.store.dispatch(
          PokemonListActions.loadedPokemonList({ pokemonListItems })
        );
      },
    });
  }
}
