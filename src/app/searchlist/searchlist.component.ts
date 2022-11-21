import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Genre } from '../core/models/genre';
import { Movie } from '../core/models/movie';
import { GenreService } from '../core/services/genre.service';
import { MovieService } from '../shared/movie/movie.service';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})
export class SearchlistComponent implements OnInit {
  @Input() movies: Movie[] = [];


  constructor(private movieService : MovieService, private router: Router) {
  }

  ngOnInit(): void {
  }

  getMovies($event:any){
    this.movies = $event
  }
}
