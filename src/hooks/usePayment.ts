import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setSuccessful } from "../store/paymentDetails/paymentDetails.slice.ts";
import { IUser, IdebitCard } from "../types/types.ts";

interface IPlaces {
  row: number;
  seat: number;
}

export const usePayment = (
  movieId: string,
  user: IUser,
  debitCard: IdebitCard,
  date: string,
  time: string,
  places: IPlaces
) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const buyTicket = async () => {
    const options = {
      method: "POST",
      url: "https://shift-backend.onrender.com/cinema/payment",
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

      response.data.success &&
        dispatch(setSuccessful(true)) &&
        navigate(`/film/${movieId}`);
    } catch (error) {
      console.error(error);
    }
  };
  return buyTicket;
};
