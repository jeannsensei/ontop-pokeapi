import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PokemonListActions } from '../../../../state/actions/pokemon-list.actions';
import { AppState } from '../../../../state/app.state';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe({
      next: pokemonListItems => {
        this.store.dispatch(
          PokemonListActions.loadedPokemonList({ pokemonListItems })
        );
      },
    });
  }
}
