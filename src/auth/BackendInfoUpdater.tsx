import { useEffect } from "react";
import { useGetBackendInfoMutation } from "@/redux/backend/backendApiSlice";

export const BackendInfoUpdater = () => {
    const [getBackendInfo] = useGetBackendInfoMutation();

    useEffect(() => {
        getBackendInfo();
    }, []);

    return null;
};
