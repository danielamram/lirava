import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  constructor(private elementRef: ElementRef) {
  }
}
