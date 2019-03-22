import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies: any[];
  constructor() {
    this.movies = [];
    this.movies.push({ title: 'Rec', year: 2007, genre: 'Horror', movieDirector: 'Jaume Balagueró', duration: 78 });
    this.movies.push({ title: 'Seven', year: 1995, genre: 'Thriller', movieDirector: 'David Fincher', duration: 128 });
    this.movies.push({ title: 'Titanic', year: 1997, genre: 'Romantico', movieDirector: 'James Cameron', duration: 195 });
    this.movies.push({ title: 'I Simposon ', year: 2007, genre: 'Commedia', movieDirector: 'David Silverman', duration: 87 });
    this.movies.push({ title: 'Jurassic Park', year: 1997, genre: 'Avventura', movieDirector: 'Steven Spielberg', duration: 127 });
    this.movies.push({ title: 'Non ci resta che piangere', year: 1984, genre: 'Commedia', movieDirector: 'Massimo Troisi', duration: 145});
    this.movies.push({ title: 'Inception', year: 2010, genre: 'Thriller', movieDirector: 'Christopher Nolan', duration: 148 });
  }
}
