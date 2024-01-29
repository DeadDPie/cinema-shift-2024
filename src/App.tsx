import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
