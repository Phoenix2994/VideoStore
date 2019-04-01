import { Component, OnInit } from '@angular/core';

import { Movie } from '../movies-list';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[];

  ngOnInit() {
  }

  constructor(public movieService: MovieService ) {
    this.movies = [];
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  checkGenre(): string {
    return this.movieService.getGenre();
  }

}
