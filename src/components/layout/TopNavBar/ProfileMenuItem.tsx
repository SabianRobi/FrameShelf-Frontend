import { Link, type LinkProps } from "react-router-dom";
import { cn } from "@/lib/cn";
import { type PropsWithChildren, type Dispatch, type SetStateAction } from "react";

type ProfileMenuItemProps = PropsWithChildren<LinkProps> & {
    classNames?: string;
    setProfileMenuOpen: Dispatch<SetStateAction<boolean>>;
    onClick?: () => void;
};

export const ProfileMenuItem = ({ to, children, classNames, setProfileMenuOpen, onClick }: ProfileMenuItemProps) => (
    <li>
        {children && (
            <Link
                className={cn("hover:bg-primary hover:text-surface! block px-4 py-2", classNames)}
                onClick={e => {
                    if (onClick) {
                        e.preventDefault();
                        onClick();
                    }

                    setProfileMenuOpen(v => !v);
                }}
                to={to}
            >
                {children}
            </Link>
        )}
    </li>
);
