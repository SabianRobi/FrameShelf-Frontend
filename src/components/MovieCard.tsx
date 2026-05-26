import prettyMilliseconds from "pretty-ms";
import { Link } from "react-router-dom";
import { Movie } from "@/redux/movies/types";

type MovieCardProps = {
  movie: Movie;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className={ `bg-[#424769] p-2 mb-2 rounded-md flex flex-col gap-2` }>
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
        <div className="flex flex-col justify-between w-full">
          <div className="flex gap-1 items-center justify-between">
            {/* TODO: Replace with production countries */ }
            <div className="flex items-center gap-1">
              <img
                src={ `https://flagcdn.com/w20/${movie.originalLanguage === "en"
                  ? "us"
                  : movie.originalLanguage
                  }.png` }
                alt="Country flag"
                className="h-4"
              />
              <Link to={ `/movie/${movie.id}` } className="hover:text-[#F6B17A]">
                <h4 className="text-lg font-bold" title={ movie.originalTitle }>
                  { movie.title }
                </h4>
              </Link>
            </div>
            <p className="text-sm opacity-40">
              { movie.releaseDate.split("-")[ 0 ] }
            </p>
          </div>

          <div>{ movie.genres.join(", ") }</div>
          <div className="text-sm text-end justify-between w-full flex">
            <p>{ }</p>
            <p className="opacity-40">
              { prettyMilliseconds(movie.runtime * 60 * 1000) }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
