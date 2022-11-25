import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private httpClient: HttpClient) {}
  // Querry all possible genres (UNUSED)
  getMovieGenres(): Observable<Genre[]> {
    return this.httpClient.get<Genre[]>(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=' +
        environment.apiKey
    );
  }
}
