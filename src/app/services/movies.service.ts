import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieDto, MovieImages, MovieVideoDto } from '../Models/movie';
import { of, switchMap } from 'rxjs';
import { MovieGenresDto } from '../Models/genres';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  baseURL: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'a4384b0dd6f7a41f98e835f4446b23ac';

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http.get<MovieDto>(`${this.baseURL}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  searchMovies(page: number) {
    return this.http.get<MovieDto>(`${this.baseURL}/movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, 18));
      })
    );
  }

  getMovie(id: string) {
    return this.http.get<Movie>(`${this.baseURL}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieVideos(id: string) {
    return this.http.get<MovieVideoDto>(`${this.baseURL}/movie/${id}/videos?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getMovieGenres() {
    return this.http.get<MovieGenresDto>(`${this.baseURL}/genre/movie/list?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.genres);
      })
    );
  }

  getMovieByGenres(genreId: string, pageNumber: number) {
    return this.http
      .get<MovieDto>(`${this.baseURL}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, 18));
        })
      );
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`${this.baseURL}/movie/${id}/images?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(`${this.baseURL}/movie/${id}/credits?api_key=${this.apiKey}`);
  }
}
