import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";
import type { CreateListRequestForm } from "./CreateListForm";

export const SelectType = () => {
    const {
        control,
        formState: { errors }
    } = useFormContext<CreateListRequestForm>();

    const listTypes = [
        { value: "PERSON", label: "Person" },
        { value: "MOVIE", label: "Movie" }
    ];

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
                <label className="" htmlFor="type">
                    Type
                </label>
                <Controller
                    control={control}
                    name="type"
                    render={({ field: { value, onChange } }) => (
                        <Select
                            onChange={option => onChange(option?.value)}
                            options={listTypes}
                            value={listTypes.find(opt => opt.value === value)}
                        />
                    )}
                />
                {errors.type && <span className="text-danger">This field is required</span>}
            </div>
        </div>
    );
};
