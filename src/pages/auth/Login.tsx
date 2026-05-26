import { Navigate } from "react-router-dom";

export const Login = () => (
    // Since only one login method is currently implemented, just redirect the user to Google login.
    <Navigate to="/auth/login/google" />
);
