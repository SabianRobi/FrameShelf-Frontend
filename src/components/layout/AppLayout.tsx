import { Outlet } from "react-router-dom";
import { TopNavigationBar } from "@/components/layout/TopNavBar/TopNavigationBar.tsx";
import { Footer } from "./Footer.tsx";
import { Container } from "./Container.tsx";

export const AppLayout = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <TopNavigationBar />
      <div className="grow p-2">
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </div>
  );
};
