import { restApi } from "../restApi";
import { type DeleteUserRequest, type UserResponse } from "./types";
import { clearUser } from "@/redux/users/userSlice";

export const userApiSlice = restApi.injectEndpoints({
    endpoints: builder => ({
        me: builder.query<UserResponse, void>({
            query: () => ({
                url: "/user/me"
            })
        }),

        logout: builder.mutation<void, void>({
            query: () => ({
                url: "/auth/logout",
                method: "POST"
            })
        }),

        deleteUser: builder.mutation<void, DeleteUserRequest>({
            query: ({ userId }) => ({
                url: "/user/" + userId,
                method: "DELETE"
            }),

            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;

                    dispatch(clearUser());
                    dispatch(restApi.util.resetApiState());
                } catch {
                    throw Error("Something went wrong during deleting the account.");
                }
            }
        })
    })
});

export const { useLogoutMutation, useMeQuery, useLazyMeQuery, useDeleteUserMutation } = userApiSlice;
