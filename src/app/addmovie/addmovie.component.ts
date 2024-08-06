import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MovieService } from '../movie.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addmovie',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './addmovie.component.html',
  styleUrl: './addmovie.component.scss',
})
export class AddmovieComponent {
  constructor(public movieService: MovieService, private router: Router) {}
  id = '';
  name = '';
  rating = 1;
  summary = '';
  poster = '';
  trailer = '';

  //  @Input() singleMovie = [{}]
  add() {
    let newMovie: any = {
      Title: this.name,
      rating: this.rating,
      summary: this.summary,
      poster: this.poster,
      trailer: this.trailer,
    };
    this.movieService.addMovie(newMovie).then(() => {
      this.router.navigate(['movies']);
    });
  }
}
