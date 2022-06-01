import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=a4384b0dd6f7a41f98e835f4446b23ac');
  }
}
