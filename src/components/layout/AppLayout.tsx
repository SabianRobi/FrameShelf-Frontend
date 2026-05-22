import { Outlet } from "react-router-dom";
import { TopNavigationBar } from "@/components/layout/TopNavigationBar.tsx";
import { Footer } from "./Footer.tsx";
import { Container } from "./Container.tsx";
import { cn } from "@/lib/cn.ts";
import { useLocation } from "react-router-dom";
import { matchPath } from "react-router-dom";


export const AppLayout = () => {
  const location = useLocation();

  const patterns = [ "/auth/login", "/auth/login/google" ];
  const isCentered = patterns.some((pattern) => matchPath(pattern, location.pathname));

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <TopNavigationBar />
      <div className={ cn("grow p-2 mt-4", isCentered && "flex items-center") }>
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </div>
  );
};
