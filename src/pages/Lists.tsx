import { ListPreview } from "@/pages/lists/ListPreview.tsx";
import { useGetListsQuery } from "@/redux/lists/listApiSlice.ts";
import { Button } from "@/components/Button.tsx";
import { FaPlus } from 'react-icons/fa6';

export const Lists = () => {
    const { data: lists } = useGetListsQuery();

    return (
        <div className="flex flex-col gap-8">
            <Button className="self-end border-2 border-none text-success hover:bg-success hover:text-foreground">
                <FaPlus />
            </Button>
            { lists?.content.map((list) => (
                <ListPreview key={ list.id } list={ list } />
            )) }
        </div>
    );
};
