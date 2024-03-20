import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { backUrl } from "../../constants/constants";
import { Film } from "../../types/types";

import cl from "./Card.module.scss";

interface FilmCardProps {
  film: Film;
}

export const Card: FC<FilmCardProps> = ({ film }) => {
  const navigate = useNavigate();

  const stars = [...Array(5)].map((_, index) => (
    <i
      key={index}
      className={`bx ${
        index < parseInt(film.userRatings.kinopoisk) / 2
          ? "bxs-star"
          : "bx-star"
      }`}
    ></i>
  ));
  return (
    <div className={cl.item}>
      <img
        className={cl.image}
        src={`${backUrl}${film.img}`}
        alt="photo of movie"
      />
      <div className={cl.about}>
        <p>{film.genres[0]}</p>
        <p>{film.releaseDate}</p>
      </div>
      <p className={cl.h1}>{film.name}</p>
      <p className={cl.h2}>{film.originalName}</p>
      <div>{stars}</div>

      <p className={cl.rating}>Kinopoisk - {film.userRatings.kinopoisk}</p>
      <button type="submit" onClick={() => navigate(`/film/${film.id}`)}>
        Read more
      </button>
    </div>
  );
};
