import { restApi } from "../restApi.ts";
import {
  GetLoginUrlRequest,
  GetLoginUrlResponse,
  LoginRequest,
  LoginResponse,
} from "./types.ts";

export const userApiSlice = restApi.injectEndpoints({
  endpoints: (builder) => ({
    getLoginUrl: builder.query<GetLoginUrlResponse, GetLoginUrlRequest>({
      query: () => "/auth/login/oauth2/authorize/google",
    }),
    login: builder.query<LoginResponse, LoginRequest>({
      query: (params) => ({
        url: "/auth/login/oauth2/callback/google",
        params,
      }),
    }),
  }),
});

export const { useLazyGetLoginUrlQuery, useLazyLoginQuery } = userApiSlice;
