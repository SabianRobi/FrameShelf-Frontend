import { Outlet } from "react-router-dom";
import { TopNavigationBar } from "@/components/layout/TopNavBar/TopNavigationBar.tsx";
import { Footer } from "./Footer.tsx";
import { Container } from "./Container.tsx";
import { AuthProvider } from "@/components/layout/auth/AuthProvider.tsx";
import { cn } from "@/lib/cn.ts";
import { useLocation } from "react-router-dom";


export const AppLayout = () => {
  const location = useLocation();
  const centeredPaths = ["/auth/login", "/auth/login/google"]
  const isCentered = centeredPaths.includes(location.pathname);

  return (
    <AuthProvider>
      <div className="bg-background min-h-screen flex flex-col">
        <TopNavigationBar />
        <div className={cn("grow p-2", isCentered && "flex items-center")}>
          <Container>
            <Outlet />
          </Container>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
};
