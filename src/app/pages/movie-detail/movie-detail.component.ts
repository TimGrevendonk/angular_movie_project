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
  liked!: Liked;
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
    const movieID = this.route.snapshot.paramMap.get('id');
    if (movieID != null) {
      this.getMovie(movieID);
      this.getLikedMovie(movieID);
    }
  }

  // fill the movie movie attribute.
  getMovie(movieId: any) {
    let moviePlacehold = this.movieService.getMovieById(+movieId) ?? null;
    if (moviePlacehold != null) {
      this.movieService
        .getMovieById(+movieId)
        .subscribe((result) => (this.movie = result));
    }
  }

  // fill the liked movie attribute.
  getLikedMovie(movieId: any) {
    let likedPlacehold = this.likedService.getlikedMovieById(+movieId) ?? null;

    if (likedPlacehold != null) {
      this.likedService
        .getlikedMovieById(+movieId)
        .subscribe((response: any) => {
          (this.liked = response),
            (this.rating = response.rating),
            (this.description = response.description),
            (this.watched = response.watched),
            // debug init of everything.
            console.log('liked init', this.liked);
          console.log('movie init', this.movie);
          console.log('rating init', this.rating);
          console.log('descritpion init', this.description);
          console.log('watched init', this.watched);
        });
    }
  }

  setDescritpion() {
    console.log('setting description');
  }

  setRating() {
    console.log('setting rating');
  }

  toggleWatched() {
    this.watched = !this.watched;
    this.updateLikedMovie();
    console.log('watched', this.watched);
  }

  // yoh bruf fix the liked button that it switches.

  updateLikedMovie() {
    this.likedService.patchLikedMovie(
      this.movie,
      this.rating,
      this.description,
      this.watched
    );
  }

  save(event: any): void {
    event.stopPropagation();
    this.likedService.postLikedMovie(this.movie, 0, '', false);
    console.log('liked', this.liked);
    console.log('movie', this.movie);
  }

  remove(event: any): void {
    event.stopPropagation();
    this.likedService.deleteLikedMovie(this.movie.id);
    console.log('liked', this.liked);
    console.log('movie', this.movie);
  }
}
