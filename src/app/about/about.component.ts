import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  public abouts$: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase) {
    this.abouts$ = db.list('/about');
  }
}
