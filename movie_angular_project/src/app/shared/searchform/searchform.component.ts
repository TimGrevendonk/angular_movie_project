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
  styleUrls: ['./searchform.component.css'],
})
export class SearchformComponent implements OnInit {
  // genres querried (UNUSED)
  genres: Genre[] = [{ id: 0, name: '-error loading-' }];
  genres$: Subscription = new Subscription();
  // years for the dropdown menu.
  years: string[] = ['-error loading-'];

  // the movie (array for compatibility for other components.)
  movies: Movie[] = [];

  // bubble up the event to the parents.
  @Output() movieNameSearchEvent = new EventEmitter<Movie[]>();
  @Output() searchNameEvent = new EventEmitter<String>();
  // subscribe for changes.
  movies$: Subscription = new Subscription();

  // given name in the search field.
  name!: string;
  // given genre of the dropdown (UNUSED)
  genre!: number;
  // given year in the dropdown (defaults to the first one).
  year: string = this.years[0];
  // errormessage when no name is given.
  errorMessage: String = '';

  constructor(
    private genreService: GenreService,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setYears();
  }

  // Unsubscibe from subscription when the element is destroyed.
  ngOnDestroy(): void {
    this.genres$.unsubscribe();
  }
  // submit the form, emit the name, and querry the search.
  submit(): any {
    this.errorMessage = '';
    if (this.name != null) {
      this.searchNameEvent.emit(this.name);
      this.getMoviesByNameSearch();
    } else {
      // set the error when no name is given.
      this.errorMessage = 'Enter a movie name!';
    }
  }

  // Query movies from the movieDB by name and year and subscribe to it.
  getMoviesByNameSearch() {
    this.movies$ = this.movieService
      .getMoviesByNameSearch(this.name, this.year)
      .subscribe((r: any) => {
        this.movies = r.results;
        // // filter on genres (UNUSED).
        // if (this.genre) {
        //   this.movies.filter((m) => m.genre_ids?.includes(this.genre));
        // }
        this.movieNameSearchEvent.emit(this.movies);
      });
  }

  // Query genres movies from the movieDB and subscribe to it. (UNUSED)
  getMovieGenres() {
    this.genres$ = this.genreService
      .getMovieGenres()
      .subscribe((response: any) => {
        this.genres = response.genres;
      });
  }
  // set the years for the dropdown (dynamically) from 1970
  setYears() {
    let currentYear: number = new Date().getFullYear() ?? null;
    if (currentYear != null) {
      this.years = [];
      for (let i = 1970; i < currentYear; i++) {
        // unshift pushes the element at the front of the array (no need to sort)
        this.years.unshift(String(i));
      }
    }
  }
}
