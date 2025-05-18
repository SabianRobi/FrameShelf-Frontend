import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = "http://localhost:8080/api/v1";

export const restApi = createApi({
  reducerPath: "restApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: () => ({}),
  tagTypes: ["Movies", "User"],
});
