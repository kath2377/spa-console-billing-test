import { ISnackBar } from "@kushki/connect-ui/dist/Components/Atoms/DataDisplay/SnackBar/SnackBar.interface";

import { NotificationTypeEnum, SnackbarEnum } from "../enums/SnackbarEnum";

const successData: Partial<ISnackBar> = {
  color: "success",
  message: SnackbarEnum.CENTRALIZE_SUCCES,
  withIcon: true,
};

const successDataCEN: Partial<ISnackBar> = {
  color: "success",

  withIcon: true,
};

const successDataDES: Partial<ISnackBar> = {
  color: "success",

  withIcon: true,
};

const failedData: Partial<ISnackBar> = {
  color: "danger",

  message: SnackbarEnum.REQUEST_ERROR,
};

export const centralizeDataSnackbar: ISnackBar = {
  color: "success",

  message: SnackbarEnum.CENTRALIZE_SUCCES,

  variant: "simple",

  withIcon: false,
};

export const defaultDataSnackbar: ISnackBar = {
  color: "success",

  message: SnackbarEnum.REQUEST_SUCCESS,

  variant: "simple",

  withIcon: false,
};

export const buildNotification = (
  notificationType: NotificationTypeEnum,
  data: ISnackBar
): ISnackBar => {
  switch (notificationType) {
    case NotificationTypeEnum.SUCCESS:
      return {
        ...data,

        ...successData,
      };

    case NotificationTypeEnum.CENTRALIZE_SUCCES:
      return {
        ...data,

        ...successDataCEN,
      };
    case NotificationTypeEnum.DESCENTRALIZE_SUCCESS:
      return {
        ...data,

        ...successDataDES,
      };

    case NotificationTypeEnum.FAILED:
      return {
        ...data,

        ...failedData,
      };
  }
};
