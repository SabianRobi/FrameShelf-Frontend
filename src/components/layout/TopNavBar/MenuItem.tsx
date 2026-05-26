import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { ClassValue } from "clsx";

type MenuItemProps = {
    to?: string;
    classNames?: ClassValue;
} & ({
    label: string;
    icon?: never;
} | {
    icon: ReactNode;
    label?: never;
});

export const MenuItem = ({ label, to, icon, classNames }: MenuItemProps) => {
    return (
        <li>
            <Link
                to={to ?? "#"}
                className={cn(classNames)}
            >
                {label ?? icon}
            </Link>
        </li>
    );
};
