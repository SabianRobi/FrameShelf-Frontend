import { ListPreview } from "@/pages/lists/ListPreview";
import { useGetListsQuery } from "@/redux/lists/listApiSlice";
import { Button } from "@/components/Button";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { CreateListModal } from "./lists/create/CreateListForm";
import { EditListModal } from "./lists/edit/EditListModal";
import type { List } from "@/redux/lists/types";
import { DeleteListModal } from "./lists/delete/DeleteListModal";

export const Lists = () => {
    const [showCreateListModal, setShowCreateListModal] = useState(false);
    const [showEditListModal, setShowEditListModal] = useState(false);
    const [showDeleteListModal, setShowDeleteListModal] = useState(false);
    const [listToEdit, setListToEdit] = useState<List | null>(null);
    const [listToDelete, setListToDelete] = useState<List | null>(null);

    const { data: lists } = useGetListsQuery();

    return (
        <div className="flex flex-col gap-8">
            <Button
                className="text-success hover:bg-success hover:text-foreground self-end border-2 border-none"
                onClick={() => setShowCreateListModal(true)}
            >
                <FaPlus />
            </Button>

            {lists?.content.map(list => (
                <ListPreview
                    key={list.id}
                    list={list}
                    setListToDelete={setListToDelete}
                    setListToEdit={setListToEdit}
                    setShowDeleteListModal={setShowDeleteListModal}
                    setShowEditListModal={setShowEditListModal}
                />
            ))}

            <CreateListModal setShowModal={setShowCreateListModal} showModal={showCreateListModal} />
            {listToEdit && (
                <EditListModal
                    list={listToEdit}
                    setList={setListToEdit}
                    setShowModal={setShowEditListModal}
                    showModal={showEditListModal}
                />
            )}
            {listToDelete && (
                <DeleteListModal
                    list={listToDelete}
                    setList={setListToDelete}
                    setShowModal={setShowDeleteListModal}
                    showModal={showDeleteListModal}
                />
            )}
        </div>
    );
};
