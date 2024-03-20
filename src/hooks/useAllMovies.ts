import { useEffect, useState } from "react";
import axios from "axios";

import { backUrl } from "../constants/constants";
import { FilmsResponse, Film } from "../types/types";

export const useAllMovies = (): Film[] | undefined => {
  const [movies, setMovies] = useState<Film[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<FilmsResponse>(
          `${backUrl}/cinema/today`
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
