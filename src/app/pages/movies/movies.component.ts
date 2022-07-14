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
  genreId: string | null = null;
  constructor(private movieService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getMovieByGenre(genreId, 1);
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
  getMovieByGenre(genreId: string, page: number) {
    this.movieService.getMovieByGenres(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  paginate(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getMovieByGenre(this.genreId, pageNumber);
    } else {
      this.getpagedMovie(pageNumber);
    }
  }
}
