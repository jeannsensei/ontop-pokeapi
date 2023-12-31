import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPokemonItemComponent } from './ui-pokemon-item.component';

describe('UiPokemonItemComponent', () => {
  let component: UiPokemonItemComponent;
  let fixture: ComponentFixture<UiPokemonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiPokemonItemComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UiPokemonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
