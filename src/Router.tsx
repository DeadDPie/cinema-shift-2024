import React from "react";
import { Route, Routes } from "react-router-dom";

import { Afisha } from "./components/screens/afisha/Afisha";
import { FilmPage } from "./components/screens/afisha/filmpage/FilmPage";
import { Payment } from "./components/payment/Payment";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Afisha />} />
      <Route path="/film/:filmId" element={<FilmPage />} />
      <Route path="/payment" element={<Payment />} />

      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};
