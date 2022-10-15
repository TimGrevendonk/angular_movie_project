import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from '../../../core/models/movie';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  // popularMovies: Movie[] = [];
  popularMovies: Movie[] = [];
  popularMovies$: Observable<Movie[]> = new Observable<Movie[]>();

  constructor(private movieService : MovieService, private router: Router) {
  }
  // Initialize the component and load the popular movies.
  ngOnInit(): void {
    this.getPopularMovies();
  }
  // ngOnDestroy(): void {
  //   this.popularMovies$.unsubscribe();
  // }

  // Query popular movie sfrom the movieDB and subscribe to it.
  getPopularMovies(){
    // this.popularMovies$ = this.movieService.getPopularMovies().subscribe(result => this.popularMovies = result)
    this.popularMovies$ = this.movieService.getPopularMovies();
    console.log("popularMovies:", this.popularMovies);
  }

}
