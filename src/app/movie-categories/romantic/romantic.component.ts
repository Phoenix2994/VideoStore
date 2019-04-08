import { Component, OnInit } from '@angular/core';

import { Movie } from '../../model/movie';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-romantic',
  templateUrl: './romantic.component.html',
  styleUrls: ['./romantic.component.css']
})
export class RomanticComponent implements OnInit {

  movies: Movie[];

  constructor(public movieService: MovieService) {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies('Romantic')
      .subscribe(movies => this.movies = movies);
  }


  ngOnInit() {
  }

}
