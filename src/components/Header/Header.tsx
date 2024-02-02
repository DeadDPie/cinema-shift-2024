import { Link } from "react-router-dom";

import cl from "./Header.module.scss";

export const Header = () => (
  <header className={cl.header}>
    <nav className={cl.nav}>
      <Link to="/" className={cl.logo}>
        Cinema
      </Link>
      <button className={cl.button}>Профиль</button>
      <button className={cl.button}>Билеты</button>
    </nav>
    <button className={cl.button}>Выйти</button>
  </header>
);
