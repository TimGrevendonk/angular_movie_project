import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from '../pages/movie-detail/movie-detail.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnubTextPipe } from './pipes/snub-text.pipe';
import { AppRoutingModule } from '../app-routing.module';
import { SharedRoutingModule } from './shared-routing.module';
import { WatchlistRoutingModule } from '../watchlist/watchlist-routing.module';



@NgModule({
  declarations: [
    // MovieComponent,
    // FooterComponent,
    NavigationbarComponent
    // SnubTextPipe,
    // MovieComponent,
    // MovieListComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule
    // HttpClientModule,
    // AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    // SharedRoutingModule,
  ],
  exports: [
    // CommonModule,
    // HttpClientModule,
    // FormsModule,
    // MovieComponent,
    // FooterComponent,
    NavigationbarComponent
    // SnubTextPipe,
    // MovieComponent,
    // MovieListComponent,
  ]
})
export class SharedModule { }
