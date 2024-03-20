import { useEffect, useState } from "react";
import axios from "axios";
import { backUrl } from "../constants/constants";

import { Order, OrderResponse } from "../types/types";

export const useOrders = (token: string) => {
  const [tickets, setTickets] = useState<Order[] | undefined>();

  useEffect(() => {
    const fetchOrders = async () => {
      const options = {
        method: "GET",
        url: `${backUrl}/cinema/orders`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.request<OrderResponse>(options);
        console.log(response.data);
        setTickets(response.data.orders);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  }, []);

  return tickets;
};
