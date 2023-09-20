import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetails } from '../../../../core/models/pokemon.interface';
import { selectPokemonDetailLoading } from './../../../../state/selectors/pokemon-detail.selectors';
import { PokemonDetailActions } from './../../../../state/actions/pokemon-detail.actions';
import { AppState } from '../../../../state/app.state';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  pokemonDetails: PokemonDetails | undefined = undefined;
  isPokemonLoaded$: Observable<boolean> = new Observable();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.isPokemonLoaded$ = this.store.select(selectPokemonDetailLoading);
    this.route.queryParams.subscribe(params => {
      this.checkRouteId(params);
    });
  }

  checkRouteId(params: Params) {
    const { id } = params;
    const isNumber = Number(id);
    if (!isNumber) {
      this.router.navigate(['/']);
      return;
    }
    this.getPokemonDetails(id);
  }

  getPokemonDetails(id: string): void {
    this.pokemonService.getPokemonDetails(id).subscribe({
      next: pokemonDetails => {
        this.pokemonDetails = pokemonDetails;
        this.store.dispatch(
          PokemonDetailActions.setLoadingPokemonDetail({
            isPokemonLoaded: true,
          })
        );
      },
      error: err => {
        console.error(err);
      },
    });
  }
}
