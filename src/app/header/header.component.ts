import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  genres: string[];

  @Output() genre = new EventEmitter<string>();

  ngOnInit(): void {
  }

  constructor(public movieService: MovieService) {
    this.genres = [];
    this.getGenres();
  }
  /*
    chooseGenre(value: string) {
      this.movieService.setGenre(value);
    }
  */

  chooseGenre(value: string) {
    this.genre.emit(value);
  }

  getGenres(): void {
    this.movieService.getGenres()
      .subscribe(genres => this.genres = genres);
  }



}
