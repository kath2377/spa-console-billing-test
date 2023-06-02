import { format, parse, sub } from "date-fns";
import EsLocale from "date-fns/locale/es";

const MONTHS_ABREVIATIONS_REGEX =
  /ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic/;

export const getDate = (timeStamp: number): string => {
  return format(timeStamp, "yyyy-MM-dd");
};
export const getHour = (timeStamp: number): string => {
  return format(timeStamp, "HH:mm:ss");
};

export const getFormattedDate = (date: string): string => {
  return format(new Date(date), "dd-MM-yyyy", {
    locale: EsLocale,
  });
};

export const getSimplifiedFormatedDate = (date: string): string => {
  return format(new Date(date), "dd MMM. yyyy HH:mm", {
    locale: EsLocale,
  }).replace(
    MONTHS_ABREVIATIONS_REGEX,
    (value) => `${value[0].toUpperCase()}${value.substring(1)}`
  );
};

export const getFormattedDateTime = (date: Date): string =>
  format(date, "dd/MM/yyyy HH:mm", { locale: EsLocale });

export const parseDateTime = (dateTime: string): Date =>
  parse(dateTime, "dd/MM/yyyy HH:mm", new Date(), {
    locale: EsLocale,
  });

export const subOneDay = (date: Date): Date => sub(date, { days: 1 });
