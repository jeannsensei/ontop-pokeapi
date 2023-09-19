import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPokemonDetailsComponent } from './ui-pokemon-details.component';

xdescribe('UiPokemonDetailsComponent', () => {
  let component: UiPokemonDetailsComponent;
  let fixture: ComponentFixture<UiPokemonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiPokemonDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiPokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
