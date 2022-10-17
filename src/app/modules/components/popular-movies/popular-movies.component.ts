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
  popularMovies!: Movie[];
  popularMovies$: Subscription = new Subscription();

  constructor(private movieService : MovieService, private router: Router) {

  }
  // Initialize the component and load in the popular movies.
  ngOnInit(): void {
    this.getPopularMovies();
  }
  // Unsubscibe from subscriptio when the element is destroyed.
  ngOnDestroy(): void {
    this.popularMovies$.unsubscribe();
  }

  // Query popular movie sfrom the movieDB and subscribe to it.
  getPopularMovies(){
    this.popularMovies$ = this.movieService.getPopularMovies().subscribe(
      (r:any) => {
      this.popularMovies = r.results,
      console.log("r",r.results);
    }
    )
  }

}
