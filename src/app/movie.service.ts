import { Injectable } from '@angular/core';
import { newMovie } from './movie-interface';

export type Movie = {
  id: string;
  name: string;
  rating: number;
  summary: string;
  poster: string;
  trailer: string;
};
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  // API = `https://669a42859ba098ed61fef71c.mockapi.io/Movies`;
  // API = `http://localhost:4000`;
  API = `https://node-8hsv.onrender.com`;
 
  movieData = [
    {
      id: '',
      name: 'Love Today',
      rating: 9.1,
      summary:
        'Love Today is a 2022 Indian Tamil-language romantic comedy film directed by Pradeep Ranganathan and produced by AGS Entertainment. The film stars Pradeep (in his acting debut), alongside Ivana, Raveena Ravi, Yogi Babu, Sathyaraj, Radhika Sarathkumar, Akshaya Udayakumar, Prathana Nathan, Adithya Kathir and Aajeedh Khalique.',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg',
      trailer: '',
    },
    {
      id: '',
      name: 'Beast',
      rating: 8.0,
      summary:
        'Beast is a 2022 Indian Tamil-language action comedy film written and directed by Nelson Dilipkumar and produced by Kalanithi Maran under Sun Pictures. The film stars Vijay and Pooja Hegde in the lead roles, alongside Selvaraghavan, Shaji Chen, VTV Ganesh, Ankur Vikal, Aparna Das, Sathish Krishnan, Shine Tom Chacko, Yogi Babu and Redin Kingsley.',
      poster: 'https://pbs.twimg.com/media/E4bQvR5XwAI3Dzp.jpg',
      trailer: '',
    },
    {
      id: '',
      name: 'PS1',
      rating: 9.4,
      summary:
        'Ponniyin Selvan: I (PS-1, transl.The Son of Ponni) is a 2022 Indian Tamil-language epic action drama film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan.',
      poster: 'https://i.redd.it/lq72e1sl4fo91.jpg',
      trailer: '',
    },
    {
      id: '',
      name: 'Sardar',
      rating: 9.5,
      summary:
        'Sardar (transl.Chief) is a 2022 Indian Tamil-language spy action-thriller film written and directed by P. S. Mithran and produced by S. Lakshman Kumar under his production banner Prince Pictures.',
      poster: 'https://pbs.twimg.com/media/FbkXGJMXoAAcye0.jpg',
      trailer: '',
    },
  ];

  constructor() {}

  addMovie(newMovie: newMovie) {
    return fetch(this.API, {
      method: 'POST',
      body: JSON.stringify(newMovie),
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) => res.json());
  }

  getAllMoviesP(): Promise<Movie[]> {
    return fetch(`${this.API}/movies`).then((res) => res.json());
  }

  getMovieByIdP(id: string): Promise<Movie> {
    return fetch(`${this.API}/movies/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Movie not found');
        }
        return res.json();
      })
      .catch((error) => {
        console.error('Error fetching movie:', error);
        throw error; // Rethrow the error for further handling
      });
  }

  deleteMovie(movie: Movie) {
    return fetch(`${this.API}/movies/${movie.id}`, {
      method: 'Delete',
    }).then((res) => res.json());
  }

  updateMovie(updatedMovie: Movie): Promise<void> {
    return fetch(`${this.API}/movies/${updatedMovie.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedMovie),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (!res.ok) {
        throw new Error('Failed to update movie');
      }
      return res.json();
    });
  }
}
