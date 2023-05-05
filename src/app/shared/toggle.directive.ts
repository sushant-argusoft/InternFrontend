import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appToggle]'
})
export class ToggleDirective{
  @HostBinding('class.close')  isOpen = true;
 @HostListener('document: click',['$event']) toggleOpen(event: Event){

    this.isOpen = this.elRef.nativeElement.contains(event.target)?!this.isOpen:false;
 }
 constructor(private elRef: ElementRef){}
}