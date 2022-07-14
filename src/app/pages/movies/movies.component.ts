import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../Models/movie';
import { take } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.getMovieByGenre(genreId);
      } else {
        this.getpagedMovie(1);
      }
    });
  }
  getpagedMovie(pageNumber: number) {
    this.movieService.searchMovies(pageNumber).subscribe((movies) => {
      this.movies = movies;
    });
  }
  getMovieByGenre(page: number) {}

  paginate(event: any) {
    this.getpagedMovie(event.page + 1);
  }
}
