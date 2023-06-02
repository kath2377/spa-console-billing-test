import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { findIndex, get, isEmpty } from "lodash";
import {
  centralizeBranch,
  decentralizeBranches,
  getNodeInfoBranch,
  searchMerchantNode,
} from "../../thunks/infoBranches/infoBranches.thunk";
import { Configs } from "../../../../types/get_node_info_response";
import { ISnackBar } from "@kushki/connect-ui/dist/Components/Atoms/DataDisplay/SnackBar/SnackBar.interface";
import { buildNotification } from "../../../shared/constants/snackBar";
import { NotificationTypeEnum } from "../../../shared/enums/SnackbarEnum";

export interface SearchMerchantNodeResponse {
  data?: MerchantNodeData[];
  total?: number;
}

export interface MerchantNodeData {
  client_type?: string;
  country?: string;
  merchant_status?: string;
  public_merchant_id?: string;
  social_reason?: string;
  tax_id?: string;
  node_id?: string;
  merchant_id?: string;
  config_core_id?: string;
  root_id?: string;
  status?: string;
  path?: string;
  country_code?: string;
  node_type?: string;
  entity_name?: string;
  name?: string;
  description?: string;
  is_deleted?: boolean;
  created_by?: string;
  created?: string;
  updated_at?: string;
  deleted_at?: string;
  constitutional_country?: string;
  configs?: Configs[];
  is_centralized?: boolean;
}

export interface infoBranchInterface {
  searchMerchantNode: MerchantNodeData[];
  isLoadingModal: boolean;
  notification: ISnackBar | undefined;
  selectRows: number;
  searchMerchantNodeStatus: string;
}

export const initialStateInfoBranch: infoBranchInterface = {
  isLoadingModal: false,
  notification: undefined,
  searchMerchantNode: [],
  searchMerchantNodeStatus: "NONE",
  selectRows: 0,
};

export const infoBranchesSlice = createSlice({
  extraReducers: async (builder) => {
    await builder
      .addCase(searchMerchantNode.fulfilled, (state, { payload }) => {
        state.searchMerchantNode = [...get(payload, "data", [])];
        state.searchMerchantNodeStatus = "FINALIZE";
      })
      .addCase(searchMerchantNode.pending, (state) => {
        state.searchMerchantNodeStatus = "PENDING";
      })
      .addCase(getNodeInfoBranch.fulfilled, (state, { payload }) => {
        const index: number = findIndex(state.searchMerchantNode, {
          node_id: payload.nodeId,
        });
        const configs = get(payload, "configs", []);

        if (index > -1) {
          state.searchMerchantNode.splice(index, 1, {
            ...state.searchMerchantNode[index],
            configs,
            is_centralized: configs.some(
              (config) => !isEmpty(config.centralizedNodesId)
            ),
          });
        }
      })

      .addCase(centralizeBranch.fulfilled, (state, {}) => {
        state.isLoadingModal = false;
        state.notification = buildNotification(
          NotificationTypeEnum.CENTRALIZE_SUCCES,
          {
            color: "success",
            message: `Se centralizó los ${state.selectRows} Branches con éxito`,
            variant: "simple",
            withIcon: false,
          }
        );
      })

      .addCase(centralizeBranch.rejected, (state, {}) => {
        state.isLoadingModal = false;
        state.notification = buildNotification(NotificationTypeEnum.FAILED, {
          color: "success",
          message: "Error al centralizar branch(es)",
          variant: "simple",
          withIcon: false,
        });
      })

      .addCase(centralizeBranch.pending, (state, {}) => {
        state.isLoadingModal = true;
      })
      .addCase(decentralizeBranches.fulfilled, (state, {}) => {
        state.isLoadingModal = false;
        state.notification = buildNotification(
          NotificationTypeEnum.DESCENTRALIZE_SUCCESS,
          {
            color: "success",
            message: `Se descentralizó los ${state.selectRows} Branches con éxito`,
            variant: "simple",
            withIcon: false,
          }
        );
      })

      .addCase(decentralizeBranches.rejected, (state, {}) => {
        state.isLoadingModal = false;
        state.notification = buildNotification(NotificationTypeEnum.FAILED, {
          color: "success",
          message: "Error al descentralizar branch(es)",
          variant: "simple",
          withIcon: false,
        });
      })

      .addCase(decentralizeBranches.pending, (state, {}) => {
        state.isLoadingModal = true;
      });
  },
  initialState: initialStateInfoBranch,
  name: "infoBranches",
  reducers: {
    setIsLoadingModal: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoadingModal = payload;
    },
    setNotification: (
      state,
      { payload }: PayloadAction<ISnackBar | undefined>
    ) => {
      state.notification = payload;
    },
    setSearchMerchantNodeStatus: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.searchMerchantNodeStatus = payload;
    },
    setSelectedRows: (state, { payload }: PayloadAction<number>) => {
      state.selectRows = payload;
    },
  },
});

export default infoBranchesSlice.reducer;
