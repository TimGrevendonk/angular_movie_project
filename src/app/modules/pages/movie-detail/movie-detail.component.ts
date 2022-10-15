import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie = { id: 0, title: "", overview: "", release_date: "", genre_ids: []};

  constructor(private movieService : MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const movieID = this.route.snapshot.paramMap.get("id");
    if (movieID != null) {
      let moviePlacehold = this.movieService.getMovieById(+movieID) ?? null;
      if(moviePlacehold != null) {
        this.movieService.getMovieById(+movieID).subscribe(result => this.movie = result);
      }
    }
  }

}
