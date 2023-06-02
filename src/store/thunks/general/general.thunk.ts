import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../shared/axios-util";
import { API_ROUTES } from "../../../shared/constants/api_routes";
import { getJwtAuth } from "../../../shared/utils/getJwtAuth_utils";
import { databaseRef } from "../../../shared/firebase";
import { ITransactionFile } from "../../../../types/transaction_file";
import { isNil } from "lodash";

export const getFirebaseId = createAsyncThunk<{ id: string }, { body: object }>(
  "general/getFirebaseId",
  async (payload: { body: object }) => {
    const response = await axios.post<{ id: string }>(
      API_ROUTES.SEARCH_BILLING,
      payload.body,
      {
        headers: {
          Authorization: getJwtAuth(),
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  }
);

export const getBillingFile = createAsyncThunk<boolean, string>(
  "general/getBillingFile",
  async (payload: string) => {
    console.log("se manda con ....", API_ROUTES.BILLING_FILE + payload);
    databaseRef
      .child(API_ROUTES.BILLING_FILE + payload)
      .on("value", (snapshot) => {
        const file: ITransactionFile = snapshot.val();

        console.log("aaaaaaaaaa", snapshot.val());

        if (file.url !== undefined) {
          // dispatch(setTransactionsBillingFile(snapshot.val()));
          console.log("aaaaaaaaaa", snapshot.val());
          if (!isNil(snapshot.val())) {
            const a: HTMLElementTagNameMap["a"] = document.createElement("a");

            a.setAttribute("style", "display: none");
            a.href = `${snapshot.val().url}`;
            document.body.appendChild(a);
            a.click();
            a.remove();
          }
        }
      });

    return true;
  }
);
