import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { WatchlistComponent } from './modules/watchlist/watchlist.component';
import { NavigationbarComponent } from './shared/navigationbar/navigationbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchlistComponent,
    HomepageComponent,
    NavigationbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
