import { AnyAction } from "@reduxjs/toolkit";
import countryList, { initialState } from "./countryList";
import { ICountryList } from "../../interfaces/countryList/countryList.interfaces";
import { setCountryList } from "../../actions/countryList.actions";

describe("countryListReducer", () => {
  const previousState: ICountryList = {
    countryList: [],
  };

  it("should return the initial state", () => {
    expect(countryList(undefined, {} as AnyAction)).toEqual(initialState);
    expect(countryList(previousState, setCountryList([]))).toEqual({
      ...previousState,
      countryList: [],
    });
  });
});
