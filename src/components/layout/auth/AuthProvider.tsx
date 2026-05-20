import { PropsWithChildren, useEffect } from "react";
import { useAppDispatch } from "@/redux/store.ts";
import { useMeQuery } from "@/redux/users/userApiSlice.ts"
import { setUser, clearUser, setInitialized } from "@/redux/users/userSlice.ts"

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const dispatch = useAppDispatch();
    const { data: user, isError } = useMeQuery();

    useEffect(() => {
        if (user) {
            dispatch(setUser(user));
        }

        if (isError) {
            dispatch(clearUser());
        }

        dispatch(setInitialized(true));
    }, [user, isError]);

    return children;
}
