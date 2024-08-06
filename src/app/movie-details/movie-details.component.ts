import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from '../movie.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  trustedUrl!: SafeUrl;
  movie!: Movie;
  isLoading: boolean = true;
  msg: string = '';

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as string;

    this.movieService.getMovieByIdP(id)
      .then((data) => {
        this.movie = data;
        this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer);
        this.isLoading = false; 
      })
      .catch((error) => {
        this.msg = 'Movie not found or an error occurred.';
        console.error('Error fetching movie:', error);
        this.isLoading = false; 
      });
  }
}
