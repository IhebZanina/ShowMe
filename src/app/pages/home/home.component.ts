import { Component, OnInit } from '@angular/core';
import { Movie } from '../../Models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topratedMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((response: any) => {
      this.popularMovies = response.results;
    });
    this.moviesService.getMovies('top_rated').subscribe((response: any) => {
      this.topratedMovies = response.results;
    });
    this.moviesService.getMovies('upcoming').subscribe((response: any) => {
      this.upcomingMovies = response.results;
    });
  }
}
