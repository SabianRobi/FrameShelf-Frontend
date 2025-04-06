import { configureStore } from "@reduxjs/toolkit";
import { restApi } from "./restApi.ts";

export default configureStore({
  devTools: true,
  reducer: {
    [restApi.reducerPath]: restApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restApi.middleware),
});
