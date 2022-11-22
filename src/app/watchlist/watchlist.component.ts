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
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  movies : any = [];
  movies$: Subscription = new Subscription();

  constructor(
    private movieService : MovieService,
    private likedService : LikedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getLikedMoviesIds();
  }

  // Unsubscibe from subscription when the element is destroyed.
  ngOnDestroy(): void {
    this.movies$.unsubscribe();
  }

  getLiked($event:any) {
    this.movies = $event
  }

  // Query liked movies from the myDB and the query the movieDb with those results.
  getLikedMoviesIds(){
    this.movies$ = this.likedService.getlikedMovieIds().subscribe(
      (response:any) => {
        this.reQuerry(response)
    }
    )
  }

  reQuerry(res: Liked[]){
    res.forEach(movie => this.movieService.getMovieById(movie.id).subscribe(
      (res:any) => {
        this.movies.push(res);
      console.log("2", res);

      },
      (err) => {
        console.log("querry failed", err);
      }
    ))
  }

}
