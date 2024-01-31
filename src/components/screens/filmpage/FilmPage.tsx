import React, { useState, FC } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../store/store";
import { useMovie } from "../../../hooks/useMovie";
import { Header } from "../../Header/Header";
import { FilmInfo } from "../../FilmInfo/FilmInfo";
import { Schedule } from "../../Schedule/Schedule";
import { ModalDetailsPayment } from "../../ModalDetailsPayment/ModalDetailsPayment";
import { setSuccessful } from "./../../../store/paymentDetails/paymentDetails.slice.ts";
import { SuccessfullyPaid } from "../../SuccessfullyPaid/SuccessfullyPaid.tsx";

import cl from "./FilmPage.module.scss";

export const FilmPage: FC = () => {
  const dispatch = useDispatch();
  const isSuccessful = useSelector(
    (state: RootState) => state.payment.isSuccessful
  );

  const { filmId } = useParams();
  const movie = useMovie(filmId);
  const [successfullyPaid, setsuccessfullyPaid] = useState(false);

  const handleSuccessfulPayment = () => {
    //костыль, чтобы скрывать модальное окно с успешной оплатой
    //не знаю как реализовать нормально
    setsuccessfullyPaid(true);
    dispatch(setSuccessful(false));
  };
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
        {isSuccessful && !successfullyPaid && (
          <ModalDetailsPayment
            visible={!successfullyPaid}
            setVisisble={handleSuccessfulPayment}
          >
            <SuccessfullyPaid></SuccessfullyPaid>
          </ModalDetailsPayment>
        )}
      </div>
    </>
  );
};
