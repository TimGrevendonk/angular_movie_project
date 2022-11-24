import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  saved: boolean = false;

  constructor(
    private movieService: MovieService,
    private likedService: LikedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkSaved();
  }

  checkSaved(): void {
    if (this.liked.filter((l) => l.id == this.movie.id).length == 0) {
      this.saved = true;
    }
  }

  route(event: any) {
    event.stopPropagation();

    // this.router.navigate(["/searchlist"]);
  }

  save(event: any): void {
    event.stopPropagation();
    this.likedService.postLikedMovie(this.movie, 0, '');
    console.log('saved', this.movie);
  }

  remove(event: any): void {
    event.stopPropagation();
    this.likedService.deleteLikedMovie(this.movie.id);
    console.log('removed', this.movie);
  }
}
