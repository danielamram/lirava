import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MnFullpageDirective, MnFullpageService } from "ng2-fullpage";

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent} from "./about/about.component";
import { FriendsComponent } from "./contact/contact.component";
import { ContactComponent } from "./friends/friends.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    FriendsComponent,
    ContactComponent,
    MnFullpageDirective
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    MnFullpageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
