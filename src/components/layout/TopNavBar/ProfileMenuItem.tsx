import { Link, LinkProps, redirect as redirectTo } from "react-router-dom";
import { cn } from "@/lib/cn.ts";
import { PropsWithChildren } from "react";

type ProfileMenuItemProps = PropsWithChildren<LinkProps> & {
    classNames?: string;
    redirect?: boolean;
}

export const ProfileMenuItem = ({ to, children, classNames, redirect }: ProfileMenuItemProps) => {
    if (redirect) {
        redirectTo(String(to))
    }

    return (
        <li>
            {children &&
                <Link
                    to={to ?? "#"}
                    className={cn("block px-4 py-2 hover:bg-primary hover:text-surface!", classNames)}
                >
                    {children}
                </Link>
            }
        </li>
    )
}
