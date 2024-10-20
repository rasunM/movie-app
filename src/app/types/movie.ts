export interface Movie{
    id: string;
    title: string;
    year: number;
    genre: string[];
    rating: number;
    director: string;
    actors: string[];
    plot: string;
    runtime: string;
    awards: string;
    boxOffice: string;
    production: string;
}

export interface MoviesResponse {
    data: Movie[];
  }