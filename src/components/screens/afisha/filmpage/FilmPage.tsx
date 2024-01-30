import React, { FC } from "react";
import { useParams } from "react-router-dom";

import { useMovie } from "../../../../hooks/useMovie";
import { Header } from "../../../Header/Header";
import { FilmInfo } from "../../../FilmInfo/FilmInfo";

import cl from "./FilmPage.module.scss";
import { Schedule } from "../../../Schedule/Schedule";
export const FilmPage: FC = () => {
  const { filmId } = useParams();
  const movie = useMovie(filmId);

  return (
    <>
      <Header />
      <div className={cl.all}>
        {movie ? (
          <>
            <FilmInfo film={movie} />
            <Schedule name={movie.name} movieId={movie.id} />
          </>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </>
  );
};
