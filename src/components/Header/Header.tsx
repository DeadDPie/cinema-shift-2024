import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import cl from "./Header.module.scss";

export const Header = () => {
  const navigate = useNavigate();
  const token = Cookies.get("userToken");

  const isUserAuthorised = token && token.length > 0 ? true : false;

  const unAuthorise = () => {
    Cookies.remove("userToken");
    navigate("/auth");
  };

  return (
    <header className={cl.header}>
      <nav className={cl.nav}>
        <Link to="/" className={cl.logo}>
          Cinema
        </Link>
      </nav>
      {!isUserAuthorised && (
        <button onClick={() => navigate("/auth")} className={cl.button}>
          Войти
        </button>
      )}
      {isUserAuthorised && (
        <>
          <button
            onClick={() => navigate("/account", { state: { token: token } })}
            className={cl.button}
          >
            Билеты
          </button>
          <button onClick={unAuthorise} className={cl.button}>
            Выйти
          </button>
        </>
      )}
    </header>
  );
};
