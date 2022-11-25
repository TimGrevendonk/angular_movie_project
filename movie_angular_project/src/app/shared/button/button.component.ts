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
  // the current movie to compare to the liked movie.
  @Input() movie!: Movie;
  // the liked movie to compare with and have data from.
  @Input() liked!: Liked[];
  // The state of this movie.
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

  // check that the current movie is in the liked movies array.
  checkSaved(): void {
    let ids: number[] = [];
    // Fill the Array with liked movie ids.
    this.liked.forEach((l) => {
      ids.push(l.id);
    });
    // Set saved to true (if the movie is found in the array).
    if (ids.includes(this.movie.id)) {
      this.isSaved = true;
    }
  }

  // Switch the state of the movie and sent a querry according to that state.
  toggleSaved(event: any): void {
    event.stopPropagation();
    if (this.isSaved) {
      // remove the movie from the local database along with its data.
      this.likedService.deleteLikedMovie(this.movie.id);
      console.log('removed', this.movie);
    } else {
      // save the movie and set it a basic state.
      this.likedService.postLikedMovie(this.movie, 0, '');
      console.log('saved', this.movie);
    }
    // set the state for event binding (it sets only on initialize).
    this.isSaved = !this.isSaved;
  }
}
