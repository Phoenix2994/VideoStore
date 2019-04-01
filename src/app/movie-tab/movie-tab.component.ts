import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-tab',
  templateUrl: './movie-tab.component.html',
  styleUrls: ['./movie-tab.component.css']
})
export class MovieTabComponent implements OnInit {

  @Input() movies: any;

  constructor() {
  }

  ngOnInit() {
  }

}
