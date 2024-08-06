import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { AddmovieComponent } from '../addmovie/addmovie.component';
import { Movie, MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CardComponent, AddmovieComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  idx: any;
  isLoading: boolean = true;
  msg = '';
  movieData: Array<Movie> = [];
  constructor(public movieService: MovieService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService
      .getAllMoviesP()
      .then((data) => {
        this.movieData = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }

  deleteMovieP(movie: Movie) {
    this.movieService
      .deleteMovie(movie)
      .then(() => {
        this.loadMovies(); // Reload movies after deletion
      })
      .catch((error) => {
        console.error('Error deleting movie:', error);
        this.msg = 'Failed to delete movie.';
      });
  }
}
