import { initialState as appInitialState } from "./reducers/app/app";
import { store } from "./store";

describe("Global store", () => {
  it("should return the initial global state", () => {
    const initialGlobalState = store.getState();

    expect(initialGlobalState).toEqual({
      app: appInitialState,
    });
  });
});
