import { useState, useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa6";
import { cn } from "@/lib/cn";
import { useAppSelector } from "@/redux/store";
import { ProfileMenuItem } from "@/components/layout/TopNavBar/ProfileMenuItem";
import { useLogoutMutation } from "@/redux/users/userApiSlice";
import { toast } from 'react-toastify';
import { useAppDispatch } from "@/redux/store";
import { clearUser } from '@/redux/users/userSlice';

export const ProfileMenu = () => {
    const dispatch = useAppDispatch();
    const [ doLogout ] = useLogoutMutation();

    const [ isProfileMenuOpen, setProfileMenuOpen ] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const userId = useAppSelector((state) => state.user.user?.id);

    const logout = () => {
        doLogout().then(() => {
            dispatch(clearUser());

            toast.success("Successfully logged out!");
        }).catch(() => {
            toast.error("Failed to log out!");
        });
    };

    // Close the menu when clicking outside
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setProfileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", onClick);
        return () => document.removeEventListener("mousedown", onClick);
    }, []);

    return (
        <div className="relative" ref={ ref }>
            <button
                type="button"
                className={ cn("cursor-pointer hover:text-primary", isProfileMenuOpen && "text-primary") }
                onClick={ () => setProfileMenuOpen(v => !v) }
            >
                <FaUser />
            </button>

            { isProfileMenuOpen && (
                <div className="absolute top-10 right-0 w-32 bg-surface shadow-lg text-center">
                    <ProfileMenuItem to={ `/users/${userId}` } setProfileMenuOpen={ setProfileMenuOpen } >My Profile</ProfileMenuItem>

                    <ProfileMenuItem to="" onClick={ logout } classNames="hover:bg-accent" setProfileMenuOpen={ setProfileMenuOpen } >
                        Logout
                    </ProfileMenuItem>
                </div>
            ) }
        </div>
    );
};
