import { AnyAction } from "@reduxjs/toolkit";
import { store } from "../../store";
import axios from "../../../../src/shared/axios-util";
import appReducer, { initialState } from "./app";
import { getNodeInfo } from "../../thunks/general/general.thunk";

describe("appReducer", () => {
  it("should return the initial state", () => {
    expect(appReducer(undefined, {} as AnyAction)).toEqual(initialState);
  });

  it("When getNodeInfo thunk is called successfully, then should call axios.post and set nodeInfo in the store", async () => {
    const data = {
      configCoreId: "101abc002",
      configs: [],
      countryCode: "MEX",
      entityName: "BRANCH",
      generalInfo: {
        clientType: "B2C",
        constitutionalCountry: "Mexico",
        country: "Mexico",
        name: "BRANCH JHON TEST",
        publicMerchantId: "20000000100315500001",
      },
      hasChilds: false,
      merchantId: "20000000100315500001",
      nodeId: "74fa294eb885",
      path: "76d725f027a7:7a2083464145:74fa294eb885",
      rootId: "76d725f027a7",
    };

    (axios.post as jest.Mock).mockResolvedValue({ data });

    await store.dispatch(
      getNodeInfo({
        configIds: "test",
        publicMerchantId: "test",
      })
    );

    expect(axios.post).toBeCalled();
    expect(store.getState().app.nodeInfo).toBe(data);
  });
});
