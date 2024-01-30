import { useEffect, useState } from "react";
import axios from "axios";

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
          `https://shift-backend.onrender.com/cinema/film/${filmId}/schedule`
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
