import { type List } from "@/redux/lists/types";
import { FaPencil } from "react-icons/fa6";
import { Button } from "@/components/Button";

type ListPreviewProps = {
    list: List;
};

export const ListPreview = ({ list }: ListPreviewProps) => (
    <div className="bg-surface rounded-xl p-2">
        <div className="flex items-center justify-between">
            <p className="text-xl">{list.name}</p>
            <Button className="hover:background-warning! text-warning hover:text-background!">
                <FaPencil />
            </Button>
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
