import { Injectable } from '@angular/core';
import { MOVIES, GENRES } from './movies-list';

import { Observable, of } from 'rxjs';
import { Movie } from './model/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  title: string;
  movies: Movie[];

  constructor() {
    this.title = '';
  }

  getMovies(value: string): Observable<Movie[]> {
    console.log(MOVIES.filter(element => (element.genre === value)));
    return of(MOVIES.filter(element => (element.genre === value)));
  }

  getGenres(): Observable<string[]> {
    return of(GENRES);
  }

  getTitle() {
    return this.title;
  }

  setTitle(value: string) {
    this.title = value;
  }

  getMovie(title: string): Observable<Movie> {
    return of(MOVIES.find(movie => movie.title === title));
  }





}
