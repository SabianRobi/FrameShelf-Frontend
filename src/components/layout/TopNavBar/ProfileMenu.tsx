import { useState, useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa6";
import { cn } from "@/lib/cn.ts";
import { useAppSelector } from "@/redux/store.ts";
import { ProfileMenuItem } from "@/components/layout/TopNavBar/ProfileMenuItem.tsx";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const ProfileMenu = () => {
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const userId = useAppSelector((state) => state.user.user?.id);

    // Close the menu when clicking outside
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setProfileMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", onClick);
        return () => document.removeEventListener("mousedown", onClick);
    }, []);

    return (
        <div className="relative" ref={ref}>
            <button
                type="button"
                className={cn("cursor-pointer hover:text-primary", isProfileMenuOpen && "text-primary")}
                onClick={() => setProfileMenuOpen(v => !v)}
            >
                <FaUser />
            </button>

            {isProfileMenuOpen && (
                <div className="absolute top-10 right-0 w-32 bg-surface shadow-lg text-center">
                    <ProfileMenuItem to={`/users/${userId}`} setProfileMenuOpen={setProfileMenuOpen} >My Profile</ProfileMenuItem>

                    <ProfileMenuItem redirect to={BACKEND_URL + "/auth/logout"} classNames="hover:bg-accent" setProfileMenuOpen={setProfileMenuOpen}>
                        Logout
                    </ProfileMenuItem>
                </div>
            )}
        </div>
    );
}
