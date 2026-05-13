import { Outlet } from "react-router-dom";
import { TopNavigationBar } from "./TopNavigationBar.tsx";
import { Footer } from "./Footer.tsx";

export const AppLayout = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <TopNavigationBar />
      <div className="p-2 pt-8 grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
