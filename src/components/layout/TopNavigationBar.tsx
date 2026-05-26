import { useAppSelector } from "@/redux/store";
import { Container } from "@/components/layout/Container";
import { ProfileMenu } from "./TopNavBar/ProfileMenu";
import { MenuItem } from "./TopNavBar/MenuItem";
import { Link } from "react-router-dom";

export const TopNavigationBar = () => {
    const userId = useAppSelector(state => state.user.user?.id);
    const isLoggedIn = Boolean(userId);

    return (
        <div className="bg-surface p-2 py-4">
            <Container>
                <div className="flex items-center justify-between">
                    <Link className="text-xl hover:no-underline!" to="/">
                        FrameShelf
                    </Link>

                    <nav>
                        <ul className="flex items-center gap-8">
                            {isLoggedIn ? (
                                <>
                                    <MenuItem label="Search" to="/search" />
                                    <MenuItem label="My lists" to={`/users/${userId}/lists`} />
                                    <ProfileMenu />
                                </>
                            ) : (
                                <MenuItem label="Login" to="/auth/login" />
                            )}
                        </ul>
                    </nav>
                </div>
            </Container>
        </div>
    );
};
