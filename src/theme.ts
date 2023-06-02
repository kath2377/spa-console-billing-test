import { createTheme } from "@mui/material/styles";

const Palette = {
  primary: {
    dark2: "#0E1E2E",
    dark: "#112B45",
    main: "#023365",
    light: "#1E65AE",
    light2: "#4498EE",
    light3: "#EEF6FF",
    components: {
      light: {
        default: "#4499EE",
        hover: "#3879CD",
        focus: "#3F8BE0",
        disable: "#BFDFFA",
      },
    },
  },
  secondary: {
    dark2: "#3B9D86",
    dark: "#0DC298",
    main: "#00E6B2",
    light: "#00FCC1",
    light2: "#B7FFEE",
    light3: "#E0FFF8",
  },
  error: {
    dark2: "#AD0C2A",
    dark: "#D62C4B",
    main: "#E24763",
    light: "#E26C81",
    light2: "#F6AEBB",
    light3: "#FFEAEE",
  },
  alternate: {
    dark2: "#8F4F8B",
    dark: "#BD62B4",
    main: "#DD85C3",
    light: "#E6A6D3",
    light2: "#FDD9F2",
    light3: "#FEECF8",
  },
  warning: {
    dark2: "#CF711A",
    dark: "#DFA720",
    main: "#FBC748",
    light: "#FFD879",
    light2: "#FEE19B",
    light3: "#FFF1D0",
  },
  background: {
    paper: "#FAFCFD",
    default: "#FFFFFF",
  },
  neutral: {
    800: "#293036",
    700: "#46525C",
    600: "#677784",
    500: "#CBD5E0",
    400: "#E2E8F0",
    300: "#F0F4F8",
    200: "#F7FAFC",
    100: "#FBFCFE",
    50: "#FFFFFF",
    components: {
      shadow: "#0E1E2E",
      disabled: "#B4B9BE",
    },
  },
  text: {
    primary: "#023365",
    secondary: "#0DC298",
    dark: "#293036",
    disabled: "#B4B9BE",
    red: "#E24763",
    white: "#FFFFFF",
    lightGrey: "#B4B9BE",
    grey: "#6D7781",
  },
  gradients: {
    gradientA: "linear-gradient(180deg, #00E6B2 0%, #023365 100%)",
    gradientB: "linear-gradient(180deg, #0093A2 0%, #00E6B2 100%)",
    gradientC: "linear-gradient(135deg, #023365 0%, #1E65AE 100%)",
    gradientD: "linear-gradient(180deg, #023365 100% , #00E6B2 0%)",
    gradientE: "linear-gradient(180deg, #FFFFFF 0%, #F7FAFC 100%)",
  },
};

const ThemeFonts = {
  screenxl: {
    h1: 40,
    h2: 32,
    h3: 28,
    h4: 24,
    h5: 20,
    h6: 16,
    subtitle1: 20,
    subtitle2: 16,
    body1: 18,
    body2: 16,
    caption: 15,
    overline: 13,
    numericText: 16,
    button: 16,
    buttonsm: 14,
    buttonlg: 20,
    inputLabel: 14,
    inputText: 16,
    helperText: 12,
    tooltip: 14,
    avatarLetter: 20,
    chip: 14,
    tag: 12,
  },
  screenlg: {
    h1: 38,
    h2: 30,
    h3: 26,
    h4: 22,
    h5: 18,
    h6: 16,
    subtitle1: 20,
    subtitle2: 16,
    body1: 18,
    body2: 16,
    caption: 14,
    overline: 13,
    numericText: 16,
    button: 16,
    buttonsm: 14,
    buttonlg: 20,
    inputLabel: 14,
    inputText: 16,
    helperText: 12,
    tooltip: 14,
    avatarLetter: 18,
    chip: 14,
    tag: 12,
  },
  screenmd: {
    h1: 28,
    h2: 24,
    h3: 22,
    h4: 20,
    h5: 18,
    h6: 16,
    subtitle1: 18,
    subtitle2: 15,
    body1: 17,
    body2: 16,
    caption: 14,
    overline: 13,
    numericText: 15,
    button: 15,
    buttonsm: 13,
    buttonlg: 18,
    inputLabel: 14,
    inputText: 15,
    helperText: 11,
    tooltip: 13,
    avatarLetter: 16,
    chip: 14,
    tag: 12,
  },
  screensm: {
    h1: 23,
    h2: 21,
    h3: 20,
    h4: 19,
    h5: 18,
    h6: 16,
    subtitle1: 17,
    subtitle2: 14,
    body1: 16,
    body2: 14,
    caption: 12,
    overline: 12,
    numericText: 14,
    button: 14,
    buttonsm: 13,
    buttonlg: 16,
    inputLabel: 14,
    inputText: 14,
    helperText: 11,
    tooltip: 12,
    avatarLetter: 16,
    chip: 14,
    tag: 12,
  },
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 360,
    mm: 630,
    md: 960,
    lg: 1280,
    xl: 1600,
  },
};

const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      //@ts-ignore
      dark2: Palette.primary.dark2,
      dark: Palette.primary.dark,
      main: Palette.primary.main,
      light: Palette.primary.light,
      light2: Palette.primary.light2,
      light3: Palette.primary.light3,
      components: {
        light: {
          default: Palette.primary.components.light.default,
          hover: Palette.primary.components.light.hover,
          //@ts-ignore
          focus: Palette.primary.components.light.focus,
          disable: Palette.primary.components.light.disable,
        },
      },
    },
    secondary: {
      //@ts-ignore
      dark2: Palette.secondary.dark2,
      dark: Palette.secondary.dark,
      main: Palette.secondary.main,
      light: Palette.secondary.light,
      light2: Palette.secondary.light2,
      light3: Palette.secondary.light3,
    },
    error: {
      //@ts-ignore
      dark2: Palette.error.dark2,
      dark: Palette.error.dark,
      main: Palette.error.main,
      light: Palette.error.light,
      light2: Palette.error.light2,
      light3: Palette.error.light3,
    },
    alternate: {
      //@ts-ignore
      dark2: Palette.alternate.dark2,
      dark: Palette.alternate.dark,
      main: Palette.alternate.main,
      light: Palette.alternate.light,
      light2: Palette.alternate.light2,
      light3: Palette.alternate.light3,
    },
    warning: {
      //@ts-ignore
      dark2: Palette.warning.dark2,
      main: Palette.warning.main,
      dark: Palette.warning.dark,
      light: Palette.warning.light,
      light2: Palette.warning.light2,
      light3: Palette.warning.light3,
    },
    background: {
      paper: Palette.background.paper,
      default: Palette.background.default,
    },
    neutral: {
      //@ts-ignore
      grey8: Palette.neutral[800],
      grey7: Palette.neutral[700],
      grey6: Palette.neutral[600],
      grey5: Palette.neutral[500],
      grey4: Palette.neutral[400],
      grey3: Palette.neutral[300],
      grey2: Palette.neutral[200],
      grey1: Palette.neutral[100],
      white: Palette.neutral[50],
      components: {
        shadow: Palette.neutral.components.shadow,
        disabled: Palette.neutral.components.disabled,
      },
    },
    text: {
      primary: Palette.text.primary,
      secondary: Palette.text.secondary,
      //@ts-ignore
      dark: Palette.text.dark,
      disabled: Palette.text.disabled,
      //@ts-ignore
      red: Palette.text.red,
      white: Palette.text.white,
      lightGrey: Palette.text.lightGrey,
      grey: Palette.text.grey,
    },
    gradients: {
      gradientA: Palette.gradients.gradientA,
      gradientB: Palette.gradients.gradientB,
      gradientC: Palette.gradients.gradientC,
      gradientD: Palette.gradients.gradientD,
      gradientE: Palette.gradients.gradientE,
    },
  },
  breakpoints,
  typography: {
    fontFamily: "IBM Plex Sans, Helvetica, sans-serif",
    h1: {
      fontSize: ThemeFonts.screenxl.h1 + `px`,
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "120%",
      letterSpacing: "-0.015em",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.h1 + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h1 + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h1 + `px`,
      },
    },
    h2: {
      fontSize: ThemeFonts.screenxl.h2 + `px`,
      fontWeight: 500,
      lineHeight: "120%",
      fontStyle: "normal",
      letterSpacing: "-0.015em",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h2 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h2 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h2 + `px`,
        fontWeight: "500",
      },
    },
    h3: {
      fontSize: ThemeFonts.screenxl.h3 + `px`,
      fontWeight: 600,
      lineHeight: "120%",
      fontStyle: "normal",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h3 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h3 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h3 + `px`,
        fontWeight: "500",
      },
    },
    h4: {
      fontSize: ThemeFonts.screenxl.h4 + `px`,
      fontWeight: 500,
      lineHeight: "120%",
      fontStyle: "normal",
      letterSpacing: "0.0025em",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h4 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h4 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h4 + `px`,
        fontWeight: "500",
      },
    },
    h5: {
      fontSize: ThemeFonts.screenxl.h5 + `px`,
      fontWeight: 500,
      lineHeight: "140%",
      fontStyle: "normal",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h5 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h5 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h5 + `px`,
        fontWeight: "500",
      },
    },
    h6: {
      fontSize: ThemeFonts.screenxl.h6 + `px`,
      fontWeight: 400,
      lineHeight: "120%",
      fontStyle: "normal",
      letterSpacing: "0.0015em",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h6 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h6 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h6 + `px`,
        fontWeight: "500",
      },
    },
    subtitle1: {
      fontSize: ThemeFonts.screenxl.subtitle1 + `px`,
      fontWeight: 300,
      lineHeight: "120%",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.subtitle1 + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.subtitle1 + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.subtitle1 + `px`,
      },
    },
    subtitle2: {
      fontSize: ThemeFonts.screenxl.subtitle2 + `px`,
      fontWeight: 500,
      lineHeight: "150%",
      letterSpacing: "0.0025em",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.subtitle2 + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.subtitle2 + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.subtitle2 + `px`,
      },
    },
    body1: {
      fontSize: ThemeFonts.screenxl.body1 + `px`,
      fontWeight: "normal",
      lineHeight: "150%",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.body1 + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.body1 + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.body1 + `px`,
      },
    },
    body2: {
      fontSize: ThemeFonts.screenxl.body2 + `px`,
      fontWeight: "normal",
      lineHeight: "150%",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.body2 + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.body2 + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.body2 + `px`,
      },
    },
    caption: {
      lineHeight: "144%",
      fontSize: ThemeFonts.screenmd.caption + `px`,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.caption + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.caption + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.caption + `px`,
      },
    },
    overline: {
      lineHeight: "120%",
      fontWeight: "normal",
      textTransform: "inherit",
      letterSpacing: "0.01em",
      fontSize: ThemeFonts.screenxl.overline + `px`,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.overline + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.overline + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.overline + `px`,
      },
    },
    button: {
      //Numeric Text Style
      fontFamily: "IBM Plex Mono",
      lineHeight: "120%",
      fontWeight: "normal",
      textTransform: "none",
      fontSize: ThemeFonts.screenxl.overline + `px`,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.overline + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.overline + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.overline + `px`,
      },
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          wordWrap: "break-word",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          padding: "12px 30px",
          height: "44px",
          borderRadius: "16px",
          fontWeight: "400",
          letterSpacing: "0.0025em",
          lineHeight: "140%",
          fontFamily: "IBM Plex Sans",
          fontSize: ThemeFonts.screenxl.button + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.button + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.button + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.button + `px`,
          },
        },
        sizeLarge: {
          height: "52px",
          padding: "12px 30px",
          fontSize: ThemeFonts.screenxl.buttonlg + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.buttonlg + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.buttonlg + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.buttonlg + `px`,
          },
        },
        sizeSmall: {
          height: "36px",
          padding: "8px 30px",
          fontSize: ThemeFonts.screenxl.buttonsm + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.buttonsm + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.buttonsm + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.buttonsm + `px`,
          },
        },
        containedPrimary: {
          border: `1px solid ` + Palette.primary.components.light.default,
          backgroundColor: Palette.primary.components.light.default,
          boxShadow:
            "0px 51px 80px rgba(106, 167, 197, 0.07), 0px 33.0556px 46.8519px rgba(106, 167, 197, 0.0531481), 0px 19.6444px 25.4815px rgba(106, 167, 197, 0.0425185), 0px 10.2px 13px rgba(106, 167, 197, 0.035), 0px 4.15556px 6.51852px rgba(106, 167, 197, 0.0274815), 0px 0.944444px 3.14815px rgba(106, 167, 197, 0.0168519)",
          "&:hover": {
            color: Palette.neutral[50],
            backgroundColor: Palette.primary.components.light.hover,
            border: `1px solid ` + Palette.primary.components.light.hover,
            boxShadow:
              "0px 36px 65px rgba(106, 167, 197, 0.16), 0px 18.225px 28.3359px rgba(106, 167, 197, 0.12), 0px 7.2px 10.5625px rgba(106, 167, 197, 0.08), 0px 1.575px 3.75781px rgba(106, 167, 197, 0.03)",
          },
          "&:focus, &:active": {
            backgroundColor: Palette.primary.components.light.focus,
            border: `1px solid ` + Palette.primary.components.light.focus,
            color: Palette.neutral[50],
            boxShadow:
              "0px 8px 17px rgba(106, 167, 197, 0.15), 0px 1.6px 2.7625px rgba(106, 167, 197, 0.075)",
          },
          "&:disabled": {
            backgroundColor: Palette.primary.components.light.disable,
            border: `1px solid ` + Palette.primary.components.light.disable,
            color: Palette.neutral[50],
          },
        },
        containedSecondary: {
          backgroundColor: Palette.neutral[50],
          border: `1px solid ` + Palette.neutral[50],
          color: Palette.text.grey,
          "&:hover": {
            backgroundColor: Palette.neutral[100],
            border: `1px solid ` + Palette.neutral[100],
            color: Palette.text.grey,
          },
          "&:focus, &:active": {
            backgroundColor: Palette.neutral[100],
            border: `1px solid ` + Palette.neutral[100] + "!important",
            color: Palette.text.primary,
          },
          "&:disabled": {
            backgroundColor: Palette.neutral[100],
            border: `1px solid ` + Palette.neutral[100] + "!important",
            color: Palette.neutral[500],
          },
        },
        textPrimary: {
          backgroundColor: Palette.neutral[50],
          border: `1px solid ` + Palette.neutral[50],
          color: Palette.primary.light2,
          "&:hover": {
            backgroundColor: Palette.neutral[50],
            border: `1px solid ` + Palette.neutral[50],
            color: Palette.primary.light2,
            boxShadow:
              "0px 10px 80px rgba(106, 167, 197, 0.1), 0px 5.0625px 34.875px rgba(106, 167, 197, 0.05), 0px 2px 13px rgba(106, 167, 197, 0.03), 0px 0.4375px 4.625px rgba(106, 167, 197, 0.02)",
          },
          "&:focus, &:active": {
            backgroundColor: Palette.neutral[50],
            border: `1px solid ` + Palette.neutral[50],
            color: Palette.text.grey,
            boxShadow:
              "0px 10px 80px rgba(106, 167, 197, 0.1), 0px 5.0625px 34.875px rgba(106, 167, 197, 0.05), 0px 2px 13px rgba(106, 167, 197, 0.03), 0px 0.4375px 4.625px rgba(106, 167, 197, 0.02)",
          },
          "&:disabled": {
            backgroundColor: Palette.neutral[50],
            border: `1px solid ` + Palette.neutral[500],
            color: Palette.text.grey,
            opacity: "35%",
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "error" },
          style: {
            backgroundColor: Palette.neutral[50],
            border: `1px solid ` + Palette.error.light3,
            color: Palette.error.main,
            "&:hover": {
              backgroundColor: Palette.error.light3,
              border: `1px solid ` + Palette.error.light3,
              color: Palette.error.main,
              boxShadow:
                "0px 10px 80px rgba(106, 167, 197, 0.1), 0px 5.0625px 34.875px rgba(106, 167, 197, 0.05), 0px 2px 13px rgba(106, 167, 197, 0.03), 0px 0.4375px 4.625px rgba(106, 167, 197, 0.02)",
            },
            "&:focus, &:active": {
              backgroundColor: Palette.error.light3,
              border: `1px solid ` + Palette.error.light,
              color: Palette.error.main,
              boxShadow: "none",
            },
            "&:disabled": {
              backgroundColor: Palette.neutral[50],
              border: `1px solid ` + Palette.error.light2,
              color: Palette.error.light2,
              opacity: "35%",
            },
          },
        },
      ],
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: "10px",
          height: "44px",
          width: "44px",
          borderRadius: "48px",
          fontSize: ThemeFonts.screenxl.button + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.button + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.button + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.button + `px`,
          },
        },
        sizeSmall: {
          height: "36px",
          width: "36px",
          padding: "6px",
          fontSize: ThemeFonts.screenxl.buttonsm + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.buttonsm + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.buttonsm + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.buttonsm + `px`,
          },
          svg: {
            fontSize: "1.25rem!important",
          },
        },
        sizeLarge: {
          height: "52px",
          width: "52px",
          padding: "14px",
          fontSize: ThemeFonts.screenxl.buttonlg + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.buttonlg + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.buttonlg + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.buttonlg + `px`,
          },
          svg: {
            fontSize: "1.72rem!important",
          },
        },
        //@ts-ignore
        colorPrimary: {
          color: Palette.neutral[50],
          border: `1px solid ` + Palette.primary.components.light.default,
          backgroundColor: Palette.primary.components.light.default,
          boxShadow:
            "0px 51px 80px rgba(106, 167, 197, 0.07), 0px 33.0556px 46.8519px rgba(106, 167, 197, 0.0531481), 0px 19.6444px 25.4815px rgba(106, 167, 197, 0.0425185), 0px 10.2px 13px rgba(106, 167, 197, 0.035), 0px 4.15556px 6.51852px rgba(106, 167, 197, 0.0274815), 0px 0.944444px 3.14815px rgba(106, 167, 197, 0.0168519)",
          filter:
            "drop-shadow(0px 8px 17px rgba(106, 167, 197, 0.15)) drop-shadow(0px 1.6px 2.7625px rgba(106, 167, 197, 0.075))",
          "&:hover": {
            color: Palette.neutral[50],
            backgroundColor: Palette.primary.components.light.hover,
            border: `1px solid ` + Palette.primary.components.light.hover,
            boxShadow:
              "0px 36px 65px rgba(106, 167, 197, 0.16), 0px 18.225px 28.3359px rgba(106, 167, 197, 0.12), 0px 7.2px 10.5625px rgba(106, 167, 197, 0.08), 0px 1.575px 3.75781px rgba(106, 167, 197, 0.03)",
            filter:
              "drop-shadow(0px 36px 65px rgba(106, 167, 197, 0.16)) drop-shadow(0px 18.225px 28.3359px rgba(106, 167, 197, 0.12)) drop-shadow(0px 7.2px 10.5625px rgba(106, 167, 197, 0.08)) drop-shadow(0px 1.575px 3.75781px rgba(106, 167, 197, 0.03))",
          },
          "&:focus, &:active": {
            backgroundColor: Palette.primary.components.light.focus,
            border: `1px solid ` + Palette.primary.components.light.focus,
            boxShadow:
              "0px 8px 17px rgba(106, 167, 197, 0.15), 0px 1.6px 2.7625px rgba(106, 167, 197, 0.075)",
            filter:
              "drop-shadow(0px 36px 65px rgba(106, 167, 197, 0.16)) drop-shadow(0px 18.225px 28.3359px rgba(106, 167, 197, 0.12)) drop-shadow(0px 7.2px 10.5625px rgba(106, 167, 197, 0.08)) drop-shadow(0px 1.575px 3.75781px rgba(106, 167, 197, 0.03))",
          },
          "&:disabled": {
            backgroundColor: Palette.primary.components.light.disable,
            border: `1px solid ` + Palette.primary.components.light.disable,
            color: Palette.neutral[50],
            boxShadow: "none",
          },
        },
        colorSecondary: {
          backgroundColor: Palette.neutral[50],
          border: `1px solid ` + Palette.neutral[50],
          color: Palette.text.primary,
          boxShadow:
            "0px 8px 17px rgba(106, 167, 197, 0.15), 0px 1.6px 2.7625px rgba(106, 167, 197, 0.075)",
          filter:
            "drop-shadow(0px 8px 17px rgba(106, 167, 197, 0.15)) drop-shadow(0px 1.6px 2.7625px rgba(106, 167, 197, 0.075))",
          "&:hover, &:active, &:focus, &:disabled": {
            backgroundColor: Palette.neutral[50],
            border: `1px solid ` + Palette.neutral[50],
          },
          "&:hover": {
            color: Palette.primary.light2,
            boxShadow:
              "0px 51px 80px rgba(106, 167, 197, 0.07), 0px 33.0556px 46.8519px rgba(106, 167, 197, 0.0531481), 0px 19.6444px 25.4815px rgba(106, 167, 197, 0.0425185), 0px 10.2px 13px rgba(106, 167, 197, 0.035), 0px 4.15556px 6.51852px rgba(106, 167, 197, 0.0274815), 0px 0.944444px 3.14815px rgba(106, 167, 197, 0.0168519)",
          },
          "&:active, &:focus": {
            color: Palette.text.primary,
          },
          "&:disabled": {
            color: Palette.text.primary,
            opacity: "35%",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: "4px 5px",
          "&+.MuiFormControlLabel-label": {
            fontSize: ThemeFonts.screenxl.inputLabel + `px` + `!important`,
          },
          ".Mui-disabled+.MuiSwitch-track": {
            opacity: "0.3" + "!important",
          },
        },
        switchBase: {
          color: Palette.neutral[50] + "!important",
        },
        thumb: {
          boxShadow: "none",
        },
        track: {
          borderRadius: "48px",
          opacity: "initial" + "!important",
          backgroundColor: Palette.neutral[600],
        },
        colorPrimary: {
          "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: Palette.primary.light2 + "!important",
          },
        },
        colorSecondary: {
          "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: Palette.secondary.dark + "!important",
          },
        },
        sizeSmall: {
          padding: "0px",
          "&+.MuiFormControlLabel-label": {
            marginLeft: "5px",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&+.MuiFormControlLabel-label": {
            fontSize: ThemeFonts.screenxl.inputLabel + `px` + `!important`,
          },
          "&.Mui-disabled": {
            color: Palette.neutral[600] + `!important`,
            opacity: "0.3",
          },
        },
        colorPrimary: {
          color: Palette.primary.light2,
          "&.Mui-checked": {
            color: Palette.primary.light2,
          },
        },
        colorSecondary: {
          color: Palette.secondary.dark,
          "&.Mui-checked": {
            color: Palette.secondary.dark,
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          "&+.MuiFormControlLabel-label": {
            fontSize: ThemeFonts.screenxl.inputLabel + `px` + `!important`,
          },
          "&.Mui-disabled": {
            color: Palette.neutral[600] + "!important",
            opacity: "0.3",
          },
        },
        colorPrimary: {
          color: Palette.primary.light2,
          "&.Mui-checked": {
            color: Palette.primary.light2,
          },
        },
        colorSecondary: {
          color: Palette.secondary.dark,
          "&.Mui-checked": {
            color: Palette.secondary.dark,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "0px 0px 16px 16px;",
          fontSize: ThemeFonts.screenxl.tooltip + `px`,
          color: Palette.text.white,
          padding: "8px 16px",
          fontWeight: "normal",
          lineHeight: "144%",
          boxShadow: "none",
          ".MuiAlert-message": {
            width: "100%",
            justifyContent: "space-between",
            display: "flex",
            a: {
              fontSize: "13px",
              letterSpacing: "0.01em",
              margin: "0px 16px",
              color: "currentColor",
            },
          },
          ".MuiAlert-action": {
            padding: "0px",
            marginRight: "0px",
            alignItems: "center",
            svg: {
              fontSize: "0.9em",
              stroke: "currentColor",
            },
          },
        },
        filledSuccess: {
          backgroundColor: Palette.primary.components.light.disable,
          color: Palette.text.primary,
        },
        filledError: {
          color: Palette.error.dark2,
          backgroundColor: Palette.error.light3,
        },
        /*filledWarning: {
          backgroundColor: Palette.warning.light2
        },
        filledInfo: {
          backgroundColor: Palette.neutral[800]
        }*/
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          padding: "4px 16px",
          borderRadius: "4px" + "!important",
          textTransform: "uppercase",
          fontWeight: "500",
          lineHeight: "170%",
          letterSpacing: "0.02em",
          "&.sizeLarge": {
            height: "28px",
          },
          ".MuiChip-deleteIcon": {
            fontSize: "0.85em",
            stroke: "currentColor",
            color: Palette.text.primary,
            paddingLeft: "10px",
            marginRight: "0px",
          },
          ".MuiChip-label": {
            padding: "0",
          },
          fontSize: ThemeFonts.screenxl.tag + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.tag + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.tag + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.tag + `px`,
          },
        },
        //@ts-ignore
        //Chip Styles = Default
        colorDefault: {
          "&.MuiChip-filledDefault": {
            borderRadius: "8px" + "!important",
            backgroundColor: Palette.neutral[400],
            color: Palette.text.dark,
            textTransform: "none",
            lineHeight: "140%",
            letterSpacing: "normal",
            fontWeight: "400",
            fontSize: ThemeFonts.screenxl.chip + `px`,
            [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
              fontSize: ThemeFonts.screenlg.chip + `px`,
            },
            [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
              fontSize: ThemeFonts.screenmd.chip + `px`,
            },
            [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
              fontSize: ThemeFonts.screensm.chip + `px`,
            },
          },
        },
        colorSuccess: {
          "&.MuiChip-filledSuccess": {
            backgroundColor: Palette.secondary.light3,
            color: Palette.secondary.dark2,
          },
        },
        colorError: {
          "&.MuiChip-filledError": {
            backgroundColor: Palette.error.light3,
            color: Palette.error.dark2,
          },
        },
        colorInfo: {
          "&.MuiChip-filledInfo": {
            backgroundColor: Palette.neutral[300],
            color: Palette.text.grey,
          },
        },
        colorSecondary: {
          "&.MuiChip-filledSecondary": {
            backgroundColor: Palette.alternate.light3,
            color: Palette.alternate.dark2,
          },
        },
        colorPrimary: {
          "&.MuiChip-filledPrimary": {
            backgroundColor: Palette.primary.light3,
            color: Palette.primary.main,
          },
        },
        colorWarning: {
          "&.MuiChip-filledWarning": {
            backgroundColor: Palette.neutral[200],
            color: Palette.text.grey,
          },
        },
        sizeMedium: {
          height: "26px",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: Palette.primary.dark,
          padding: "12px 16px",
          borderRadius: "8px",
          fontWeight: "400",
          fontSize: ThemeFonts.screenxl.tooltip + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.tooltip + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.tooltip + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.tooltip + `px`,
          },
          span: {
            color: Palette.primary.dark,
          },
          p: {
            fontWeight: "600",
            fontSize: ThemeFonts.screenxl.tooltip + `px`,
            [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
              fontSize: ThemeFonts.screenlg.tooltip + `px`,
            },
            [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
              fontSize: ThemeFonts.screenmd.tooltip + `px`,
            },
            [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
              fontSize: ThemeFonts.screensm.tooltip + `px`,
            },
          },
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontSize: ThemeFonts.screenxl.overline + `px`,
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenlg.overline + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.overline + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.overline + `px`,
          },
          button: {
            position: "relative",
            top: "0.2em",
            padding: "0",
            background: "transparent",
            margin: "0",
            "&:hover": {
              color: Palette.primary.components.light.hover,
              background: "transparent",
            },
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        colorSecondary: {
          color: Palette.neutral[50],
          background: Palette.secondary.dark,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: Palette.text.grey,
          "&.Mui-error": {
            color: Palette.text.grey,
            margin: "3px 4px 0px 4px",
            fontSize: "13px",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: Palette.text.grey,
          fontSize: ThemeFonts.screenxl.inputText + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.inputText + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.inputText + `px`,
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.inputText + `px`,
          },
        },
        outlined: {
          borderRadius: "8px",
          top: "-5px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px!important",
          position: "relative",
          input: {
            padding: "10.5px 14px",
            color: Palette.text.dark,
            fontSize: ThemeFonts.screenxl.inputText + `px`,
            [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
              fontSize: ThemeFonts.screenlg.inputText + `px`,
            },
            [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
              fontSize: ThemeFonts.screenmd.inputText + `px`,
            },
            [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
              fontSize: ThemeFonts.screensm.inputText + `px`,
            },
          },
          ".MuiInputAdornment-positionEnd": {
            color: Palette.neutral.components.disabled,
          },
          "&.Mui-error": {
            input: {
              color: Palette.error.dark2,
            },
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: Palette.neutral[500],
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline , &:hover .MuiOutlinedInput-notchedOutline":
            {
              borderColor: Palette.primary.light + "!important",
              borderWidth: "1px",
            },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: Palette.error.dark2 + "!important",
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: Palette.neutral.components.disabled + "!important",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: Palette.text.grey + "!important",
          top: "-6px" + "!important",
          "&.MuiInputLabel-shrink": {
            top: "0px" + "!important",
          },
          "&.Mui-error": {
            color: Palette.error.dark2 + "!important",
          },
          "&.Mui-disabled": {
            color: Palette.neutral.components.disabled + "!important",
          },
        },
      },
    },
  },
});

export default theme;
