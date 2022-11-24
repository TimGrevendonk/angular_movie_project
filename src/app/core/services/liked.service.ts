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

  getlikedMovies(): Observable<Liked[]> {
    return this.httpClient.get<Liked[]>('http://localhost:8080/api/movies');
  }

  getlikedMovieById(id: number): Observable<Liked> {
    return this.httpClient.get<Liked>('http://localhost:8080/api/movie/' + id);
  }

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

  // the delete is broken, is it from the java server or locally here???
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
