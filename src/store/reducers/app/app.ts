import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "../../interfaces/AppState.interfaces";
import { getNodeInfo } from "../../thunks/general/general.thunk";

export const initialState: IAppState = {
  loading: false,
  loadingText: "",
  showAlert: false,
  typeAlert: "success",
  valueTab: "1",
};

export const appSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(getNodeInfo.fulfilled, (state, action) => {
      state.nodeInfo = action.payload;
    });
  },
  initialState,
  name: "app",
  reducers: {},
});

export default appSlice.reducer;
