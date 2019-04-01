import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from './movies-list';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movieSelected: Movie;
  movies: Movie[];
  show: string;
  genres: any[];

  constructor(public movieService: MovieService, private route: ActivatedRoute) {
    this.show = 'Qualsiasi';
    this.movies = [];
    this.genres = [];
    this.getMovies();
    this.pushGenres();
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  getTitle() {
    this.show = this.movieService.title;
  }

  pushGenres() {
    this.genres.push({ name: 'Avventura' });
    this.genres.push({ name: 'Commedia' });
    this.genres.push({ name: 'Horror' });
    this.genres.push({ name: 'Romantico' });
    this.genres.push({ name: 'Thriller' });
    this.genres.push({ name: 'Qualsiasi' });
  }

  chooseGenre(value: string) {
    this.show = value;
    console.log(value);
  }
}
