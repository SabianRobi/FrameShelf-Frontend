import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store.ts";

type MenuItemProps = {
  to: string;
  label: string;
  isFirst?: boolean;
};

export const TopNavigationBar = () => {
  const userId = useAppSelector((state) => state.user.id);

  return (
    <nav className="bg-[#424769]">
      <ul className="flex ">
        <MenuItem label="Home" to="/" isFirst />
        <MenuItem label="Liked movies" to={`/users/${userId}/movies`} />
        <MenuItem label="Liked actors" to={`/users/${userId}/actors`} />
        <MenuItem label="Profile" to={`/users/${userId}`} />
      </ul>
    </nav>
  );
};

const MenuItem = ({ label, to, isFirst }: MenuItemProps) => {
  return (
    <li className="w-full">
      <Link
        to={to}
        className={`hover:text-[#F6B17A] hover:bg-[#F6B17A11] flex items-center justify-center h-12 ${
          isFirst
            ? ""
            : "border-l-1 border-[#F6B17A] border-dashed hover:border-solid "
        }`}
      >
        {label}
      </Link>
    </li>
  );
};
