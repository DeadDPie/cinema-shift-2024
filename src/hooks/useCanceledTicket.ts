import axios from "axios";
import { backUrl } from "../constants/constants";

export const useCanceledTicket = (
  token: string,
  id: string
): React.MouseEventHandler<HTMLButtonElement> => {
  const handleButtonClick:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined = async () => {
    const options = {
      method: "PUT",
      url: `${backUrl}/cinema/orders/cancel`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        orderId: `${id}`,
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return handleButtonClick;
};
