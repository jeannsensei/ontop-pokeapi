import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { ImageFallbackDirective } from './image-fallback.directive';
import { SharedModule } from '../shared.module';
import { By } from '@angular/platform-browser';

@Component({
  template: ` <img appImageFallback src="invalid-url" alt="Fallback Image" /> `,
})
class TestComponent {
  imgUrlFallback: string | undefined;
}

describe('ImageFallbackDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let imgElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, ImageFallbackDirective],
      imports: [SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    imgElement = fixture.debugElement.query(By.css('img'));
    fixture.detectChanges();
  });

  it('should set the fallback image source when the original image fails to load', () => {
    const fallbackUrl = 'https://via.placeholder.com/50';
    component.imgUrlFallback = fallbackUrl;
    imgElement.nativeElement.dispatchEvent(new Event('error'));
    expect(imgElement.nativeElement.src).toBe(fallbackUrl);
  });
});
