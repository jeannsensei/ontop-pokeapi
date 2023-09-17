import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { PokemonDetails } from './../../../core/models/pokemon.interface';

@Component({
  selector: 'app-ui-pokemon-details',
  templateUrl: './ui-pokemon-details.component.html',
  styleUrls: ['./ui-pokemon-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPokemonDetailsComponent {
  @Input() pokemonDetails: PokemonDetails | undefined;
}
