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

export interface User {
  firstname: string;
  lastname: string;
  middlename?: string;
  phone: string;
}
export interface IdebitCard {
  pan: string;
  expireDate: string;
  cvv: string;
}

export interface Ticket {
  acknowledged: boolean;
  deletedCount?: number;
  filmId?: string;
  row: number;
  column: number;
  seance: {
    date: string;
    time: string;
  };
  phone: string;
  _id: string;
  created: string;
  updated: string;
}

export interface Order {
  _id: string;
  tickets: {
    seance: { date: string; time: string };
    filmId: number;
    row: number;
    column: number;
  }[];
  status: string;
  orderNumber: string;
  /*
  _id: string;
  orderNumber: number;
  tickets: Ticket[];
  phone: string;
  status: string;
  created: string;
  updated: string;*/
}

export interface OrderResponse {
  success: true;
  reason: string;
  orders: Order[];
}
