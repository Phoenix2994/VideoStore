export class Movie {
    title: string;
    year: number;
    genre: string;
    movieDirector: string;
    duration: number;
  }

export const MOVIES: Movie[] = [
    {title: 'Rec', year: 2007, genre: 'Horror', movieDirector: 'Jaume Balagueró', duration: 78 },
    { title: 'Seven', year: 1995, genre: 'Thriller', movieDirector: 'David Fincher', duration: 128 },
    { title: 'Titanic', year: 1997, genre: 'Romantico', movieDirector: 'James Cameron', duration: 195 },
    { title: 'I Simpson ', year: 2007, genre: 'Commedia', movieDirector: 'David Silverman', duration: 87 },
    { title: 'Jurassic Park', year: 1997, genre: 'Avventura', movieDirector: 'Steven Spielberg', duration: 127 },
    { title: 'Non ci resta che piangere', year: 1984, genre: 'Commedia', movieDirector: 'Massimo Troisi', duration: 145 },
    { title: 'Inception', year: 2010, genre: 'Thriller', movieDirector: 'Christopher Nolan', duration: 148 }
  ];

export const GENRES: string[] = [
  'Avventura', 'Commedia', 'Horror', 'Thriller', 'Romantico', 'Qualsiasi'
];

