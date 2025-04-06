import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/store.ts";

type MenuItemProps = {
  to: string;
  label: string;
};

export const TopNavigationBar = () => {
  const userId = useAppSelector((state) => state.user.id);

  return (
    <nav className="bg-[#424769]">
      <ul className="flex">
        <MenuItem label="Home" to="/" />
        <MenuItem label="Liked movies" to={`/users/${userId}/movies`} />
        <MenuItem label="Liked actors" to={`/users/${userId}/actors`} />
        <MenuItem label="Profile" to={`/users/${userId}`} />
      </ul>
    </nav>
  );
};

const MenuItem = ({ label, to }: MenuItemProps) => {
  return (
    <li className="w-full">
      <Link
        to={to}
        className="hover:text-[#F6B17A] hover:bg-[#F6B17A11] flex items-center justify-center h-12 m-2 rounded-md"
      >
        {label}
      </Link>
    </li>
  );
};
