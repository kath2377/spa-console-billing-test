import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/app/app";
import countryListReducer from "./reducers/countryList/countryList";
import infoBranchesReducer from "./reducers/infoBranches/infoBranches.slice";

export const store = configureStore({
  devTools: process.env.NEXT_PUBLIC_ENV_NAME !== "primary",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    app: appReducer,
    countryList: countryListReducer,
    infoBranches: infoBranchesReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
