import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes as Routes } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { LoginWithGoogle } from "@/pages/auth/LoginWithGoogle";
import { Login } from "@/pages/auth/Login";
import { Profile } from "@/pages/Profile";
import { Lists } from "@/pages/Lists";
import { ProtectedRoute } from "@/auth/ProtectedRoute";

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
