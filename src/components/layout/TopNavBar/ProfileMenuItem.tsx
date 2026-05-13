import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/cn.ts";

type ProfileMenuItemProps = {
    to: string;
    children: ReactNode;
    classNames?: string;
}

export const ProfileMenuItem = ({ to, children, classNames }: ProfileMenuItemProps) => {
    return (
        <li>
            <Link
                to={to ?? "#"}
                className={cn("block px-4 py-2 hover:bg-primary hover:text-surface!", classNames)}
            >
                {children}
            </Link>
        </li>
    )
}
