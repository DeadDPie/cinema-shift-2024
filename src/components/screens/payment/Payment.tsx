import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { usePayment } from "@hooks/usePayment";
import { RootState } from "@store/store";
import { IUser, IdebitCard } from "../../../types/types";
import cl from "./Payment.module.scss";

export const Payment: React.FC = () => {
  const location = useLocation();
  const user: IUser = (location.state as any).user; //Можно ли так делать "location.state as any", как будет правильно?

  console.log(user);

  const [debitCard, setDebitCard] = useState<IdebitCard>({
    pan: "",
    expireDate: "",
    cvv: "",
  });

  const { filmId, date, time, places } = useSelector(
    (state: RootState) => state.payment
  );

  console.log(filmId);
  console.log(date);
  console.log(places);
  console.log(debitCard);

  const buyTicket = usePayment(filmId, user, debitCard, date, time, places);

  return (
    <div className={cl.payment}>
      <h2>Enter your payment details</h2>
      <div className={cl.card}>
        <div>
          <div className={cl.number}>
            <p>Number*</p>
            <input
              type="text"
              placeholder="0000 0000"
              value={debitCard.pan || ""}
              minLength={8}
              maxLength={9}
              onChange={(e) =>
                setDebitCard({ ...debitCard, pan: e.target.value })
              }
            />
          </div>
          <div className={cl.other}>
            <div className={cl.date}>
              <p>Date</p>
              <input
                type="text"
                placeholder="00/00"
                value={debitCard.expireDate || ""}
                onChange={(e) =>
                  setDebitCard({ ...debitCard, expireDate: e.target.value })
                }
              />
            </div>
            <div className={cl.cvv}>
              <p>CVV*</p>
              <input
                type="text"
                placeholder="000"
                minLength={3}
                maxLength={4}
                value={debitCard.cvv || ""}
                onChange={(e) =>
                  setDebitCard({ ...debitCard, cvv: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>

      <button className={cl.btn} onClick={() => buyTicket()}>
        Pay
      </button>
    </div>
  );
};
