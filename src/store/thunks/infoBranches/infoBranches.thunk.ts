import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchMerchantNodeResponse } from "../../reducers/infoBranches/infoBranches.slice";
import axios from "../../../shared/axios-util";
import { API_ROUTES } from "../../../shared/constants/api_routes";
import { getJwtAuth } from "../../../shared/utils/getJwtAuth_utils";
import { SearchMerchantNodeRequest } from "../../../shared/interfaces/searchMerchantNodeRequest.interface";
import { GetNodeInfoResponse } from "../../../../types/get_node_info_response";
import { callGetNodeInfo } from "../general/general.thunk";
import { CentralizeNodeRequest } from "../../../shared/interfaces/centralizeNodeRequest.interface";
import { CentralizeNodeResponse } from "../../../shared/interfaces/centralizeNodeResponse.interface";
import { DecentralizeNodeResponse } from "../../../shared/interfaces/decentralizeNodeResponse.interface";
import { Decentralizerequest } from "../../../shared/interfaces/decentralizeRequest.interface";
import { AsyncMassiveActionRequest } from "../../../../types/async_massive_action_request";
import { AsyncMassiveActionResponse } from "../../../../types/async_massive_action_response";

export const searchMerchantNode = createAsyncThunk<
  SearchMerchantNodeResponse,
  SearchMerchantNodeRequest
>("infoBranches/searchMerchantNode", async (searchMerchantNodeRequest) => {
  const response = await axios.post<SearchMerchantNodeResponse>(
    API_ROUTES.SEARCH_MERCHANT_NODE,
    searchMerchantNodeRequest,
    {
      headers: {
        Authorization: getJwtAuth(),
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
});

export const getNodeInfoBranch = createAsyncThunk<
  GetNodeInfoResponse,
  { publicMerchantId: string; configIds?: string }
>("infoBranches/nodeInfo", callGetNodeInfo);

export const centralizeBranch = createAsyncThunk<
  CentralizeNodeResponse,
  CentralizeNodeRequest
>(
  "infoBranches/centralizeBranch",
  async (centralizeNodeRequest: CentralizeNodeRequest) => {
    const response = await axios.post<CentralizeNodeResponse>(
      API_ROUTES.CENTRALIZE,
      centralizeNodeRequest
    );

    return response.data;
  }
);
export const decentralizeBranches = createAsyncThunk<
  boolean,
  Decentralizerequest
>("infoBranches/decentralizeBranch", async (decentralizeRequest) => {
  await axios.patch<DecentralizeNodeResponse>(
    API_ROUTES.DESCENTRALIZE,
    decentralizeRequest.customer
  );

  for (const branch of decentralizeRequest.branch) {
    await axios.patch<DecentralizeNodeResponse>(
      API_ROUTES.DESCENTRALIZE,
      branch
    );
  }

  return true;
});

export const asyncMassiveAction = createAsyncThunk<
  boolean,
  AsyncMassiveActionRequest
>(
  "infoBranches/asyncMassiveAction",
  async (request: AsyncMassiveActionRequest) => {
    await axios.post<AsyncMassiveActionResponse>(
      API_ROUTES.ASYNC_MASSIVE_ACTION,
      request
    );

    return true;
  }
);
