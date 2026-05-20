import { useAppSelector } from "@/redux/store.ts";
import { Container } from "@/components/layout/Container.tsx";
import { ProfileMenu } from "./ProfileMenu.tsx";
import { MenuItem } from "./MenuItem.tsx";
import { Link } from "react-router-dom";

export const TopNavigationBar = () => {
  const userId = useAppSelector((state) => state.user.user?.id);
  const isLoggedIn = Boolean(userId);

  return (
    <div className="bg-surface p-2 py-4">
      <Container>
        <div className="flex justify-between items-center ">

          <Link to="/" className="text-xl hover:no-underline!" >FrameShelf
          </Link>

          <nav>
            <ul className="flex gap-8 items-center">
              {isLoggedIn ? (
                <>
                  <MenuItem to="/search" label="Search" />
                  <MenuItem to={`/${userId}/lists`} label="My lists" />
                  <ProfileMenu />
                </>
              ) : (
                <MenuItem to="/auth/login" label="Login" />
              )}
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};
