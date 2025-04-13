import { Outlet } from "react-router-dom";
import { TopNavigationBar } from "./TopNavigationBar.tsx";

export const AppLayout = () => {
  return (
    <div className="bg-[#2D3250] min-h-screen text-white">
      <TopNavigationBar />
      <div className="p-2 pt-8">
        <Outlet />
      </div>
    </div>
  );
};
