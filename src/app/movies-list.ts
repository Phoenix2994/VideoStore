import { Movie } from './model/movie';
// tslint:disable-next-line:max-line-length
export const plot = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus justo justo, in convallis elit aliquet sit amet. Nullam et bibendum tortor, in volutpat ante. Morbi consectetur feugiat lectus, vel aliquet orci pharetra consectetur. Morbi hendrerit ligula id quam lobortis iaculis. Praesent in nunc ac lacus finibus suscipit eu quis ligula. Pellentesque nec pellentesque ex, in mollis libero. Morbi quis mollis arcu, nec sagittis purus. Aenean quam tellus, efficitur sed bibendum posuere, varius et neque. Maecenas porttitor sit amet purus et ultrices. Nullam iaculis luctus luctus. Maecenas at nisi efficitur, fermentum mauris nec, semper magna. Nulla dictum metus vitae nisi maximus sodales ac in orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc molestie vehicula tincidunt. Ut libero nunc, fermentum eget volutpat sed, imperdiet vitae sapien.Mauris blandit a sapien quis accumsan. Curabitur consectetur a tellus vitae molestie. Proin vitae sagittis purus, nec consequat ligula. Aenean feugiat ipsum sollicitudin purus euismod, ac faucibus nisl ornare. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue tincidunt pretium. Phasellus interdum, augue eget vehicula rhoncus, lacus risus blandit neque, nec tincidunt odio enim eu erat. Mauris enim mauris, aliquam eu arcu ut, aliquam eleifend dolor. Donec laoreet augue eget risus dignissim, sed pulvinar urna congue.Aenean finibus magna vel ullamcorper efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi viverra est vitae massa ullamcorper, id mollis tortor laoreet. Aliquam sit amet mi cursus, suscipit diam sagittis, vehicula nisl. Nunc consectetur id diam vel dictum. Ut cursus non dolor ut tempor. Vivamus a cursus turpis. Integer in cursus diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ultricies tellus ac lobortis pretium. Vivamus nec pellentesque arcu. Aliquam erat volutpat. Nulla commodo sem sed mi suscipit fermentum.';

export const MOVIES: Movie[] = [
  { title: 'Rec', year: 2007, genre: 'Horror', movieDirector: 'Jaume Balagueró', duration: 78, plot },
  { title: 'Seven', year: 1995, genre: 'Thriller', movieDirector: 'David Fincher', duration: 128, plot},
  { title: 'Titanic', year: 1997, genre: 'Romantic', movieDirector: 'James Cameron', duration: 195, plot},
  { title: 'I Simpson ', year: 2007, genre: 'Comedy', movieDirector: 'David Silverman', duration: 87, plot },
  { title: 'Jurassic Park', year: 1997, genre: 'Adventure', movieDirector: 'Steven Spielberg', duration: 127, plot},
  { title: 'Non ci resta che piangere', year: 1984, genre: 'Comedy', movieDirector: 'Massimo Troisi', duration: 145, plot},
  { title: 'Inception', year: 2010, genre: 'Thriller', movieDirector: 'Christopher Nolan', duration: 148, plot},
  { title: 'Rec 2', year: 2007, genre: 'Horror', movieDirector: 'Jaume Balagueró', duration: 78, plot },
  { title: 'Eight', year: 1995, genre: 'Thriller', movieDirector: 'David Fincher', duration: 128, plot},
  { title: 'Frozen', year: 1997, genre: 'Romantic', movieDirector: 'James Cameron', duration: 195, plot},
  { title: 'I Griffin ', year: 2007, genre: 'Comedy', movieDirector: 'David Silverman', duration: 87, plot },
  { title: 'Jurassic Park 2', year: 1997, genre: 'Adventure', movieDirector: 'Steven Spielberg', duration: 127, plot},
  { title: 'La vita è bella', year: 1984, genre: 'Comedy', movieDirector: 'Massimo Troisi', duration: 145, plot},
  { title: 'Prova a prendermi', year: 2010, genre: 'Thriller', movieDirector: 'Christopher Nolan', duration: 148, plot},
  { title: 'Esorcista', year: 2007, genre: 'Horror', movieDirector: 'Jaume Balagueró', duration: 78, plot },
  { title: 'Nein', year: 1995, genre: 'Thriller', movieDirector: 'David Fincher', duration: 128, plot},
  { title: 'Via col vento', year: 1997, genre: 'Romantic', movieDirector: 'James Cameron', duration: 195, plot},
  { title: 'Futurama ', year: 2007, genre: 'Comedy', movieDirector: 'David Silverman', duration: 87, plot },
  { title: 'Jurassic World', year: 1997, genre: 'Adventure', movieDirector: 'Steven Spielberg', duration: 127, plot},
  { title: 'Non lo so', year: 1984, genre: 'Comedy', movieDirector: 'Massimo Troisi', duration: 145, plot},
  { title: 'Departed', year: 2010, genre: 'Thriller', movieDirector: 'Christopher Nolan', duration: 148, plot}
];

export const GENRES: string[] = [
  'Adventure', 'Comedy', 'Horror', 'Thriller', 'Romantic'
];

