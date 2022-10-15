import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './modules/pages/homepage/homepage.component';
import { WatchlistComponent } from './modules/pages/watchlist/watchlist.component';
import { SearchlistComponent } from './modules/pages/searchlist/searchlist.component';
import { NavigationbarComponent } from './shared/navigationbar/navigationbar.component';

import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './modules/components/movie/movie.component';
import { PopularMoviesComponent } from './modules/components/popular-movies/popular-movies.component';
import { MovieDetailComponent } from './modules/pages/movie-detail/movie-detail.component';
import { SnubTextPipe } from './core/pipes/snub-text.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WatchlistComponent,
    HomepageComponent,
    NavigationbarComponent,
    SearchlistComponent,
    MovieComponent,
    PopularMoviesComponent,
    MovieDetailComponent,
    SnubTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
