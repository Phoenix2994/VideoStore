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

  @Input() genres: any;
  @Output() genre = new EventEmitter<string>();

  constructor(private location: Location, public movieService: MovieService, private route: ActivatedRoute) { }

  chooseGenre(value: string) {
    this.genre.emit(value);
  }

  ngOnInit() {
  }

}
