import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';

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

  detail(id: number) {
    this.router.navigate(["/movie", id]);
  }

}
