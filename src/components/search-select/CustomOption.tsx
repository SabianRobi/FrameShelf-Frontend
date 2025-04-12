import { GroupBase, type OptionProps, components } from "react-select";
import { MovieSearchResult } from "../../redux/movies/types.ts";

const CustomOption = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: OptionProps<Option, IsMulti, Group>
) => {
  const movie: MovieSearchResult = props.data as MovieSearchResult;

  return (
    <components.Option {...props}>
      <div className={`bg-[#424769] p-2 mb-2 rounded-md flex flex-col gap-2`}>
        <div className="flex gap-2">
          <img
            src={
              movie.posterPath
                ? `https://image.tmdb.org/t/p/w200/${movie.posterPath}`
                : "/images/movie_poster_fallback.png"
            }
            alt="Movie poster"
            className="w-20 h-20"
          />
          <div className="flex items-center justify-between w-full">
            <p>{movie.title}</p>
            <p className="text-sm opacity-40">
              {movie.releaseDate?.split("-")[0]}
            </p>
          </div>
        </div>
      </div>
    </components.Option>
  );
};

export default CustomOption;
