import { AfterViewInit, Component, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent implements AfterViewInit{
  @Input() list;

  ngAfterViewInit(){
    $('.equal-heights .col-md-4').matchHeight();
    console.log(this.list);
  }
}
