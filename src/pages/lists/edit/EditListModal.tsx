import { Modal } from "@/components/Modal";
import { cn } from "@/lib/cn";
import { useEditListMutation } from "@/redux/lists/listApiSlice";
import type { EditListRequest, List } from "@/redux/lists/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Dispatch, type SetStateAction } from "react";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";
import { Button } from "@/components/Button";

type EditListModalProps = {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    list: List;
    setList: Dispatch<SetStateAction<List | null>>;
};

export type EditListRequestForm = {
    name: string;
};

export const EditListModal = ({ showModal, setShowModal, list, setList }: EditListModalProps) => {
    const [editList, { isLoading }] = useEditListMutation();

    const initialValues: EditListRequestForm = {
        name: list.name
    };

    const schema = z.object({
        name: z.string().trim().min(1)
    });

    const methods = useForm<EditListRequestForm>({
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

    const onSubmit: SubmitHandler<EditListRequestForm> = data => {
        const body: EditListRequest = { ...data, id: list.id };

        editList(body)
            .unwrap()
            .then(() => {
                toast.success("Successfully updated the list!");
                closeModal(false);
            });
    };

    return (
        <Modal setShowModal={closeModal} showModal={showModal} title="Edit List">
            <FormProvider {...methods}>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mt-4 flex justify-between">
                        <Button onClick={() => closeModal(false)}>Cancel</Button>
                        <Button
                            className="hover:bg-success hover:text-white"
                            disabled={isLoading}
                            isLoading={isLoading}
                            type="submit"
                        >
                            Update
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </Modal>
    );
};
