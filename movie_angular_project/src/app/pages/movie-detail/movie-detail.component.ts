import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Liked } from 'src/app/core/models/liked';
import { Movie } from 'src/app/core/models/movie';
import { LikedService } from 'src/app/core/services/liked.service';
import { MovieService } from 'src/app/shared/movie/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie!: Movie;
  // the (single) liked movie is put in an array for compatability with other components.
  liked: Liked[] = [];
  rating!: number;
  description!: string;
  watched!: boolean;

  constructor(
    private movieService: MovieService,
    private likedService: LikedService,
    private route: ActivatedRoute
  ) {}

  // get the ID of the url and fill the movies.
  ngOnInit(): void {
    // get the ID from the url.
    const movieID = this.route.snapshot.paramMap.get('id');
    if (movieID != null) {
      this.getMovie(movieID);
      this.getLikedMovie(movieID);
    }
  }

  // fill the movie array from the open source API.
  getMovie(movieId: any) {
    let moviePlacehold = this.movieService.getMovieById(+movieId) ?? null;
    if (moviePlacehold != null) {
      this.movieService
        .getMovieById(+movieId)
        .subscribe((result) => (this.movie = result));
    }
  }

  // fill the liked movies from the local database.
  getLikedMovie(movieId: any) {
    let likedPlacehold = this.likedService.getlikedMovieById(+movieId) ?? null;
    if (likedPlacehold != null) {
      this.likedService
        .getlikedMovieById(+movieId)
        .subscribe((response: any) => {
          // add the liked movie to the array (array is needed for the app-button)
          this.liked.push(response),
            (this.rating = response.rating),
            (this.description = response.description),
            (this.watched = response.watched);
        });
    }
  }
  // Patch the description.
  setDescription() {
    console.log('discription', this.description);
    this.updateLikedMovie();
  }
  // Patch the rating.
  setRating(operator: string) {
    if (operator == '-' && this.rating > 0) {
      this.rating--;
      this.updateLikedMovie();
    } else if (operator == '+' && this.rating < 10) {
      this.rating++;
      this.updateLikedMovie();
    }
  }
  // Switch the state and Patch the watched state.
  toggleWatched() {
    this.watched = !this.watched;
    this.updateLikedMovie();
  }
  // patch the whole liked movie in the local database with the current values.
  updateLikedMovie() {
    this.likedService.patchLikedMovie(
      this.movie,
      this.rating,
      this.description,
      this.watched
    );
  }
}
