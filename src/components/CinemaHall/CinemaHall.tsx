import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  choseFilm,
  chosePlaces,
  setFilmId,
  setSuccessful,
} from "../../store/paymentDetails/paymentDetails.slice.ts";
import { Hall, Place } from "../../types/types";

import cl from "./CinemaHall.module.scss";

interface IPlace {
  row: string;
  placeNumber: string;
}
interface CinemaHallProps {
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
  name,
  cinema,
  movieId,
  callbackModal,
}) => {
  const dispatch = useDispatch();

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
          <button className={cl.btn} onClick={() => buy(name, place)}>
            Buy <i className="bx bx-credit-card-front"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
