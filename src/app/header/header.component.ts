import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() genre: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  chooseGenre(value: string) {
    this.genre.emit(value);
  }
  ngOnInit() {
  }

}
