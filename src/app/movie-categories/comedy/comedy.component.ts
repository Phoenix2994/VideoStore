import { Component, OnInit } from '@angular/core';

import { Movie } from '../../model/movie';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.css']
})
export class ComedyComponent implements OnInit {

  movies: Movie[];

  constructor(public movieService: MovieService) {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies('Comedy')
      .subscribe(movies => this.movies = movies);
  }

  ngOnInit() {
  }

}
