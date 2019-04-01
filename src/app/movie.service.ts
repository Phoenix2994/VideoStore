import { Injectable } from '@angular/core';
import { Movie, MOVIES } from './movies-list';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  title: string;

  constructor() {
    this.title = '';
  }

  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }

  getMovie(title: string): Observable<Movie> {
    return of(MOVIES.find(movie => movie.title === title));
  }



}
