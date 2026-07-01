import { restApi } from "@/redux/restApi";
import { type RootState } from "@/redux/store";
import type {
    CreateListRequest,
    CreateListResponse,
    EditListRequest,
    EditListResponse,
    GetListsResponse
} from "@/redux/lists/types.ts";

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
        }),
        createList: builder.mutation<CreateListResponse, CreateListRequest>({
            queryFn: async (request, api, _extraOptions, baseQuery) => {
                const state = api.getState() as RootState;
                const userId = state.user.user!.id;

                const response = await baseQuery({
                    url: `/user/${userId}/lists`,
                    method: "POST",
                    body: request
                });

                if (response.error) {
                    return { error: response.error };
                }

                return { data: response.data as CreateListResponse };
            },
            invalidatesTags: ["Lists"]
        }),
        editList: builder.mutation<EditListResponse, EditListRequest>({
            queryFn: async (request, api, _extraOptions, baseQuery) => {
                const state = api.getState() as RootState;
                const userId = state.user.user!.id;

                const { id: listId, ...body } = request;

                const response = await baseQuery({
                    url: `/user/${userId}/lists/${listId}`,
                    method: "PATCH",
                    body
                });

                if (response.error) {
                    return { error: response.error };
                }

                return { data: response.data as EditListResponse };
            },
            invalidatesTags: result => (result ? ["Lists", { type: "Lists" as const, id: result.id }] : ["Lists"])
        })
    })
});

export const { useGetListsQuery, useCreateListMutation, useEditListMutation } = listApiSlice;
