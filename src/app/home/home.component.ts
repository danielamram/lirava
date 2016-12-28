import {Component} from '@angular/core';
import {MnFullpageService} from "ng2-fullpage";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent{
  video:any;
  video2:any;
  constructor(private fullpageService: MnFullpageService) {
    this.video = require('../..//assets/video.mp4');
    this.video2 = require('../../assets/video.webm');
  }
}
