import { type OptionProps, type GroupBase, components } from "react-select";
import type { MovieSearchResult } from "@/redux/movies/types";

const CustomOption = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
    props: OptionProps<Option, IsMulti, Group>
) => {
    const movie: MovieSearchResult = props.data as MovieSearchResult;

    return (
        <components.Option {...props}>
            <div className="mb-2 flex flex-col gap-2 rounded-md bg-[#424769] p-2">
                <div className="flex gap-2">
                    <img
                        alt="Movie poster"
                        className="h-20 w-20"
                        src={
                            movie.posterPath
                                ? `https://image.tmdb.org/t/p/w200/${movie.posterPath}`
                                : "/images/movie_poster_fallback.png"
                        }
                    />
                    <div className="flex w-full items-center justify-between">
                        <p>{movie.title}</p>
                        <p className="text-sm opacity-40">{movie.releaseDate?.split("-")[0]}</p>
                    </div>
                </div>
            </div>
        </components.Option>
    );
};

export default CustomOption;
