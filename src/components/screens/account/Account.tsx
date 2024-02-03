import React from "react";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";

import { Ticket } from "./ticket/Ticket";
import { Link } from "react-router-dom";
import { useOrders } from "@hooks/useOrders";

import cl from "./Account.module.scss";

export const Account: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = location.state?.token;

  if (token) {
    Cookies.set("userToken", token);
  }

  const tickets = useOrders(token);

  const unAuthorise = () => {
    Cookies.remove("userToken");
    navigate("/auth");
  };

  return (
    <div>
      <div className={cl.Account}>
        <h1>Account</h1>
        <p>Your tickets</p>
        <div className={cl.ticketsList}>
          {tickets &&
            tickets.map((ticket, index) => (
              <Ticket key={index} token={token} ticket={ticket} />
            ))}
        </div>
      </div>
    </div>
  );
};
