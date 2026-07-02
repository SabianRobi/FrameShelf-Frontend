import { Modal } from "@/components/Modal";
import { cn } from "@/lib/cn";
import { useDeleteListMutation } from "@/redux/lists/listApiSlice";
import type { DeleteListRequest, List } from "@/redux/lists/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Dispatch, type SetStateAction } from "react";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";
import { Button } from "@/components/Button";

type DeleteListModalProps = {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    list: List;
    setList: Dispatch<SetStateAction<List | null>>;
};

export type DeleteListRequestForm = {
    name: string;
};

export const DeleteListModal = ({ showModal, setShowModal, list, setList }: DeleteListModalProps) => {
    const [deleteList, { isLoading }] = useDeleteListMutation();

    const initialValues: DeleteListRequestForm = {
        name: ""
    };

    const schema = z.object({
        name: z.literal(list.name, {
            message: "The name must match the list name"
        })
    });

    const methods = useForm<DeleteListRequestForm>({
        defaultValues: initialValues,
        resolver: zodResolver(schema),
        resetOptions: { keepValues: false }
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = methods;

    const closeModal = (state: SetStateAction<boolean>) => {
        reset();
        setList(null);
        setShowModal(state);
    };

    const onSubmit: SubmitHandler<DeleteListRequestForm> = data => {
        const request: DeleteListRequest = { ...data, id: list.id };

        deleteList(request)
            .unwrap()
            .then(() => {
                toast.success("Successfully deleted the list!");
                closeModal(false);
            });
    };

    return (
        <Modal setShowModal={closeModal} showModal={showModal} title="Delete List">
            <FormProvider {...methods}>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <p>
                        Please type the list name ({list.name}) to confirm deletion. All items in this list will be
                        permanently deleted.
                    </p>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            {...register("name")}
                            className={cn(
                                "bg-foreground rounded-sm p-2 text-black",
                                errors.name && "border-danger border-2"
                            )}
                        />
                        {errors.name && <span className="text-danger">{errors.name.message}</span>}
                    </div>

                    <div className="mt-4 flex justify-between">
                        <Button onClick={() => closeModal(false)}>Cancel</Button>
                        <Button
                            className="hover:bg-danger hover:text-white"
                            disabled={isLoading}
                            isLoading={isLoading}
                            type="submit"
                        >
                            Delete
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </Modal>
    );
};
