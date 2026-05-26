import { restApi } from "@/redux/restApi";
import { type RootState } from "@/redux/store";
import type { GetListsResponse } from "@/redux/lists/types.ts";

export const listApiSlice = restApi.injectEndpoints({
    endpoints: builder => ({
        getLists: builder.query<GetListsResponse, void>({
            queryFn: async (_arg, api, _extraOptions, baseQuery) => {
                const state = api.getState() as RootState;
                const userId = state.user.user!.id;

                const response = await baseQuery({
                    url: `/user/${userId}/lists`
                });

                if (response.error) {
                    return { error: response.error };
                }

                return { data: response.data as GetListsResponse };
            },
            providesTags: result =>
                result ? [...result.content.map(({ id }) => ({ type: "Lists" as const, id })), "Lists"] : ["Lists"]
        })
    })
});

export const { useGetListsQuery } = listApiSlice;
