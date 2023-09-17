import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImageFallback]',
})
export class ImageFallbackDirective {
  @Input() imgUrlFallback: string | undefined;

  constructor(private elementRef: ElementRef) {}

  @HostListener('error')
  loadFallbackOnError() {
    const element = <HTMLImageElement>this.elementRef.nativeElement;
    element.src = this.imgUrlFallback || 'https://via.placeholder.com/50';
  }
}
