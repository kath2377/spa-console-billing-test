import { format } from "date-fns";
import EsLocale from "date-fns/locale/es";

const MONTHS_ABREVIATIONS_REGEX =
  /ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic/;

export const getSimplifiedFormatedDate = (date: string): string => {
  return format(new Date(date), "dd/MMM/yyyy", {
    locale: EsLocale,
  }).replace(
    MONTHS_ABREVIATIONS_REGEX,
    (value) => `${value[0].toUpperCase()}${value.substring(1)}`
  );
};
