import axios from "../../../shared/axios-util";
import { store } from "../../store";
import { centralizeProcessors } from "./processors.thunk";

describe("processors thunk tests", () => {
  it("should get status fulfilled when centralizeProcessors is executed", async () => {
    (axios.post as jest.Mock).mockResolvedValue({
      data: {
        status: "ok",
      },
    });
    const res = await store.dispatch(
      centralizeProcessors({ merchantIds: ["544656", "1212323"] })
    );

    expect(res.meta.requestStatus).toEqual("fulfilled");
  });
});
