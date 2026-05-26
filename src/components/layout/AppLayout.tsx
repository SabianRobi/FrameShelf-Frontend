import { Outlet, useLocation, matchPath } from "react-router-dom";
import { TopNavigationBar } from "@/components/layout/TopNavigationBar";
import { Footer } from "./Footer";
import { Container } from "./Container";
import { cn } from "@/lib/cn";

export const AppLayout = () => {
    const location = useLocation();

    const patterns = ["/auth/login", "/auth/login/google"];
    const isCentered = patterns.some(pattern => matchPath(pattern, location.pathname));

    return (
        <div className="bg-background flex min-h-screen flex-col">
            <TopNavigationBar />
            <div className={cn("mt-4 grow p-2", isCentered && "flex items-center")}>
                <Container>
                    <Outlet />
                </Container>
            </div>
            <Footer />
        </div>
    );
};
