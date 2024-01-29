import React from "react";
import { Route, Routes } from "react-router-dom";
import { Afisha } from "./components/screens/afisha/Afisha";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Afisha />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};
