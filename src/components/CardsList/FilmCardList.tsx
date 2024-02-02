import { useAllMovies } from "@hooks/useAllMovies.ts";
import { Card } from "../Card/FilmCard";

import cl from "./CardsList.module.scss";

export const CardsList = () => {
  const movies = useAllMovies();

  return (
    <div className={cl.all}>
      {movies ? (
        movies.map((film) => <Card film={film} key={film.id}></Card>)
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
