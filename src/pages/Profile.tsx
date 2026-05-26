import { useState } from 'react';
import { useAppSelector } from '@/redux/store';
import { Button } from "@/components/Button";
import { FaUser } from "react-icons/fa6";
import { ConfirmDeleteUserModal } from "@/pages/profile/ConfirmDeleteUserModal";
import { ProfileTable } from "@/pages/profile/ProfileTable";

export const Profile = () => {
  const user = useAppSelector((state) => state.user.user);
  const [ isConfirmDeleteModalOpen, setConfirmDeleteModalOpen ] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center gap-10">
      { user?.profilePicture
        ? <img src={ user?.profilePicture } alt="Profile picture" className="h-32 w-32 rounded-xl bg-primary/80 grid items-center justify-items-center" />
        : <FaUser className="w-32 h-32 rounded-xl p-4 bg-primary/80" />
      }

      <ProfileTable />

      <Button onClick={ () => setConfirmDeleteModalOpen(true) } className="hover:bg-danger hover:text-foreground">Delete account</Button>

      <ConfirmDeleteUserModal isModalOpen={ isConfirmDeleteModalOpen } setModalOpen={ setConfirmDeleteModalOpen } />
    </div>
  );
};
