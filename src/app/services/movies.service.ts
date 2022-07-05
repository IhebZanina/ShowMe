import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from '../Models/movie';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  baseURL: String = 'https://api.themoviedb.org/3';
  apiKey: String = 'a4384b0dd6f7a41f98e835f4446b23ac';

  getMovies(type: string = 'upcoming') {
    return this.http.get<MovieDto>(`${this.baseURL}/movie/${type}?api_key=${this.apiKey}`);
  }
}
