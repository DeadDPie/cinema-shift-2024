import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";

import { Sessions } from "../Sessions/Sessions";
import { CinemaHall } from "../CinemaHall/CinemaHall";
import { useSchedule } from "@hooks/useSchedule.ts";
import { Hall } from "../../types/types";
import { ModalDetailsPayment } from "../ModalDetailsPayment/ModalDetailsPayment";
import { UserPaymentForm } from "../UserPaymentForm/UserPaymentForm";

interface ScheduleProps {
  name: string;
  movieId: string;
}

export const Schedule: FC<ScheduleProps> = ({ name, movieId }) => {
  const { filmId } = useParams<{ filmId: string }>();

  const [cinema, setCinema] = useState<any>();
  const [modal, setModal] = useState(false);
  const schedules = useSchedule(filmId);

  const setHall = (hall: Hall) => {
    console.log(hall);
    setCinema(hall);
  };
  const callbackModal = (modal: boolean) => {
    setModal(modal);
  };
  return (
    <>
      <ModalDetailsPayment visible={modal} setVisisble={setModal}>
        <UserPaymentForm />
      </ModalDetailsPayment>
      {schedules && <Sessions schedules={schedules} setHall={setHall} />}

      {cinema && (
        <CinemaHall
          name={name}
          movieId={movieId}
          cinema={cinema}
          callbackModal={callbackModal}
        ></CinemaHall>
      )}
    </>
  );
};
