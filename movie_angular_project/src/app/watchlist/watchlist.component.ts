import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'postcss';
import { Observable, Subscription } from 'rxjs';
import { Liked } from '../core/models/liked';
import { Movie } from '../core/models/movie';
import { LikedService } from '../core/services/liked.service';
import { MovieService } from '../shared/movie/movie.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {
  // all liked movies in the list, subscribed for change.
  movies: any = [];
  movies$: Subscription = new Subscription();

  constructor(
    private movieService: MovieService,
    private likedService: LikedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLikedMovies();
  }

  // Unsubscibe from subscription when the element is destroyed.
  ngOnDestroy(): void {
    this.movies$.unsubscribe();
  }

  // Query liked movies from the myDB and the query the movieDb with those results.
  getLikedMovies() {
    this.movies$ = this.likedService
      .getlikedMovies()
      .subscribe((response: any) => {
        this.reQuerry(response);
      });
  }
  // get the full movie from the API per local liked movie.
  reQuerry(res: Liked[]) {
    res.forEach((movie) =>
      this.movieService.getMovieById(movie.id).subscribe(
        (res: any) => {
          this.movies.push(res);
        },
        (err) => {
          console.log('querry failed', err);
        }
      )
    );
  }
}
