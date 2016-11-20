import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbdropdown]'
})
export class Dropdown {
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }

  @HostListener('click') open() {
    console.log('debug: clicked-open');
    this.isOpen = true; 
  }

  @HostListener('mouseleave') close() {
    console.log('debug: clicked-mouseleave');
    this.isOpen = false; 
  }

  private isOpen = false;
  
  constructor() { }

}
