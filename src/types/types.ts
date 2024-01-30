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

export interface FilmsResponse {
  success: boolean;
  films: Film[];
}
export interface FilmInfoResponse {
  success: boolean;
  film: Film;
}

export interface Schedule {
  date: string;
  seances: Seance[];
}

export interface Seance {
  time: string;
  hall: Hall;
  payedTickets: Ticket[];
}

export interface Hall {
  name: string;
  places: Place[][];
}

export interface Place {
  price: number;
  type: string;
}

interface Ticket {
  // Define the properties of a ticket here
}
