import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPokemonItemComponent } from './components/ui-pokemon-item/ui-pokemon-item.component';
import { UiPokemonItemContainerComponent } from './components/ui-pokemon-item-container/ui-pokemon-item-container.component';
import { ImageFallbackDirective } from './directives/image-fallback.directive';
import { RouterModule } from '@angular/router';
import { UiPokemonDetailsComponent } from './components/ui-pokemon-details/ui-pokemon-details.component';

@NgModule({
  declarations: [
    UiPokemonItemComponent,
    UiPokemonItemContainerComponent,
    ImageFallbackDirective,
    UiPokemonDetailsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    UiPokemonItemContainerComponent,
    UiPokemonItemComponent,
    ImageFallbackDirective,
    UiPokemonDetailsComponent,
  ],
})
export class SharedModule {}
