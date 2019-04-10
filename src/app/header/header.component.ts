import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { MovieService } from '../movie.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  expression: string;
  genres: string[];

  @Output() genre = new EventEmitter<string>();

  ngOnInit(): void {
    this.getGenres();
    this.searchService.expression.
      subscribe(expression => this.expression = expression);
  }

  constructor(public movieService: MovieService, public searchService: SearchService) {
    this.genres = [];
    this.expression = '';
  }

  chooseGenre(value: string) {
    this.genre.emit(value);
  }

  getGenres(): void {
    this.movieService.getGenres()
      .subscribe(genres => this.genres = genres);
  }

  setSearchingTerm() {
    this.searchService.expression
      .next(this.expression);
  }

}
