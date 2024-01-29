import React, { FC } from "react";

import { Header } from "../../Header/Header";
import { CardsList } from "../../CardsList/CardList";

import cl from "./Afisha.module.scss";

export const Afisha: FC = () => {
  return (
    <>
      <Header />
      <h2 className={cl.h2}>Afisha</h2>
      <CardsList />
    </>
  );
};
