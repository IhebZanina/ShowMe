import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Genre } from '../../Models/genres';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovieGenres().subscribe((genresData) => {
      this.genres = genresData;
    });
  }
}
