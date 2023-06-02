import { SxProps, Theme } from "@mui/material";

export interface IStyles {
  [k: string]: SxProps<Theme>;
}

export type NamedStyles<T> = {
  [K in keyof T]: SxProps<Theme>;
};

export const createNamedStyles = <K extends IStyles>(
  styles: K
): NamedStyles<K> => styles;
