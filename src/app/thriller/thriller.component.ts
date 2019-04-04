import { Component, OnInit } from '@angular/core';

import { Movie } from '../model/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-thriller',
  templateUrl: './thriller.component.html',
  styleUrls: ['./thriller.component.css']
})
export class ThrillerComponent implements OnInit {

  movies: Movie[];

  constructor(public movieService: MovieService) {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies('Thriller')
      .subscribe(movies => this.movies = movies);
  }

  ngOnInit() {
  }

}
