import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  email: string | null;
  id: string | null;
};

const initialState: UserState = {
  email: null,
  id: "myUserId",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<UserState>) => {
      state.email = payload.email;
      state.id = payload.id;
    },
    clearUser: (state) => {
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
