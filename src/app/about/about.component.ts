import {Component} from '@angular/core';
import {MnFullpageService} from "ng2-fullpage";

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  constructor(private fullpageService: MnFullpageService) {
  }
}
