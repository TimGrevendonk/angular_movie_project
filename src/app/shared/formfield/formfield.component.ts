import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Genre } from 'src/app/core/models/genre';
import { GenreService } from 'src/app/core/services/genre.service';

@Component({
  selector: 'shared-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.css']
})
export class FormfieldComponent implements OnInit {
  genreList!: Genre[];
  genres$: Subscription = new Subscription();

  constructor(private movieService : GenreService, private router: Router) {

  }

  ngOnInit(): void {
  }

  // Unsubscibe from subscription when the element is destroyed.
  ngOnDestroy(): void {
    this.genres$.unsubscribe();
  }

  // Query popular movies from the movieDB and subscribe to it.
  getPopularMovies(){
    this.genres$ = this.movieService.getMovieGenres().subscribe(
      (r:any) => {
      this.genreList = r.results;
    }
    )
  }
}
