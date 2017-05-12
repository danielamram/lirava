import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import wow from 'wow.js';

@Component({
  selector: 'home',
  styleUrls: ['home.component.css'],
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  public obj: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) {
    console.log(wow);
    this.obj = db.object('/');
  }
}
