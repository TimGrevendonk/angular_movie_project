import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { NavigationbarComponent } from './shared/navigationbar/navigationbar.component';

import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './shared/movie/movie.component';
import { MovieListComponent } from './shared/movie-list/movie-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { SnubTextPipe } from './shared/pipes/snub-text.pipe';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WatchlistModule } from './watchlist/watchlist.module';
import { SearchformComponent } from './shared/searchform/searchform.component';
// import { MovieModule } from './modules/movie/movie.module';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MovieListComponent,
    MovieDetailComponent,
    // say here what modules to "attach" to this module.
    // MovieModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
