import { useEffect, useState } from "react";
import axios from "axios";
import { backUrl } from "../constants/constants";

import { Schedule } from "../types/types";

interface APIResponse {
  success: boolean;
  schedules: Schedule[];
}
export const useSchedule = (filmId: string | undefined) => {
  const [schedules, setSchedules] = useState<Schedule[]>();

  useEffect(() => {
    const func = async () => {
      try {
        const response = await axios.get<APIResponse>(
          `${backUrl}/cinema/film/${filmId}/schedule`
        );
        //console.log(response.data.schedules);
        setSchedules(response.data.schedules);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);

  return schedules;
};
