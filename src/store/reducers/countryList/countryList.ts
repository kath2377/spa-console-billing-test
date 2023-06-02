import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountryList } from "../../interfaces/countryList/countryList.interfaces";

export const initialState: ICountryList = { countryList: [] };

export const countryListSlice = createSlice({
  initialState,
  name: "countryListReducer",
  reducers: {
    setCountryList: (state, { payload }: PayloadAction<string[]>) => {
      state.countryList = payload;
    },
  },
});

export default countryListSlice.reducer;
