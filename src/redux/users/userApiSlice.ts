import { restApi } from "../restApi.ts";
import {
  UserResponse,
} from "./types.ts";

export const userApiSlice = restApi.injectEndpoints({
  endpoints: (builder) => ({
    me: builder.query<UserResponse, void>({
      query: () => ({
        url: "/user/me"
      }),
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLogoutMutation, useMeQuery, useLazyMeQuery } = userApiSlice;
