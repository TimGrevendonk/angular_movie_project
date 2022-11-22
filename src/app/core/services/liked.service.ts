import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Liked } from '../models/liked';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class LikedService {

  constructor(private httpClient: HttpClient) { }


  getlikedMovieIds(): Observable<Liked[]> {
    return this.httpClient.get<Liked[]>("http://localhost:8080/api/movies");
  }

  postLikedMovie(likedMovie : Movie, rating : number, description: string): void {
    this.httpClient.post<any>("http://localhost:8080/api/movie", {
      id: likedMovie.id,
      title: likedMovie.title,
      release_date: likedMovie.release_date,
      rating: rating,
      description: description,
    }).subscribe({
      error: error => {
        console.log("post error", error);
      }
    })
  }

  deleteLikedMovie(likedMovie: Movie):void {
    this.httpClient.delete<any[]>(`http://localhost:8080/api/movie/${likedMovie.id}`, {
    }).subscribe({
      next: data => {
        console.log("delete succesfull");

      },
      error: error => {
        console.log("delete error", error);
      },
    })
  }
}
