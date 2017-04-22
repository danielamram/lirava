import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import {HomeComponent} from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { FriendsComponent } from "./contact/contact.component";
import { ContactComponent } from "./friends/friends.component";
import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    FriendsComponent,
    ContactComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2PageScrollModule.forRoot()
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
