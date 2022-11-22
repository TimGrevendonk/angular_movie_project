import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Liked } from 'src/app/core/models/liked';
import { Movie } from 'src/app/core/models/movie';
import { LikedService } from 'src/app/core/services/liked.service';
import { MovieService } from 'src/app/shared/movie/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movies!: Movie[];
  isDetail: boolean = false;
  liked: Liked[] = [];

  constructor(private movieService: MovieService, private likedService: LikedService, private router: Router) {
  }

  // get the liked movies from myDB.
  ngOnInit(): void {
    this.likedService.getlikedMovieIds().subscribe(
      (res:any) => {
        res.forEach((liked: Liked) => this.liked.push(liked))
      }
    )
  }


  detail = (event:any, movie: Movie) => {
    event.stopPropagation();
    // this.router.navigate(["/movie", id]);
    console.log(this.movies);
    console.log(movie);
  }

}
