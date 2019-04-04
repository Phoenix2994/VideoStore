import { Component, OnInit } from '@angular/core';

import { Movie } from '../model/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {

  movies: Movie[];

  constructor(public movieService: MovieService) {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies('Adventure')
      .subscribe(movies => this.movies = movies);
  }

  ngOnInit() {
  }

}
