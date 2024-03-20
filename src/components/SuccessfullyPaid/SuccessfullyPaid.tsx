import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import cl from "./SuccessfullyPaid.module.scss";

export const SuccessfullyPaid = () => {
  const navigate = useNavigate();
  const token = Cookies.get("userToken");
  const { orderNumber, film, date, time, places } = useSelector(
    (state: RootState) => state.payment
  );

  return (
    <div>
      <div className={cl.payment}>
        <i className="bx bx-check-circle"></i>
        <h2>Оплата прошла успешно!</h2>
      </div>

      <div className={cl.ticketInfo}>
        <p className={cl.title}>Номер билета</p>
        <p>{orderNumber}</p>
        <p className={cl.title}>Фильм</p>
        <p>{film}</p>
        <p className={cl.title}>Дата и время</p>
        <p>
          {date} {time}
        </p>
        <p className={cl.title}>Places</p>
        <p>Ряд: {places.row}</p>
        <p>Место: {places.seat}</p>
      </div>
      <div className={cl.additionalInfo}>
        Вся информация была продублирована в SMS
        <button
          className={cl.button}
          onClick={() => navigate("/account", { state: { token: token } })}
        >
          Перейти в личный кабинет
        </button>
      </div>
    </div>
  );
};
