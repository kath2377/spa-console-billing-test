import { AnyAction, AsyncThunk } from "@reduxjs/toolkit";
import { get } from "lodash";

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;

export const isPendingAction = (action: AnyAction): action is PendingAction =>
  get(action, "type", "").endsWith("/pending");

export const isRejectedAction = (action: AnyAction): action is RejectedAction =>
  get(action, "type", "").endsWith("/rejected");
