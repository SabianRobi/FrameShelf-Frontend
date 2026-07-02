import { useState } from "react";
import { useAppSelector } from "@/redux/store";
import { Button } from "@/components/Button";
import { FaUser } from "react-icons/fa6";
import { ConfirmDeleteUserModal } from "@/pages/profile/ConfirmDeleteUserModal";
import { ProfileTable } from "@/pages/profile/ProfileTable";

export const Profile = () => {
    const user = useAppSelector(state => state.user.user);
    const [isConfirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState<boolean>(false);

    return (
        <div className="flex flex-col items-center gap-10">
            {user?.profilePicture ? (
                <img
                    alt="Profile"
                    className="bg-primary/80 grid h-32 w-32 items-center justify-items-center rounded-xl"
                    src={user?.profilePicture}
                />
            ) : (
                <FaUser className="bg-primary/80 h-32 w-32 rounded-xl p-4" />
            )}

            <ProfileTable />

            <Button
                className="hover:bg-danger text-danger hover:text-foreground"
                onClick={() => setConfirmDeleteModalOpen(true)}
            >
                Delete account
            </Button>

            <ConfirmDeleteUserModal isModalOpen={isConfirmDeleteModalOpen} setModalOpen={setConfirmDeleteModalOpen} />
        </div>
    );
};
