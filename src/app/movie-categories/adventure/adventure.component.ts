import { Component, OnInit } from '@angular/core';

import { Movie } from '../../model/movie';
import { MovieService } from '../../movie.service';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {
  expression: string;
  movies: Movie[];

  constructor(public movieService: MovieService, public searchService: SearchService) {
    this.getMovies();
    this.getSearchingTerm();
  }

  getMovies(): void {
    this.movieService.getMovies('Adventure')
      .subscribe(movies => this.movies = movies);
  }

  getSearchingTerm() {
    this.searchService.expression
      .subscribe(expression => this.expression = expression);
  }

  ngOnInit() {
    this.searchService.expression.next('');
  }

}
