import { Dispatch, SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import Select, { GroupBase } from "react-select";
import { toast } from "react-toastify";
import languages from "@/assets/languages.json" with { type: "json" };
import { Button } from "@/components/Button.tsx";
import SearchSelect from "@/components/search-select/SearchSelect.tsx";
import {
  useCreateMovieMutation,
  useLazySearchMoviesQuery,
} from "@/redux/movies/movieApiSlice.ts";
import {
  CreateMovieRequest,
  MovieSearchResult,
  SearchMoviesResponse,
} from "@/redux/movies/types.ts";

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

export const LikeMovieModalContent = ({
  setShowModal,
}: LikeMovieModalContentProps) => {
  const searchMovie = useLazySearchMoviesQuery();
  const [createMovie, { isLoading }] = useCreateMovieMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<LikeMovieFormValues>({
    defaultValues: {
      movie: null,
      watchedLanguage: {
        value: "hu",
        label: "Hungarian",
      },
      watchedAt: new Date().toISOString().split("T")[0],
    },
    mode: "onBlur",
  });

  const languageOptions = [
    {
      value: "en",
      label: "English",
    },
    {
      value: "hu",
      label: "Hungarian",
    },
    ...languages
      .filter((language) => !["en", "hu"].includes(language.code))
      .map((language) => ({
        value: language.code,
        label: language.name,
      })),
  ];

  const onSubmit = async (data: LikeMovieFormValues) => {
    const { movie: _ } = data;
    const payload: CreateMovieRequest = {
      id: data.movie!.id,
      watchedAt: data.watchedAt,
      watchedLanguage: data.watchedLanguage!.value,
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
          name="movie"
          control={control}
          rules={{ required: "Required" }}
          render={({ field }) => (
            <SearchSelect<
              MovieSearchResult,
              GroupBase<MovieSearchResult>,
              false,
              SearchMoviesResponse
            >
              isClearable
              rtkQuery={searchMovie}
              convertResponse={(response) => response.content}
              calcHasMore={(response) => !response.last}
              getOptionLabel={(movie) => movie.title}
              getOptionValue={(movie) => movie.id.toString()}
              className="w-sm m-auto"
              value={field.value}
              onChange={(option) => field.onChange(option)}
              classNames={{
                container: () =>
                  `rounded-md border ${errors.movie ? "border-red-500" : "border-gray-300"
                  }`,
              }}
            />
          )}
        />
        {errors.movie && <p className="text-red-500">{errors.movie.message}</p>}
      </div>

      {/* Watched language */}
      <div>
        <label htmlFor="watchedLanguage">Watched language</label>
        <Controller
          name="watchedLanguage"
          control={control}
          rules={{ required: "Required" }}
          render={({ field }) => (
            <Select
              options={languageOptions}
              onChange={(option) => field.onChange(option?.value)}
              defaultValue={{ value: "hu", label: "Hungarian" }}
              classNames={{
                container: () =>
                  `rounded-md border ${errors.watchedLanguage
                    ? "border-red-500"
                    : "border-gray-300"
                  }`,
              }}
            />
          )}
        />
        {errors.watchedLanguage && (
          <p className="text-red-500">{errors.watchedLanguage.message}</p>
        )}
      </div>

      {/* Watched at */}
      <div>
        <label htmlFor="watchedAt">Watch date</label>
        <input
          type="date"
          {...register("watchedAt", {
            required: "Required",
          })}
          className={`w-full p-2 rounded-md border ${errors.watchedAt ? "border-red-500" : "border-gray-300"
            }`}
        />
        {errors.watchedAt && (
          <p className="text-red-500">{errors.watchedAt.message}</p>
        )}
      </div>

      {/* Submit button */}
      <Button type="submit" isLoading={isLoading} className="mt-4">
        <p>Like movie</p>
      </Button>
    </form>
  );
};
