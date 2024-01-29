import { useEffect, useState } from "react";
import axios from "axios";

import { FilmResponse, Film } from "../types/types";

export const useAllMovies = (): Film[] | undefined => {
  const [movies, setMovies] = useState<Film[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<FilmResponse>(
          "https://shift-backend.onrender.com/cinema/today"
        );
        setMovies(response.data.films);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return movies;
};
