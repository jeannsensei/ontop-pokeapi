import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.interface';

@Component({
  selector: 'app-ui-pokemon-item',
  templateUrl: './ui-pokemon-item.component.html',
  styleUrls: ['./ui-pokemon-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPokemonItemComponent {
  @Input() pokemon: Pokemon | undefined;
}
