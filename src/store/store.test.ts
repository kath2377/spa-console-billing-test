import { initialState as appInitialState } from "./reducers/app/app";
import { initialState as countryListInitialState } from "./reducers/countryList/countryList";
import { store } from "./store";
import { initialStateInfoBranch } from "./reducers/infoBranches/infoBranches.slice";

describe("Global store", () => {
  it("should return the initial global state", () => {
    const initialGlobalState = store.getState();

    expect(initialGlobalState).toEqual({
      app: appInitialState,
      countryList: countryListInitialState,
      infoBranches: initialStateInfoBranch,
    });
  });
});
