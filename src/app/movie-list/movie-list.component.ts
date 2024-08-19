import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { AddmovieComponent } from '../addmovie/addmovie.component';
import { Movie, MovieService } from '../movie.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, switchMap, catchError, of, startWith } from 'rxjs';

export interface User {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
}
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CardComponent, AddmovieComponent, ReactiveFormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  idx: any;
  isLoading: boolean = true;
  msg = '';
  movieData: Array<Movie> = [];

  searchForm!: FormGroup;
  movieNames: User[] = [];
  constructor(private fb: FormBuilder, public movieService: MovieService) {
    this.searchForm = this.fb.group({
      search: '',
    });
  }

  ngOnInit() {
    // this.loadMovies();

    this.searchForm
      .get('search')
      ?.valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        switchMap((searchTerm) =>
          this.movieService.searchUser(searchTerm).pipe(
            catchError((error) => {
              console.log(error);
              return of([]);
            })
          )
        )
      )
      .subscribe((data) => {
        console.log(data);
        this.isLoading = false;
        this.movieData = data;
        this.isLoading = false;
      });

    // this.loadMovies;
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
