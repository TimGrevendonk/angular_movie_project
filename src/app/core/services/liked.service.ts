import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Liked } from '../models/liked';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class LikedService {
  constructor(private httpClient: HttpClient) {}
  // All the liked movies stored locally.
  getlikedMovies(): Observable<Liked[]> {
    return this.httpClient.get<Liked[]>('http://localhost:8080/api/movies');
  }
  // get a liked movie By ID.
  getlikedMovieById(id: number): Observable<Liked> {
    return this.httpClient.get<Liked>('http://localhost:8080/api/movie/' + id);
  }
  // save the basic state of the movie, if values are not given it will have default zeros.
  postLikedMovie(
    likedMovie: Movie,
    rating: number = 0,
    description: string = '',
    watched: boolean = false
  ): void {
    this.httpClient
      .post<any>('http://localhost:8080/api/movie', {
        id: likedMovie.id,
        title: likedMovie.title,
        release_date: likedMovie.release_date,
        rating: rating,
        description: description,
        watched: watched,
      })
      .subscribe({
        error: (error) => {
          console.log('post error', error);
        },
      });
  }

  // delete the movie that is stored locally.
  deleteLikedMovie(id: number): void {
    this.httpClient
      .delete<any[]>(`http://localhost:8080/api/movie/${id}`, {})
      .subscribe({
        next: (data) => {
          console.log('delete succesfull');
        },
        error: (error) => {
          console.log('delete error', error);
        },
      });
  }
  // Update the info of a liked movie, in a single function because patch "skips" empty values.
  patchLikedMovie(
    likedMovie: Movie,
    rating: number,
    description: string,
    watched: boolean
  ): void {
    this.httpClient
      .patch<any[]>(`http://localhost:8080/api/movie/${likedMovie.id}`, {
        id: likedMovie.id,
        title: likedMovie.title,
        release_date: likedMovie.release_date,
        rating: rating,
        description: description,
        watched: watched,
      })
      .subscribe({
        next: (data) => {
          console.log('patch succesfull');
        },
        error: (error) => {
          console.log('patch error', error);
        },
      });
  }
}
