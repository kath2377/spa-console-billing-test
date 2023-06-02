import { store } from "../../store";
import axiosUtil from "../../../shared/axios-util";
import { getNodeInfo } from "./general.thunk";
import { getNodeInfoBranch } from "../infoBranches/infoBranches.thunk";

describe("General thunk ", () => {
  it("When getMerchantInfo thunk is called successfully, then should call axios.post", async () => {
    await store.dispatch(
      getNodeInfo({
        configIds: "cn006",
        publicMerchantId: "string",
      })
    );

    expect(axiosUtil.post).toBeCalled();
  });
  it("When getNodeInfo thunk is called successfully, then should call axios.post", async () => {
    await store.dispatch(
      getNodeInfoBranch({ configIds: "cn006", publicMerchantId: "string" })
    );

    expect(axiosUtil.post).toBeCalled();
  });
});
