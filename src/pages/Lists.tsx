import { ListPreview } from "@/pages/lists/ListPreview";
import { useGetListsQuery } from "@/redux/lists/listApiSlice";
import { Button } from "@/components/Button";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { CreateListModal } from "./lists/create/CreateListForm";
import { EditListModal } from "./lists/edit/EditListModal";
import type { List } from "@/redux/lists/types";

export const Lists = () => {
    const [showCreateListModal, setShowCreateListModal] = useState(false);
    const [showEditListModal, setShowEditListModal] = useState(false);
    const [list, setList] = useState<List | null>(null);

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
                <ListPreview key={list.id} list={list} setList={setList} setShowEditListModal={setShowEditListModal} />
            ))}

            <CreateListModal setShowModal={setShowCreateListModal} showModal={showCreateListModal} />
            {list && (
                <EditListModal
                    list={list}
                    setList={setList}
                    setShowModal={setShowEditListModal}
                    showModal={showEditListModal}
                />
            )}
        </div>
    );
};
