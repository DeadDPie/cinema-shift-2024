import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { backUrl } from "../constants/constants";

import {
  setSuccessful,
  setOrderNumber,
} from "@paymentDetails/paymentDetails.slice";
import { User, IdebitCard } from "../types/types.ts";

interface Places {
  row: number;
  seat: number;
}

export const usePayment = (
  movieId: string,
  user: User,
  debitCard: IdebitCard,
  date: string,
  time: string,
  places: Places
) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const buyTicket = async () => {
    const options = {
      method: "POST",
      url: `${backUrl}/cinema/payment`,
      data: {
        filmId: `${movieId}`,
        person: {
          firstname: `${user.firstname}`,
          lastname: `${user.lastname}`,
          middlename: `${user.middlename}`,
          phone: `${user.phone}`,
        },
        debitCard: {
          pan: `${debitCard.pan}`,
          expireDate: `${debitCard.expireDate}`,
          cvv: `${debitCard.cvv}`,
        },
        seance: {
          date: `${date}`,
          time: `${time}`,
        },
        tickets: [
          {
            row: places.row,
            column: places.seat,
          },
        ],
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      console.log(response.data.order.orderNumber);

      response.data.success &&
        dispatch(setSuccessful(true)) &&
        dispatch(setOrderNumber(response.data.order.orderNumber)) &&
        navigate(`/film/${movieId}`);
    } catch (error) {
      console.error(error);
    }
  };
  return buyTicket;
};
