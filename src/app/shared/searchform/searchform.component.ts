import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Genre } from 'src/app/core/models/genre';
import { Movie } from 'src/app/core/models/movie';
import { GenreService } from 'src/app/core/services/genre.service';
import { MovieService } from '../movie/movie.service';


@Component({
  selector: 'shared-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  genres!: Genre[];
  genres$: Subscription = new Subscription();

  movies : Movie[] = [];
  @Output() movieNameSearchEvent = new EventEmitter<Movie[]>();
  movies$: Subscription = new Subscription();

  name!: string;
  genre! : number[];

  errorMessage: String = "";


  constructor(
    private genreService : GenreService,
    private movieService : MovieService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.getMovieGenres();
  }

  // Unsubscibe from subscription when the element is destroyed.
  ngOnDestroy(): void {
    this.genres$.unsubscribe();
  }

  submit(): any {
    this.getMoviesByNameSearch();
  }


  // Query popular movies from the movieDB and subscribe to it.
  getMoviesByNameSearch(){
    this.movies$ = this.movieService.getMoviesByNameSearch(this.name).subscribe(
      (r:any) => {
      this.movies = r.results,
      this.movieNameSearchEvent.emit(this.movies);
    }
    )
    // FIX THE GENRE FILTER PLZ!!!
    if (this.genre){
      this.movies.filter((movie) => movie.genre_ids == this.genre)
    }
  }

  // Query popular movies from the movieDB and subscribe to it.
  getMovieGenres(){
    this.genres$ = this.genreService.getMovieGenres().subscribe(
      (response:any) => {
      this.genres = response.genres;
    }
    )
  }

}
