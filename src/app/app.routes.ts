import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { authGuard } from './auth.guard';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Profile',
    component: ProfileComponent,
    canActivate: [authGuard],
  },
  {
    path: 'game',
    component: ColorGameComponent,
  },
  {
    path: 'movies',
    children: [
      { path: '', component: MovieListComponent },
      { path: 'add', component: AddmovieComponent, canActivate: [authGuard] },
      { path: 'edit/:id', component: EditMovieComponent },
    ],
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
