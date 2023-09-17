import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ImageFallbackDirective } from './directives/image-fallback.directive';
import { UiPokemonItemComponent } from './components/ui-pokemon-item/ui-pokemon-item.component';
import { UiPokemonItemContainerComponent } from './components/ui-pokemon-item-container/ui-pokemon-item-container.component';
import { UiPokemonDetailsComponent } from './components/ui-pokemon-details/ui-pokemon-details.component';

@NgModule({
  declarations: [
    UiPokemonItemComponent,
    UiPokemonItemContainerComponent,
    UiPokemonDetailsComponent,
    ImageFallbackDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    UiPokemonItemContainerComponent,
    UiPokemonItemComponent,
    UiPokemonDetailsComponent,
    ImageFallbackDirective,
  ],
})
export class SharedModule {}
