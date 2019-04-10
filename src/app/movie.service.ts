import { Injectable } from '@angular/core';
import { MOVIES, CATEGORIES } from './movies-list';

import { Observable, of } from 'rxjs';
import { Movie } from './model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[];

  constructor() {
  }

  getMovies(value: string): Observable<Movie[]> {
    this.movies = MOVIES.sort(this.sortByTitle);
    return of(this.movies.filter(element => (element.category === value)));
  }

  getCategories(): Observable<string[]> {
    return of(CATEGORIES);
  }

  getMovie(title: string): Observable<Movie> {
    return of(MOVIES.find(movie => movie.title === title));
  }

  sortByTitle(a, b) {
    const nameA = a.title.toLowerCase();
    const nameB = b.title.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }






}
