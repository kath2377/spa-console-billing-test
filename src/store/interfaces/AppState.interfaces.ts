import { AlertColor } from "@mui/material";
import { GetNodeInfoResponse } from "../../../types/get_node_info_response";

export interface IAppState {
  loading: boolean;
  loadingText: string;
  typeAlert: AlertColor;
  showAlert: boolean;
  valueTab: string;
  nodeInfo?: GetNodeInfoResponse;
}
