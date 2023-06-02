import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "../../interfaces/AppState.interfaces";
import { getFirebaseId } from "../../thunks/general/general.thunk";

export const initialState: IAppState = {
  firebaseId: "",
  isLoadingDownload: false,
};

export const appSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(getFirebaseId.fulfilled, (state: IAppState, action) => {
      state.firebaseId = action.payload.id;
      state.isLoadingDownload = false;
    });
    builder.addCase(getFirebaseId.rejected, (state: IAppState) => {
      state.isLoadingDownload = false;
    });
    builder.addCase(getFirebaseId.pending, (state: IAppState) => {
      state.isLoadingDownload = true;
    });
  },
  initialState,
  name: "app",
  reducers: {},
});

export default appSlice.reducer;
