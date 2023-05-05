import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() Nstatus= new EventEmitter <boolean>();
  
  clickEvent(){
    this.Nstatus.emit(true);
  }
}
