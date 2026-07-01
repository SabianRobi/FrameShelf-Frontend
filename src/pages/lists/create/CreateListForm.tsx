import { Modal } from "@/components/Modal";
import type { CreateListRequest, ListType } from "@/redux/lists/types";
import type { Dispatch, SetStateAction } from "react";
import { useForm, FormProvider, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/Button";
import { SelectType } from "./SelectType";
import { useCreateListMutation } from "@/redux/lists/listApiSlice";
import { toast } from "react-toastify";
import { cn } from "@/lib/cn";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type CreateListRequestForm = {
    name: string;
    type: ListType;
};

type CreateListModalProps = {
    setShowModal: Dispatch<SetStateAction<boolean>>;
    showModal: boolean;
};

export const CreateListModal = ({ setShowModal, showModal }: CreateListModalProps) => {
    const [createList] = useCreateListMutation();

    const initialValues: CreateListRequestForm = {
        name: "",
        type: "PERSON"
    };

    const schema = z.object({
        name: z.string().trim().min(1),
        type: z.literal(["PERSON", "MOVIE"])
    });

    const methods = useForm<CreateListRequestForm>({ defaultValues: initialValues, resolver: zodResolver(schema) });
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = methods;

    const closeModal = (state: SetStateAction<boolean>) => {
        setShowModal(state);
        reset();
    };

    const onSubmit: SubmitHandler<CreateListRequestForm> = data => {
        const body: CreateListRequest = data;

        createList(body)
            .unwrap()
            .then(() => {
                toast.success("Successfully created the list!");
                closeModal(false);
            });
    };

    return (
        <Modal setShowModal={closeModal} showModal={showModal} title="Create List">
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

                    <div className="flex flex-col gap-2">
                        <SelectType />
                    </div>

                    <div className="mt-4 flex justify-between">
                        <Button onClick={() => closeModal(false)}>Cancel</Button>
                        <Button className="hover:bg-success hover:text-white" type="submit">
                            Save
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </Modal>
    );
};
