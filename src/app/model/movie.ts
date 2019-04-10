import { plot } from '../movies-list';

export class Movie {
    title: string;
    year: number;
    category: string;
    movieDirector: string;
    duration: number;
    plot = plot;
  }
