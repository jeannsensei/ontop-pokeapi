import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.checkRouteId(params));
  }

  checkRouteId(params: Params) {
    const { id } = params;
    if (!Number(id)) {
      this.router.navigate(['/']);
      return;
    }
    this.getPokemonDetails(id);
  }

  getPokemonDetails(id: string) {
    console.log(id);
    // TODO:
    this.pokemonService.getPokemonDetails(id).subscribe(data => {
      console.log('pokemon-detail-component', data);
    });
  }
}
