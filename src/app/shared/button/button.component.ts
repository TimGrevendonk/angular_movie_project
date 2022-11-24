import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { sample } from 'rxjs';
import { Liked } from 'src/app/core/models/liked';
import { Movie } from 'src/app/core/models/movie';
import { LikedService } from 'src/app/core/services/liked.service';
import { MovieService } from '../movie/movie.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() movie!: Movie;
  @Input() liked!: Liked[];
  isSaved: boolean = false;

  constructor(
    private movieService: MovieService,
    private likedService: LikedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // need this timeout because the @Input has a slight delay over init
    setTimeout(() => {
      this.checkSaved();
    }, 40);
  }

  checkSaved(): void {
    // check that the current movie is in the liked movies array.
    let ids: number[] = [];

    this.liked.forEach((l) => {
      ids.push(l.id);
    });
    // if so: set the saved to true (because the movie is found in the array).
    if (ids.includes(this.movie.id)) {
      this.isSaved = true;
    }
  }

  toggleSaved(event: any): void {
    event.stopPropagation();
    if (this.isSaved) {
      this.likedService.deleteLikedMovie(this.movie.id);
      console.log('removed', this.movie);
    } else {
      this.likedService.postLikedMovie(this.movie, 0, '');
      console.log('saved', this.movie);
    }
    // set the state for event binding, it will only check on initialize.
    this.isSaved = !this.isSaved;
  }
}
