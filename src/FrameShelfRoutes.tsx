import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes as Routes } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { LoginWithGoogle } from "@/pages/auth/LoginWithGoogle";
import { Login } from "@/pages/auth/Login";
import { Profile } from "@/pages/Profile";
import { Lists } from "@/pages/Lists";
import { ProtectedRoute } from "@/auth/ProtectedRoute";

export const FrameShelfRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout />}>
                <Route element={<Home />} index />

                <Route path="auth/login">
                    <Route element={<Login />} index />
                    <Route element={<LoginWithGoogle />} path="google" />
                </Route>

                <Route element={<ProtectedRoute />}>
                    <Route path="users">
                        <Route path=":userId">
                            <Route element={<Profile />} index />
                            <Route element={<Lists />} path="lists" />
                        </Route>
                    </Route>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
);
