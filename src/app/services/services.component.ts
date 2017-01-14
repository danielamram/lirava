import { Component} from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: 'services.component.html',
  styleUrls: ['services.component.css']
})
export class ServicesComponent{
  // google maps zoom level
  zoom: number = 10;

  // initial center position for the map
  lat: number = 32.091882620021806;
  lng: number = 34.87335205078125;
}
