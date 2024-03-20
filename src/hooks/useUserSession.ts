import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "src/types/types";
import { backUrl } from "../constants/constants";

export const useUserSession = (
  token: string,
  cinema: object
): User | undefined => {
  const [user, setUser] = useState();

  useEffect(() => {
    const func = async () => {
      const options = {
        method: "GET",
        url: `${backUrl}/users/session`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios.request(options);
        //console.log(response.data);
        response.data.success && setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, [cinema]);

  return user;
};
