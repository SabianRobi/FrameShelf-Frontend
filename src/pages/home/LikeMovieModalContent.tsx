import type { Dispatch, SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import { type GroupBase } from "react-select";
import { toast } from "react-toastify";
import languages from "@/assets/languages.json" with { type: "json" };
import { Button } from "@/components/Button";
import SearchSelect from "@/components/search-select/SearchSelect";
import { useCreateMovieMutation, useLazySearchMoviesQuery } from "@/redux/movies/movieApiSlice";
import type { CreateMovieRequest, MovieSearchResult, SearchMoviesResponse } from "@/redux/movies/types";
import Select from "react-select/base";

type LikeMovieModalContentProps = {
    setShowModal: Dispatch<SetStateAction<boolean>>;
};

type LikeMovieFormValues = {
    movie: MovieSearchResult | null;
    watchedLanguage: SelectOption | null;
    watchedAt: string | null;
};

type SelectOption = {
    value: string;
    label: string;
};

export const LikeMovieModalContent = ({ setShowModal }: LikeMovieModalContentProps) => {
    const searchMovie = useLazySearchMoviesQuery();
    const [createMovie, { isLoading }] = useCreateMovieMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<LikeMovieFormValues>({
        defaultValues: {
            movie: null,
            watchedLanguage: {
                value: "hu",
                label: "Hungarian"
            },
            watchedAt: new Date().toISOString().split("T")[0]
        },
        mode: "onBlur"
    });

    const languageOptions = [
        {
            value: "en",
            label: "English"
        },
        {
            value: "hu",
            label: "Hungarian"
        },
        ...languages
            .filter(language => !["en", "hu"].includes(language.code))
            .map(language => ({
                value: language.code,
                label: language.name
            }))
    ];

    const onSubmit = async (data: LikeMovieFormValues) => {
        const { movie: _ } = data;
        const payload: CreateMovieRequest = {
            id: data.movie!.id,
            watchedAt: data.watchedAt,
            watchedLanguage: data.watchedLanguage!.value
        };

        await createMovie(payload)
            .unwrap()
            .then(() => {
                toast.success("Successfully liked the movie!");
                setShowModal(false);
            })
            .catch(() => {
                toast.error("Failed to like the movie!");
            });
    };

    return (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
            {/* Select movie */}
            <div>
                <label htmlFor="movie">Movie</label>
                <Controller
                    control={control}
                    name="movie"
                    render={({ field }) => (
                        <SearchSelect<MovieSearchResult, GroupBase<MovieSearchResult>, false, SearchMoviesResponse>
                            calcHasMore={response => !response.last}
                            className="m-auto w-sm"
                            classNames={{
                                container: () =>
                                    `rounded-md border ${errors.movie ? "border-red-500" : "border-gray-300"}`
                            }}
                            convertResponse={response => response.content}
                            getOptionLabel={movie => movie.title}
                            getOptionValue={movie => movie.id.toString()}
                            isClearable
                            onChange={option => field.onChange(option)}
                            rtkQuery={searchMovie}
                            value={field.value}
                        />
                    )}
                    rules={{ required: "Required" }}
                />
                {errors.movie && <p className="text-red-500">{errors.movie.message}</p>}
            </div>

            {/* Watched language */}
            <div>
                <label htmlFor="watchedLanguage">Watched language</label>
                <Controller
                    control={control}
                    name="watchedLanguage"
                    render={({ field }) => (
                        <Select
                            classNames={{
                                container: () =>
                                    `rounded-md border ${errors.watchedLanguage ? "border-red-500" : "border-gray-300"}`
                            }}
                            defaultValue={{ value: "hu", label: "Hungarian" }}
                            onChange={option => field.onChange(option?.value)}
                            options={languageOptions}
                        />
                    )}
                    rules={{ required: "Required" }}
                />
                {errors.watchedLanguage && <p className="text-red-500">{errors.watchedLanguage.message}</p>}
            </div>

            {/* Watched at */}
            <div>
                <label htmlFor="watchedAt">Watch date</label>
                <input
                    type="date"
                    {...register("watchedAt", {
                        required: "Required"
                    })}
                    className={`w-full rounded-md border p-2 ${
                        errors.watchedAt ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.watchedAt && <p className="text-red-500">{errors.watchedAt.message}</p>}
            </div>

            {/* Submit button */}
            <Button className="mt-4" isLoading={isLoading} type="submit">
                <p>Like movie</p>
            </Button>
        </form>
    );
};
