import { useAppSelector } from "@/redux/store.ts";
import { Container } from "@/components/layout/Container.tsx";
import { ProfileMenu } from "./ProfileMenu.tsx";
import { MenuItem } from "./MenuItem.tsx";

export const TopNavigationBar = () => {
  const userId = useAppSelector((state) => state.user.id);
  const isLoggedIn = true;

  return (
    <div className="bg-surface p-2 py-4">
      <Container>
        <div className="flex justify-between items-center ">

          <a
            href="/"
            className="text-xl hover:no-underline!"
          >
            FrameShelf
          </a>

          <nav>
            <ul className="flex gap-8 items-center">
              {isLoggedIn ? (
                <>
                  <MenuItem to="/search" label="Search" />
                  <MenuItem to={`/${userId}/lists`} label="My lists" />
                  <ProfileMenu />
                </>
              ) : (
                <MenuItem to="/login" label="Login" />
              )}
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};
