import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Pokemon } from './../../../core/models/pokemon.interface';
import { AppState } from 'src/app/state/app.state';
import { selectPokemonListItems } from 'src/app/state/selectors/pokemon-list.selectors';

@Component({
  selector: 'app-ui-pokemon-item-container',
  templateUrl: './ui-pokemon-item-container.component.html',
  styleUrls: ['./ui-pokemon-item-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiPokemonItemContainerComponent implements OnInit {
  pokemonList$: Observable<Pokemon[]> = new Observable();
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.pokemonList$ = this.store.select(selectPokemonListItems);
  }
}
