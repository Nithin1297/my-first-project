import { Component, Input } from '@angular/core';
import { RouterEvent, RouterLink, RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CardComponent } from './card/card.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CounterComponent } from './counter/counter.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ProfileComponent,
    CardComponent,
    MovieListComponent,
    CounterComponent,
    AddmovieComponent,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private movieService : MovieService){
    
  }
}
