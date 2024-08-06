import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Movie, MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent {
  movie!: Movie;
  msg: string = '';

  constructor(
    public movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as string; 

    this.movieService.getMovieByIdP(id)
      .then((data) => {
        this.movie = data; 
      })
      .catch(() => {
        this.msg = 'Something went wrong 🥲';
      });
  }

  editMovie() {
    this.movieService.updateMovie(this.movie)
      .then(() => {
        this.router.navigate(['/movies']); 
      })
      .catch(() => {
        this.msg = 'Failed to update movie';
      });
  }
}