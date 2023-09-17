import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPokemonItemComponent } from './components/ui-pokemon-item/ui-pokemon-item.component';
import { UiPokemonItemContainerComponent } from './components/ui-pokemon-item-container/ui-pokemon-item-container.component';
import { ImageFallbackDirective } from './directives/image-fallback.directive';

@NgModule({
  declarations: [
    UiPokemonItemComponent,
    UiPokemonItemContainerComponent,
    ImageFallbackDirective,
  ],
  imports: [CommonModule],
  exports: [
    UiPokemonItemContainerComponent,
    UiPokemonItemComponent,
    ImageFallbackDirective,
  ],
})
export class SharedModule {}
