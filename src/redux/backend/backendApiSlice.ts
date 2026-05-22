import { restApi } from "@/redux/restApi.ts";
import { type BackendInfoResponse } from "./types.ts";
import { setBackendInfo } from "./backendSlice.ts";

export const backendApiSlice = restApi.injectEndpoints({
  endpoints: (builder) => ({
    getBackendInfo: builder.mutation<BackendInfoResponse, void>({
      query: () => ({
        url: "/actuator/info",
        method: "GET",
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setBackendInfo(data));
        } catch {
          throw Error("Something went wrong during getting the backend info.");
        }
      },

    })
  })
});

export const { useGetBackendInfoMutation } = backendApiSlice;
