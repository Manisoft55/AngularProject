import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[highlight]',
})

export class HighlightDirective {
        constructor(private eleRef: ElementRef) { }

    @HostListener('mouseover') onMouseover() {
        this.eleRef.nativeElement.style.color = 'red';

    }

    @HostListener('mouseleave') onMouseLeave() {
        this.eleRef.nativeElement.style.color = 'black';
    }
}