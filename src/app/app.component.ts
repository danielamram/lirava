import {Component, ViewEncapsulation, Input} from '@angular/core';
import {MnFullpageOptions} from "ng2-fullpage";

@Component({
  selector: 'app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent{
  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    keyboardScrolling: true,
    controlArrows: false,
    menu: '#menu',
    anchors: ['home', 'about', 'services', 'friends', 'contact'],
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    recordHistory: false,
    normalScrollElements: 'sebm-google-map'
  });
}
