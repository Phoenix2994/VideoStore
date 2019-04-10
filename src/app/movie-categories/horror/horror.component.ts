import { Component, OnInit } from '@angular/core';

import { Movie } from '../../model/movie';
import { MovieService } from '../../movie.service';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.css']
})
export class HorrorComponent implements OnInit {
  expression: string;
  movies: Movie[];

  constructor(private movieService: MovieService, private searchService: SearchService) { }

  getMovies(): void {
    this.movieService.getMovies('Horror')
      .subscribe(movies => this.movies = movies);
  }

  getSearchingTerm() {
    this.searchService.expression
      .subscribe(expression => this.expression = expression);
  }

  ngOnInit() {
    this.getMovies();
    this.getSearchingTerm();
    this.searchService.expression.next('');
  }

}
