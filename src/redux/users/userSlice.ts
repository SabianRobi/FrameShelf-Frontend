import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./types";

type UserState = {
  user: User | null;
  initialized: boolean;
};

const initialState: UserState = {
  user: null,
  initialized: false
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },

    clearUser: (state) => {
      state.user = null;
    },

    setInitialized: (state, { payload }) => {
      state.initialized = payload;
    },
  },
});

export const { setUser, clearUser, setInitialized } = userSlice.actions;
