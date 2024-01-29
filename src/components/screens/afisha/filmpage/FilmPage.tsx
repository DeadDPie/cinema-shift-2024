import React, { FC } from "react";
import { useParams } from "react-router-dom";

export const FilmPage: FC = () => {
  const { filmId } = useParams();
  return <div>{filmId}</div>;
};
