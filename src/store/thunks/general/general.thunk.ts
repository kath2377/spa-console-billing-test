import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetNodeInfoResponse } from "../../../../types/get_node_info_response";
import axios from "../../../shared/axios-util";
import { API_ROUTES } from "../../../shared/constants/api_routes";
import { getJwtAuth } from "../../../shared/utils/getJwtAuth_utils";

export const callGetNodeInfo = async (payload: {
  configIds?: string;
  publicMerchantId: string;
}) => {
  const response = await axios.post<GetNodeInfoResponse>(
    API_ROUTES.NODE_INFO,
    {
      configIds: payload.configIds,
      publicMerchantId: payload.publicMerchantId,
    },
    {
      headers: {
        Authorization: getJwtAuth(),
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const getNodeInfo = createAsyncThunk<
  GetNodeInfoResponse,
  { configIds?: string; publicMerchantId: string }
>("general/nodeInfo", callGetNodeInfo);
