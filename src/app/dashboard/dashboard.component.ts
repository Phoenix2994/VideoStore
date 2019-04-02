import { Component, OnInit } from '@angular/core';

import { Movie } from '../model/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[];
  genre: string;

  ngOnInit() {
  }

  constructor(public movieService: MovieService) {
    this.movies = [];
    this.getMovies();
    this.genre = 'Qualsiasi';
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }
  /*
    getChoosenGenre(): string {
      return this.movieService.getGenre();
    }
  */
  chooseGenre(value: string) {
    this.genre = value;
  }
}
