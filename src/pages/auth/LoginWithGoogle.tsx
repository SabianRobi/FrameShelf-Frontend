const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const LoginWithGoogle = () => {
    globalThis.location.href = BACKEND_URL + "/auth/login/oauth2/authorize/google";

    return <p>Logging in with Google...</p>;
};
