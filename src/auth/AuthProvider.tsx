import { type PropsWithChildren, useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/store";
import { useMeQuery } from "@/redux/users/userApiSlice";
import { setUser, clearUser, setInitialized } from "@/redux/users/userSlice";
import { SplashScreen } from '@/pages/SplashScreen';

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [ minimumTimePassed, setMinimumTimePassed ] = useState(false);

    const dispatch = useAppDispatch();
    const { data: user, isLoading, isSuccess, isError } = useMeQuery();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMinimumTimePassed(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (isSuccess) {
            dispatch(setUser(user));
            dispatch(setInitialized(true));
        }

        if (isError) {
            dispatch(clearUser());
            dispatch(setInitialized(true));
        }
    }, [ isSuccess, isError, user, dispatch ]);

    const stillInitializing = isLoading || !minimumTimePassed;

    return (
        <>
            <SplashScreen visible={ stillInitializing } />
            { !stillInitializing && children }
        </>
    );
};
