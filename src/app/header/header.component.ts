import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  genres: string[];

  ngOnInit(): void {
  }

  constructor(public movieService: MovieService) {
    this.genres = [];
    this.getGenres();
  }

  chooseGenre(value: string) {
    this.movieService.setGenre(value);
  }

  getGenres(): void {
    this.movieService.getGenres()
      .subscribe(genres => this.genres = genres);
  }



}
