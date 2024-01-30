import { useEffect, useState } from "react";
import axios from "axios";

import { FilmInfoResponse, Film } from "../types/types";

export const useMovie = (filmId: string | undefined): Film | undefined => {
  const [movie, setMovie] = useState<Film | undefined>();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get<FilmInfoResponse>(
          `https://shift-backend.onrender.com/cinema/film/${filmId}`
        );
        setMovie(response.data.film);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, []);

  return movie;
};
