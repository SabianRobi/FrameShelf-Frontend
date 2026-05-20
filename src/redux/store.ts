import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { restApi } from "./restApi.ts";
import { userSlice } from "./users/userSlice.ts";

const DBEUG = Boolean(import.meta.env.VITE_DEBUG.toLowerCase() == "true");

export const store = configureStore({
  devTools: DBEUG,
  reducer: {
    user: userSlice.reducer,
    [restApi.reducerPath]: restApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
