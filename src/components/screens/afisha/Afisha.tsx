import { Header } from "@header/Header";
import { CardsList } from "../../CardsList/FilmCardList";

import cl from "./Afisha.module.scss";

export const Afisha = () => (
  <>
    <Header />
    <h2 className={cl.h2}>Afisha</h2>
    <CardsList />
  </>
);
