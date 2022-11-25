import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Liked } from 'src/app/core/models/liked';
import { Movie } from 'src/app/core/models/movie';
import { LikedService } from 'src/app/core/services/liked.service';
import { MovieService } from 'src/app/shared/movie/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  // Used to set the html items.
  @Input() movies!: Movie[];
  // Locally saved movies for child components.
  liked: Liked[] = [];

  constructor(
    private movieService: MovieService,
    private likedService: LikedService,
    private router: Router
  ) {}

  // get the liked movies from myDB, this will be passed to child components.
  ngOnInit(): void {
    this.likedService.getlikedMovies().subscribe((res: any) => {
      res.forEach((liked: Liked) => this.liked.push(liked));
    });
  }

  // route to the detail page without reload.
  detail = (event: any, movie: Movie) => {
    event.stopPropagation();
    // console.log(this.movies);
    this.router.navigate(['/movie', movie.id]);
  };
}
