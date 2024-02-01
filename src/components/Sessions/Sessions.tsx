import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { choseTime, choseDate } from "@paymentDetails/paymentDetails.slice";

import { Schedule, Seance } from "../../types/types";

import cl from "./Sessions.module.scss";

interface SessionsProps {
  schedules: Schedule[];
  setHall: (hall: any) => void;
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
              className={`${cl.btn} ${
                seancesDate === schedule.seances ? cl.clicked : ""
              }`}
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
              className={`${cl.time} ${
                seance.hall.name === "Red" && cl.redHall
              } ${seance.hall.name === "Green" && cl.greenHall} ${
                seance.hall.name === "Blue" && cl.blueHall
              }`}
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
