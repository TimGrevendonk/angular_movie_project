import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { MovieService } from 'src/app/shared/movie/movie.service';
import { Movie } from '../../core/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList!: Movie[];
  popularMovies$: Subscription = new Subscription();

  constructor(private movieService : MovieService, private router: Router) {

  }
  // Initialize the component and load in the popularMovies list.
  ngOnInit(): void {
    this.getPopularMovies();
  }
  // Unsubscibe from subscriptio when the element is destroyed.
  ngOnDestroy(): void {
    this.popularMovies$.unsubscribe();
  }

  // Query popular movies from the movieDB and subscribe to it.
  getPopularMovies(){
    this.popularMovies$ = this.movieService.getPopularMovies().subscribe(
      (r:any) => {
      this.movieList = r.results,
      console.log("r",r.results);
    }
    )
  }

}
