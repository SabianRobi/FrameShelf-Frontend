import { Modal } from "@/components/Modal";
import { type Dispatch, type SetStateAction } from "react";
import { useDeleteUserMutation } from "@/redux/users/userApiSlice";
import { useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";
import { Button } from "@/components/Button";

type ConfirmDeleteUserModalProps = {
    isModalOpen: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const ConfirmDeleteUserModal = ({ isModalOpen, setModalOpen }: ConfirmDeleteUserModalProps) => {
    const user = useAppSelector(state => state.user.user);

    const [deleteUser, { isLoading }] = useDeleteUserMutation();

    const deleteAccount = () => {
        deleteUser({ userId: user!.id })
            .then(() => {
                setModalOpen(false);

                toast.success("Successfully deleted your account!");
            })
            .catch(() => {
                toast.error("Something went wrong!");
            });
    };

    return (
        <Modal setShowModal={setModalOpen} showModal={isModalOpen} title="Delete account">
            <p>Are you sure want to delete your account?</p>
            <p className="mt-4">This action is irreversible!</p>

            <hr className="mt-10 mb-4" />
            <div className="flex justify-between">
                <Button onClick={() => setModalOpen(false)}>Cancel</Button>
                <Button
                    className="hover:bg-danger hover:text-foreground"
                    disabled={isLoading}
                    isLoading={isLoading}
                    onClick={deleteAccount}
                >
                    Confrm deletion
                </Button>
            </div>
        </Modal>
    );
};
