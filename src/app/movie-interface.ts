import { Movie } from './movie.service';

export interface MovieInterface {}

export type newMovie = Omit<Movie, 'id'>;
