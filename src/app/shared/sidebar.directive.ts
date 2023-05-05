import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appToggle]'
})
export class SidebarDirective{
  @HostBinding('class.close')  isOpen = false;
 @HostListener('document: click',['$event']) toggleOpen(event: Event){

    
    this.isOpen = this.elRef.nativeElement.contains(event.target)?false:true;
 }
 constructor(private elRef: ElementRef){}
}