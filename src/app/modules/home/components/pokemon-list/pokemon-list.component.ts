import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPokemonListLoading } from './../../../../state/selectors/pokemon-list.selectors';

import { PokemonListActions } from '../../../../state/actions/pokemon-list.actions';
import { AppState } from '../../../../state/app.state';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  isLoading$: Observable<boolean> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectPokemonListLoading);
    this.store.dispatch(PokemonListActions.getPokemonList());
  }
}
