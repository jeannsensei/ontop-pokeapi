import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPokemonItemContainerComponent } from './ui-pokemon-item-container.component';

describe('UiPokemonItemContainerComponent', () => {
  let component: UiPokemonItemContainerComponent;
  let fixture: ComponentFixture<UiPokemonItemContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPokemonItemContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPokemonItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
