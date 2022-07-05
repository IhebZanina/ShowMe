import { Component, OnInit } from '@angular/core';
import { Movie } from '../../Models/movie';
import { MoviesService } from '../../services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.getpagedMovie(1);
  }
  getpagedMovie(pageNumber: number) {
    this.movieService.searchMovies(pageNumber).subscribe((movies) => {
      this.movies = movies;
    });
  }
  paginate(event: any) {
    this.getpagedMovie(event.page + 1);
  }
}
