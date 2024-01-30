import React, { useState } from "react";

import { Schedule, Seance } from "../../types/types";

import cl from "./Sessions.module.scss";

interface SessionsProps {
  schedules: Schedule[];
  setHall: (hall: any) => void;
}

export const Sessions: React.FC<SessionsProps> = ({ schedules, setHall }) => {
  const [seancesDate, setSeancesDate] = useState<Seance[]>();

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
              onClick={() => setSeancesDate(schedule.seances)}
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
              onClick={() => setHall(seance.hall)}
            >
              {seance.time}
            </button>
          ))}
      </div>
    </div>
  );
};
