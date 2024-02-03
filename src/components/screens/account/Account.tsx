import React from "react";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";

import { Ticket } from "./ticket/Ticket";
import { Header } from "@header/Header";
import { useOrders } from "@hooks/useOrders";

import cl from "./Account.module.scss";

export const Account: React.FC = () => {
  const location = useLocation();
  const token = location.state?.token;

  if (token) {
    Cookies.set("userToken", token);
  }

  const tickets = useOrders(token);
  const isUserAuthorised = token && token.length > 0 ? true : false;

  return (
    <>
      <Header />
      <div className={cl.Account}>
        {isUserAuthorised && (
          <>
            <h1>Профиль</h1>
            <p>Ваши билеты</p>
            <div className={cl.ticketsList}>
              {tickets &&
                tickets.map((ticket, index) => (
                  <Ticket key={index} token={token} ticket={ticket} />
                ))}
            </div>
          </>
        )}
        {!isUserAuthorised && <h1>Авторизируйтесь</h1>}
      </div>
    </>
  );
};
