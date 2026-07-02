import { type List } from "@/redux/lists/types";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { Button } from "@/components/Button";
import type { Dispatch, SetStateAction } from "react";

type ListPreviewProps = {
    list: List;
    setShowEditListModal: Dispatch<SetStateAction<boolean>>;
    setListToEdit: Dispatch<SetStateAction<List | null>>;
    setShowDeleteListModal: Dispatch<SetStateAction<boolean>>;
    setListToDelete: Dispatch<SetStateAction<List | null>>;
};

export const ListPreview = ({
    list,
    setShowEditListModal,
    setListToEdit,
    setShowDeleteListModal,
    setListToDelete
}: ListPreviewProps) => (
    <div className="bg-surface rounded-xl p-2">
        <div className="flex items-center justify-between">
            <p className="text-xl">{list.name}</p>
            <div className="flex gap-2">
                <Button
                    className="text-danger hover:bg-danger hover:text-foreground"
                    onClick={() => {
                        setListToDelete(list);
                        setShowDeleteListModal(true);
                    }}
                >
                    <FaTrash />
                </Button>
                <Button
                    className="hover:background-warning! text-warning hover:text-background!"
                    onClick={() => {
                        setListToEdit(list);
                        setShowEditListModal(true);
                    }}
                >
                    <FaPencil />
                </Button>
            </div>
        </div>

        {/* Placeholder items */}
        <div className="grid grid-cols-1 justify-items-center gap-2 p-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            <ListItemPlaceholder id={1} />
            <ListItemPlaceholder id={2} />
            <ListItemPlaceholder id={3} />
            <ListItemPlaceholder id={4} />
            <ListItemPlaceholder id={5} />
            <ListItemPlaceholder id={6} />
        </div>
    </div>
);

const ListItemPlaceholder = ({ id }: { id: number }) => (
    <p className="h-full w-full rounded-md border p-2">Film {id}</p>
);
