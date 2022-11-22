import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/shared/movie/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movies!: Movie[];
  isDetail: boolean = false;

  constructor(private movieService: MovieService, private router: Router) {
  }

  ngOnInit(): void {
  }

  detail = (event:any, id: number) => {
    event.stopPropagation();
    this.router.navigate(["/movie", id]);
    // console.log(this.movies);

  }

}
