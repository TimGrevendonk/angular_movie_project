import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {

   }

  getPopularMovies() : Observable<Movie[]>{
    return this.httpClient.get<Movie[]>("https://api.themoviedb.org/3/movie/popular?api_key=0e4e46b4f7329bf9a0f26586ec5c3420");
  }

  getMovieById(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>("https://api.themoviedb.org/3/movie/" + id + "?api_key=0e4e46b4f7329bf9a0f26586ec5c3420");
  }
}
