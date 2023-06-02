import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../shared/axios-util";
import { API_ROUTES } from "../../../shared/constants/api_routes";
import { CentralizeProcessorsRequest } from "../../../shared/interfaces/centralizeProcessorsRequest.interface";
import { CentralizeProcessorsResponse } from "../../../shared/interfaces/centralizeProcessorsResponse.interface";
import { forEach } from "lodash";

export const centralizeProcessors = createAsyncThunk<
  boolean,
  CentralizeProcessorsRequest
>(
  "processors/centralizeProcessors",
  async (centralizeProcessorsRequest: CentralizeProcessorsRequest) => {
    forEach(API_ROUTES.CENTRALIZE_PROCESSORS, async (path: string) => {
      await axios.post<CentralizeProcessorsResponse>(
        path,
        centralizeProcessorsRequest
      );
    });

    return true;
  }
);
