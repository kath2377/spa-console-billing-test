import { CountryEnum, CountryTitleEnum } from "./countryEnum";
import {
  FlagBrasil,
  FlagChile,
  FlagColombia,
  FlagCostaRica,
  FlagEcuador,
  FlagElSalvador,
  FlagGuatemala,
  FlagHonduras,
  FlagMexico,
  FlagNicaragua,
  FlagPanama,
  FlagPeru,
  FlagUsa,
  IconFlag,
} from "@kushki/connect-ui";
import React from "react";

export interface CountryInterface {
  title: string;
  flag: JSX.Element;
}

export const FlagsNames: Record<string, object> = {
  [CountryEnum.guatemala]: {
    flag: <FlagGuatemala fontSize="inherit" />,
    title: CountryTitleEnum.guatemala,
  },
  [CountryEnum.mexico]: {
    flag: <FlagMexico fontSize="inherit" />,
    title: CountryTitleEnum.mexico,
  },
  [CountryEnum.panama]: {
    flag: <FlagPanama fontSize="inherit" />,
    title: CountryTitleEnum.panama,
  },
  [CountryEnum.peru]: {
    flag: <FlagPeru fontSize="inherit" />,
    title: CountryTitleEnum.peru,
  },
  [CountryEnum.ecuador]: {
    flag: <FlagEcuador fontSize="inherit" />,
    title: CountryEnum.ecuador,
  },
  [CountryEnum.brasil]: {
    flag: <FlagBrasil fontSize="inherit" />,
    title: CountryTitleEnum.brasil,
  },
  [CountryEnum.chile]: {
    flag: <FlagChile fontSize="inherit" />,
    title: CountryEnum.chile,
  },
  [CountryEnum.costa_rica]: {
    flag: <FlagCostaRica fontSize="inherit" />,
    title: CountryTitleEnum.costa_rica,
  },
  [CountryEnum.colombia]: {
    flag: <FlagColombia fontSize="inherit" />,
    title: CountryEnum.colombia,
  },
  [CountryEnum.honduras]: {
    flag: <FlagHonduras fontSize="inherit" />,
    title: CountryEnum.honduras,
  },
  [CountryEnum.usa]: {
    flag: <FlagUsa fontSize="inherit" />,
    title: CountryEnum.usa,
  },
  [CountryEnum.nicaragua]: {
    flag: <FlagNicaragua fontSize="inherit" />,
    title: CountryEnum.nicaragua,
  },
  [CountryEnum.el_salvador]: {
    flag: <FlagElSalvador fontSize="inherit" />,
    title: CountryTitleEnum.el_salvador,
  },
  [CountryEnum.generic]: {
    flag: <IconFlag data-testid={"default-flag"} />,
    title: CountryEnum.generic,
  },
};
