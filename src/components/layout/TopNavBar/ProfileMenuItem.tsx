import { Link, type LinkProps } from "react-router-dom";
import { cn } from "@/lib/cn.ts";
import { type PropsWithChildren, type Dispatch, type SetStateAction } from "react";

type ProfileMenuItemProps = PropsWithChildren<LinkProps> & {
    classNames?: string;
    setProfileMenuOpen: Dispatch<SetStateAction<boolean>>;
    onClick?: () => void;
};

export const ProfileMenuItem = ({ to, children, classNames, setProfileMenuOpen, onClick }: ProfileMenuItemProps) => {
    return (
        <li>
            { children &&
                <Link
                    to={ to }
                    className={ cn("block px-4 py-2 hover:bg-primary hover:text-surface!", classNames) }
                    onClick={ (e) => {
                        if (onClick) {
                            e.preventDefault();
                            onClick();
                        }

                        setProfileMenuOpen(v => !v);
                    } }
                >
                    { children }
                </Link>
            }
        </li>
    );
};
