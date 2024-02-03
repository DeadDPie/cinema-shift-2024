import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { RootState } from "@store/store";
import {
  choseFilm,
  chosePlaces,
  setFilmId,
  setSuccessful,
} from "@paymentDetails/paymentDetails.slice";
import { setPhone } from "@store/user/user.slice";

import { Hall, Place, User } from "../../types/types";

import cl from "./CinemaHall.module.scss";

interface CinemaHallProps {
  user: User | undefined;
  name: string;
  cinema: Hall;
  movieId: string;
  callbackModal: (modal: boolean) => void;
}

interface SelectedPlace {
  row: number;
  placeNumber: number;
  price: number;
}

export const CinemaHall: React.FC<CinemaHallProps> = ({
  user,
  name,
  cinema,
  movieId,
  callbackModal,
}) => {
  const navigate = useNavigate();
  const token = Cookies.get("userToken");
  const dispatch = useDispatch();

  const isUserAuthorised = token && token.length > 0 ? true : false;

  const [place, setPlace] = useState<SelectedPlace>({
    row: 0,
    placeNumber: 0,
    price: 0,
  });

  const buy = (name: string, place: SelectedPlace) => {
    dispatch(choseFilm(name));
    dispatch(chosePlaces(place));
    dispatch(setFilmId(movieId));
    dispatch(setSuccessful(false));

    callbackModal(true);
  };

  const buyWithAuth = () => {
    dispatch(setFilmId(movieId));
    dispatch(setSuccessful(false));
    {
      user && dispatch(setPhone(user.phone));
    }
  };
  const userData = useSelector((state: RootState) => state.user);
  const chhec = useSelector((state: RootState) => state.payment);
  const goToPayment = (name: string, place: SelectedPlace) => {
    dispatch(choseFilm(name));
    dispatch(chosePlaces(place));
    console.log(userData);
    console.log(chhec);

    navigate("/payment", { state: { user: userData } });
  };

  return (
    <div>
      <div className={cl.schedule}>
        <div className={cl.cinema}>
          {cinema &&
            cinema.places.map((row: Place[], indexRow: number) => (
              <div>
                {row.map((Place: Place, indexPlace: number) => (
                  <button
                    onClick={() => {
                      setPlace({
                        ...place,
                        row: indexRow + 1,
                        price: Place.price,
                        placeNumber: indexPlace + 1,
                      });
                      buyWithAuth();
                    }}
                    className={`${cl.place} ${
                      Place.type === "ECONOM" ? cl.econom : cl.comfort
                    } ${Place.price == 0 ? cl.blocked : ""} ${
                      place.placeNumber === indexPlace + 1 &&
                      place.row === indexRow + 1
                        ? cl.clicked
                        : ""
                    } `}
                  ></button>
                ))}
              </div>
            ))}
        </div>
        <div className={cl.ticket}>
          <div className={cl.info}>
            <div>
              <p className={cl.h1}>Hallname: </p>
              {cinema && <p>{cinema.name}</p>}
            </div>
            <p className={cl.h1}>Film:</p>
            <p>{name}</p>
            <p className={cl.h1}>Places</p>
            <p>
              Row: {place.row} Seat number: {place.placeNumber}
            </p>
          </div>
          <div className={cl.cost}>
            <p>Full price</p>
            <p>{place.price}</p>
          </div>
          {isUserAuthorised && (
            <button className={cl.btn} onClick={() => goToPayment(name, place)}>
              Buy <i className="bx bx-credit-card-front"></i>
            </button>
          )}
          {!isUserAuthorised && (
            <button className={cl.btn} onClick={() => buy(name, place)}>
              Buy <i className="bx bx-credit-card-front"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
