import {Component} from '@angular/core';

@Component({
  selector: 'header-section',
  styleUrls: ['header.component.css'],
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  isClicked:boolean = false;

  toggleMenu() {
    this.isClicked = !this.isClicked;
  }
}
