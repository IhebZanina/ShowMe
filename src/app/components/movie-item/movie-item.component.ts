import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../Models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;
  constructor() {}

  ngOnInit(): void {}
}
