import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BackendInfo } from "./types";

type BackendInfoState = {
  info: BackendInfo | null;
};

const initialState: BackendInfoState = {
  info: null
};

export const backendInfoSlice = createSlice({
  name: "backend",
  initialState: initialState,
  reducers: {
    setBackendInfo: (state, { payload }: PayloadAction<BackendInfo>) => {
      state.info = payload;
    },
  },
});

export const { setBackendInfo } = backendInfoSlice.actions;
