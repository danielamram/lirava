import {Component} from '@angular/core';
import {MnFullpageService} from "ng2-fullpage";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent{
  constructor(private fullpageService: MnFullpageService) {

  }
}
