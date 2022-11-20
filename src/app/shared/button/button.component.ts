import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from '../movie/movie.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private movieService: MovieService, private router: Router) {
  }

  ngOnInit(): void {
  }

  route(event:any) {
    event.stopPropagation();

    this.router.navigate(["/searchlist"]);
  }

}
