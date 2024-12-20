import { TagContentType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { MovieService } from 'src/app/shared/movie/movie.service';
import { Movie } from '../../core/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  // Input for wich movieList to querry.
  @Input() listType!: String;
  // movielist is response from querries and given to its child elements.
  movieList!: Movie[];
  // subscription is for whe nthe movies change, they will be updated.
  Movies$: Subscription = new Subscription();

  constructor(private movieService: MovieService, private router: Router) {}
  // Initialize the component and load in the wanted list.
  ngOnInit(): void {
    switch (this.listType) {
      case 'popularMovies':
        this.getPopularMovies();
        break;
      case 'now playing':
        this.getPlayingMovies();
        break;
      case 'top rated':
        this.getTopRatedMovies();
        break;
      case 'trending':
        this.getTrendingMovies();
        break;
      default:
        this.getPopularMovies();
    }
  }

  // Unsubscibe from subscriptio when the element is destroyed.
  ngOnDestroy(): void {
    this.Movies$.unsubscribe();
  }

  // shuffle the list so it does not look ike there are duplicate rows (visually).
  shuffleList(movieList: Movie[]) {
    return movieList.sort(() => Math.random() - 0.5);
  }

  // Query popular movies from the movieDB and subscribe to it.
  getPopularMovies() {
    this.Movies$ = this.movieService.getPopularMovies().subscribe((r: any) => {
      this.movieList = r.results;
    });
  }

  // Query playing movies from the movieDB and subscribe to it.
  getPlayingMovies() {
    this.Movies$ = this.movieService.getPlayingMovies().subscribe((r: any) => {
      this.movieList = this.shuffleList(r.results);
    });
  }

  // Query top rated movies from the movieDB and subscribe to it.
  getTopRatedMovies() {
    this.Movies$ = this.movieService.getTopRatedMovies().subscribe((r: any) => {
      this.movieList = this.shuffleList(r.results);
    });
  }

  // Query trending movies from the movieDB and subscribe to it.
  getTrendingMovies() {
    this.Movies$ = this.movieService.getTrendingMovies().subscribe((r: any) => {
      this.movieList = r.results;
    });
  }
}
