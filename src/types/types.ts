interface Actor {
  id: string;
  professions: string[];
  fullName: string;
}

interface Director {
  id: string;
  professions: string[];
  fullName: string;
}

interface UserRatings {
  kinopoisk: string;
  imdb: string;
}

export interface Film {
  id: string;
  name: string;
  originalName: string;
  description: string;
  releaseDate: string;
  actors: Actor[];
  directors: Director[];
  runtime: number;
  ageRating: string;
  genres: string[];
  userRatings: UserRatings;
  img: string;
}

export interface FilmResponse {
  success: boolean;
  films: Film[];
}
