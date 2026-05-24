import { List } from "@/redux/lists/types.ts";
import { FaPencil } from "react-icons/fa6";
import { Button } from "@/components/Button.tsx";

type ListPreviewProps = {
    list: List;
};

export const ListPreview = ({ list }: ListPreviewProps) => {

    return (
        <div className="bg-surface p-2 rounded-xl">
            <div className="flex justify-between items-center">
                <p className="text-xl">{ list.name }</p>
                <Button className="hover:background-warning! text-warning hover:text-background!">
                    <FaPencil />
                </Button>
            </div>

            {/* Placeholder items */ }
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 justify-items-center gap-2 p-2">
                <ListItemPlaceholder id={ 1 } />
                <ListItemPlaceholder id={ 2 } />
                <ListItemPlaceholder id={ 3 } />
                <ListItemPlaceholder id={ 4 } />
                <ListItemPlaceholder id={ 5 } />
                <ListItemPlaceholder id={ 6 } />
            </div>
        </div>
    );
};

const ListItemPlaceholder = ({ id }: { id: number; }) => {
    return (
        <p className="border h-full w-full p-2 rounded-md">Film { id }</p>
    );
};
