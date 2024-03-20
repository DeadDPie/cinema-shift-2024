import { useEffect, useState } from "react";
import axios from "axios";
import { backUrl } from "../constants/constants";

import { FilmInfoResponse, Film } from "../types/types";

export const useMovie = (
  filmId: string | undefined | number
): Film | undefined => {
  const [movie, setMovie] = useState<Film | undefined>();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get<FilmInfoResponse>(
          `${backUrl}/cinema/film/${filmId}`
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
