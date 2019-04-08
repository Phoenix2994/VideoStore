import { Component, OnInit } from '@angular/core';

import { Movie } from '../../model/movie';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.css']
})
export class HorrorComponent implements OnInit {

  movies: Movie[];

  constructor(public movieService: MovieService) {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies('Horror')
      .subscribe(movies => this.movies = movies);
  }
  ngOnInit() {
  }

}
