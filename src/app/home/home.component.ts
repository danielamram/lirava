import {Component} from '@angular/core';
import {MnFullpageService} from "ng2-fullpage";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent{
  videoMp4:any;
  videoWebm:any;
  constructor(private fullpageService: MnFullpageService) {
    this.videoMp4 = require('../..//assets/video.mp4');
    this.videoWebm = require('../../assets/video.webm');
  }
}
