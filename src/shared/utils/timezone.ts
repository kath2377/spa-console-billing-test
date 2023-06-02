import { DATE_VALUES } from "../constants/date_values";
import getTimeZoneInHours from "./current_timezone";

export const getFormattedTimezoneOffset = (timezoneOffsetInMin: number) => {
  const sign = timezoneOffsetInMin < 0 ? "+" : "-";

  const timezoneAbs = Math.abs(timezoneOffsetInMin);

  const timezoneOffsetInHours = timezoneAbs / 60;

  const formattedTimezone = timezoneOffsetInHours.toLocaleString("es-ES", {
    minimumIntegerDigits: 2,
    useGrouping: true,
  });

  return `${sign}${formattedTimezone}:00`;
};

export const setCurrentTimeZone = (time: string) => {
  const currentHour = parseInt(time.split(":")[0]) - getTimeZoneInHours();
  const currentHourNumber =
    currentHour < 0 ? DATE_VALUES.HOURS_IN_A_DAY + currentHour : currentHour;
  const currentHourNumberDigits =
    currentHourNumber < 10 ? "0" + currentHourNumber : currentHourNumber;

  return currentHourNumberDigits + time.slice(2);
};
