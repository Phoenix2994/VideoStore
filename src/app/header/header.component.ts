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
  categories: string[];

  @Output() category = new EventEmitter<string>();

  ngOnInit(): void {
    this.getCategories();
    this.searchService.expression.
      subscribe(expression => this.expression = expression);
  }

  constructor(private movieService: MovieService, private searchService: SearchService) {
    this.categories = [];
    this.expression = '';
  }

  chooseCategory(value: string) {
    this.category.emit(value);
  }

  getCategories(): void {
    this.movieService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  setSearchingTerm() {
    this.searchService.expression
      .next(this.expression);
  }

}
