import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  @Input() zoom = 1.2;

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.transform = `scale(${this.zoom})`;
    this.elementRef.nativeElement.style.transition = `all 0.5s ease-in-out`;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.transform = '';
  }
}
