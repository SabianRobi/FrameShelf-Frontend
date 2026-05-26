import prettyMilliseconds from "pretty-ms";
import { Link } from "react-router-dom";
import type { Movie } from "@/redux/movies/types";

type MovieCardProps = {
    movie: Movie;
};

export const MovieCard = ({ movie }: MovieCardProps) => (
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
            <div className="flex w-full flex-col justify-between">
                <div className="flex items-center justify-between gap-1">
                    {/* TODO: Replace with production countries */}
                    <div className="flex items-center gap-1">
                        <img
                            alt="Country flag"
                            className="h-4"
                            src={`https://flagcdn.com/w20/${
                                movie.originalLanguage === "en" ? "us" : movie.originalLanguage
                            }.png`}
                        />
                        <Link className="hover:text-[#F6B17A]" to={`/movie/${movie.id}`}>
                            <h4 className="text-lg font-bold" title={movie.originalTitle}>
                                {movie.title}
                            </h4>
                        </Link>
                    </div>
                    <p className="text-sm opacity-40">{movie.releaseDate.split("-")[0]}</p>
                </div>

                <div>{movie.genres.join(", ")}</div>
                <div className="flex w-full justify-between text-end text-sm">
                    <p>{}</p>
                    <p className="opacity-40">{prettyMilliseconds(movie.runtime * 60 * 1000)}</p>
                </div>
            </div>
        </div>
    </div>
);
