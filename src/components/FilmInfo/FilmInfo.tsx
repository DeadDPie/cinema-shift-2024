import cl from "./FilmInfo.module.scss";
import { Film } from "../../types/types";

interface Props {
  film: Film;
}

export const FilmInfo: React.FC<Props> = ({ film }) => {
  return (
    <>
      <div className={cl.info}>
        <img
          className={cl.image}
          src={`https://shift-backend.onrender.com${film.img}`}
          alt="photo of movie"
        />
        <div className={cl.item}>
          <p className={cl.h1}>{film.name}</p>
          <p className={cl.h2}>{film.originalName}</p>

          <div className={cl.about}>
            <p>{film.genres.join(", ")}</p>
            <p>{film.releaseDate}</p>
          </div>

          <div>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>

          <p className={cl.rating}>Kinopoisk - {film.userRatings.kinopoisk}</p>
          <p>{film.description}</p>
        </div>
      </div>
    </>
  );
};
