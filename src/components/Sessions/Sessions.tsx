import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { choseTime, choseDate } from "@paymentDetails/paymentDetails.slice";
import clsx from "clsx";

import { Schedule, Seance, Hall } from "../../types/types";

import cl from "./Sessions.module.scss";

interface SessionsProps {
  schedules: Schedule[];
  setHall: (hall: Hall) => void;
}

export const Sessions: React.FC<SessionsProps> = ({ schedules, setHall }) => {
  const dispatch = useDispatch();

  const [seancesDate, setSeancesDate] = useState<Seance[]>();

  const buy = (seance: Seance) => {
    setHall(seance.hall);
    dispatch(choseTime(seance.time));
    console.log(seance.time);
  };
  const choseDateToBuy = (schedule: Schedule) => {
    setSeancesDate(schedule.seances);
    dispatch(choseDate(schedule.date));
    console.log(schedule.date);
  };

  return (
    <div className={cl.schedule}>
      <div>
        {schedules &&
          schedules.map((schedule, index) => (
            <button
              className={clsx(cl.btn, {
                [cl.clicked]: seancesDate === schedule.seances,
              })}
              key={index}
              onClick={() => choseDateToBuy(schedule)}
            >
              {schedule.date}
            </button>
          ))}
      </div>

      <div>
        {seancesDate &&
          seancesDate.map((seance: Seance, index: number) => (
            <button
              className={clsx(cl.time, {
                [cl.redHall]: seance.hall.name === "Red",
                [cl.greenHall]: seance.hall.name === "Green",
                [cl.blueHall]: seance.hall.name === "Blue",
              })}
              key={index}
              onClick={() => buy(seance)}
            >
              {seance.time}
            </button>
          ))}
      </div>
    </div>
  );
};
