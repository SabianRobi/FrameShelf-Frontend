import { useAppSelector } from "@/redux/store.ts";
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
    const user = useAppSelector((state) => state.user.user);

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return (
        <Outlet />
    );
};
