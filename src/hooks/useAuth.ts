import { useNavigate } from "react-router-dom";
import { backUrl } from "../constants/constants";

import axios from "axios";

export const useAuth = (phone: string, code: string) => {
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    const options = {
      method: "POST",
      url: `${backUrl}/users/signin`,
      data: { phone: `${phone}`, code: parseInt(code) },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);

      response.data.success &&
        navigate("/account", { state: { token: response.data.token } });
    } catch (error) {
      console.error(error);
    }
  };

  return handleButtonClick;
};

export const useRequestCode = (phone: string) => {
  const handleRequestCode = async () => {
    const options = {
      method: "POST",
      url: `${backUrl}/auth/otp`,
      data: { phone: `${phone}` },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return handleRequestCode;
};
