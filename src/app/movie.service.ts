import { Injectable } from '@angular/core';
import { Movie, MOVIES, GENRES } from './movies-list';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  title: string; // service to open movie-detail
  genre: string; // service to filter movie genres

  constructor() {
    this.title = '';
    this.genre = 'Qualsiasi';
  }

  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
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

  getGenre() {
    return this.genre;
  }

  setGenre(value: string) {
    this.genre = value;
  }

  getMovie(title: string): Observable<Movie> {
    return of(MOVIES.find(movie => movie.title === title));
  }





}
