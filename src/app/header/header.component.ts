import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() genres: any;
  @Output() genre = new EventEmitter<string>();

  constructor() { }

  chooseGenre(value: string) {
    this.genre.emit(value);
  }
  ngOnInit() {
  }

}
