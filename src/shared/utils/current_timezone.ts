import { DATE_VALUES } from "../constants/date_values";

const getTimeZoneInHours = () => {
  return new Date().getTimezoneOffset() / DATE_VALUES.MINUTES_PER_HOUR;
};

export default getTimeZoneInHours;
