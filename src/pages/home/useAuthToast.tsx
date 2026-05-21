import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

// Displays a toast message whenever login or logout succeeded or failed
export const useAuthToast = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const login = searchParams.get("login");
        const logout = searchParams.get("logout");

        if (login === "success") {
            toast.success("Successfully logged in!");
        } else if (login === "failure") {
            toast.error("Failed to log in!");
        }

        if (logout === "success") {
            toast.success("Successfully logged out!");
        }

        if (login || logout) {
            navigate(globalThis.location.pathname, { replace: true });
        }
    }, [searchParams, navigate]);
}
