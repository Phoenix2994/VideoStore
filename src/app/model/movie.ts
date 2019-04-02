import { plot } from '../movies-list';

export class Movie {
    title: string;
    year: number;
    genre: string;
    movieDirector: string;
    duration: number;
    plot = plot;
  }
