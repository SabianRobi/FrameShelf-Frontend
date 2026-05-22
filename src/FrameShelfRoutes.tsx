import { Home } from "./pages/Home.tsx";
import { BrowserRouter, Route, Routes as Routes } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout.tsx";
import { LoginWithGoogle } from "@/pages/auth/LoginWithGoogle.tsx";
import { Login } from "@/pages/auth/Login.tsx";
import { Profile } from "@/pages/Profile.tsx";
import { Lists } from "@/pages/Lists.tsx";
import { ProtectedRoute } from "@/auth/ProtectedRoute.tsx";

export const FrameShelfRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <AppLayout /> } >
                    <Route index element={ <Home /> } />

                    <Route path="auth/login">
                        <Route index element={ <Login /> } />
                        <Route path="google" element={ <LoginWithGoogle /> } />
                    </Route>

                    <Route element={ <ProtectedRoute /> }>
                        <Route path="users">
                            <Route path=":userId">
                                <Route index element={ <Profile /> } />
                                <Route path="lists" element={ <Lists /> } />
                            </Route>
                        </Route>

                    </Route>
                </Route>
            </Routes >
        </BrowserRouter >
    );
};
