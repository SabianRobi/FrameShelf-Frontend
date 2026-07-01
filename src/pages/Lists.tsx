import { ListPreview } from "@/pages/lists/ListPreview";
import { useGetListsQuery } from "@/redux/lists/listApiSlice";
import { Button } from "@/components/Button";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { CreateListModal } from "./lists/create/CreateListForm";

export const Lists = () => {
    const [showCreateListModal, setShowCreateListModal] = useState(false);

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
                <ListPreview key={list.id} list={list} />
            ))}

            <CreateListModal setShowModal={setShowCreateListModal} showModal={showCreateListModal} />
        </div>
    );
};
