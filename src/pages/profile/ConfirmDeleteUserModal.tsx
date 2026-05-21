import { Modal } from "@/components/Modal.tsx";
import { type Dispatch, type SetStateAction } from 'react';
import { useDeleteUserMutation } from '@/redux/users/userApiSlice.ts';
import { useAppSelector } from "@/redux/store.ts";
import { toast } from 'react-toastify';
import { Button } from '@/components/Button.tsx';

type ConfirmDeleteUserModalProps = {
    isModalOpen: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const ConfirmDeleteUserModal = ({ isModalOpen, setModalOpen }: ConfirmDeleteUserModalProps) => {
    const user = useAppSelector((state) => state.user.user);

    const [ deleteUser, { isLoading } ] = useDeleteUserMutation();

    const deleteAccount = () => {
        deleteUser({ userId: user!.id })
            .then(() => {
                setModalOpen(false);

                toast.success("Successfully deleted your account!");
            }).catch(() => {
                toast.error("Something went wrong!");
            });
    };

    return (
        <Modal title="Delete account" showModal={ isModalOpen } setShowModal={ setModalOpen }>
            <p>Are you sure want to delete your account?</p>
            <p className="mt-4">This action is irreversible!</p>

            <hr className="mt-10 mb-4" />
            <div className="flex justify-between">
                <Button onClick={ () => setModalOpen(false) }>Cancel</Button>
                <Button onClick={ deleteAccount } disabled={ isLoading } isLoading={ isLoading } className="hover:bg-danger hover:text-foreground">Confrm deletion</Button>
            </div>
        </Modal>
    );
};
