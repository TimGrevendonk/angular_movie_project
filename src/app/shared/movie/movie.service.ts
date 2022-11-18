import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, switchMap, catchError } from 'rxjs';

import { Movie } from '../../core/models/movie'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {

   }

  getPopularMovies(): Observable<Movie[]> {
    // return timer(1, 10000).pipe(switchMap(() => this.httpClient.get<Movie[]>("https://api.themoviedb.org/3/movie/popular?api_key=0e4e46b4f7329bf9a0f26586ec5c3420")));
    return this.httpClient.get<Movie[]>("https://api.themoviedb.org/3/movie/popular?api_key=" + environment.apiKey);
  }

  getMovieById(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + environment.apiKey);
  }
}
