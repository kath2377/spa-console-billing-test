import { useMediaQuery, useTheme } from "@mui/material";

export interface AppState {
  isMobile: boolean;
}

export const useMobileState = (): AppState => {
  const theme = useTheme();

  return {
    isMobile: useMediaQuery(theme.breakpoints.down("xs")),
  };
};
