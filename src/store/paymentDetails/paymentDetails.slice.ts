import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PaymentState {
  orderNumber: number;
  filmId: string;
  film: string;
  date: string;
  time: string;
  places: {
    row: number;
    seat: number;
  };
  isSuccessful: boolean;
  name: string;
}

const initialState: PaymentState = {
  orderNumber: 0,
  filmId: "",
  film: "",
  date: "",
  time: "",
  places: { row: 0, seat: 0 },
  isSuccessful: false,
  name: "",
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setSuccessful: (state, action: PayloadAction<boolean>) => {
      state.isSuccessful = action.payload;
    },
    setOrderNumber: (state, action: PayloadAction<number>) => {
      state.orderNumber = action.payload;
    },
    setFilmId: (state, action: PayloadAction<string>) => {
      state.filmId = action.payload;
    },
    choseFilm: (state, action: PayloadAction<string>) => {
      state.film = action.payload;
    },
    choseDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    choseTime: (state, action: PayloadAction<string>) => {
      state.time = action.payload;
    },
    choseName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    chosePlaces: (
      state,
      action: PayloadAction<{ row: number; placeNumber: number }>
    ) => {
      state.places.row = action.payload.row;
      state.places.seat = action.payload.placeNumber;
    },
  },
});

export const {
  setOrderNumber,
  choseFilm,
  choseDate,
  choseTime,
  choseName,
  chosePlaces,
  setFilmId,
  setSuccessful,
} = paymentSlice.actions;

export default paymentSlice.reducer;
