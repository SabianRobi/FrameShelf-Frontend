import { Link, type LinkProps, redirect as redirectTo } from "react-router-dom";
import { cn } from "@/lib/cn.ts";
import { type PropsWithChildren, type Dispatch, type SetStateAction } from "react";

type ProfileMenuItemProps = PropsWithChildren<LinkProps> & {
    classNames?: string;
    redirect?: boolean;
    setProfileMenuOpen: Dispatch<SetStateAction<boolean>>
}

export const ProfileMenuItem = ({ to, children, classNames, redirect, setProfileMenuOpen }: ProfileMenuItemProps) => {
    if (redirect) {
        redirectTo(String(to))
    }

    return (
        <li>
            {children &&
                <Link
                    to={to ?? "#"}
                    className={cn("block px-4 py-2 hover:bg-primary hover:text-surface!", classNames)}
                    onClick={() => setProfileMenuOpen(v => !v)}
                >
                    {children}
                </Link>
            }
        </li>
    )
}
