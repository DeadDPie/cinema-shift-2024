import React from "react";
import { Route, Routes } from "react-router-dom";

import { Afisha } from "./components/screens/afisha/Afisha";
import { FilmPage } from "./components/screens/filmpage/FilmPage";
import { Payment } from "./components/screens/payment/Payment";
import { ROUTES } from "./constants/router";
export const Router = () => (
  <Routes>
    <Route path={ROUTES.ROOT} element={<Afisha />} />
    <Route path={ROUTES.FILM} element={<FilmPage />} />
    <Route path={ROUTES.PAYMENT} element={<Payment />} />

    <Route path="*" element={<div>Not found</div>} />
  </Routes>
);
