import prettyMilliseconds from "pretty-ms";
import { useParams } from "react-router-dom";
import { MovieDetailCard } from "@/components/MovieDetailCard";
import { useGetMovieByIdQuery } from "@/redux/movies/movieApiSlice";

export const MovieDetails = () => {
    const { movieId } = useParams<{ movieId: string }>();
    const movieIdNumber = Number(movieId);

    const { data: movie, isFetching } = useGetMovieByIdQuery({
        id: movieIdNumber
    });

    return movie ? (
        <div className="flex flex-col gap-2">
            {/* Header */}
            {movie.backdropPath ? (
                <div className="relative bg-black">
                    <img
                        alt="Poster"
                        className="h-96 w-full object-cover opacity-60"
                        src={`https://image.tmdb.org/t/p/original/${movie.backdropPath}`}
                        style={{ objectPosition: "50% 20%" }}
                    />
                    <h1 className="absolute bottom-16 w-full text-center text-xl text-[72px] font-bold">
                        {movie.title}
                    </h1>
                    {movie.title !== movie.originalTitle && (
                        <h2 className="absolute bottom-8 w-full text-center text-xl text-[24px] font-bold italic">
                            {movie.originalTitle} <span className="align-super text-xs">{movie.originalLanguage}</span>
                        </h2>
                    )}
                </div>
            ) : (
                <h1 className="w-full text-center text-xl text-[48px] font-bold">{movie.title}</h1>
            )}

            {/* Overview */}
            <MovieDetailCard title="Overview">
                <p>{movie.overview}</p>
            </MovieDetailCard>

            <div className="flex flex-col justify-center gap-2 md:flex-row md:gap-8">
                <MovieDetailCard className="w-full md:w-sm" title="Details">
                    <p>Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</p>
                    <p>Runtime: {prettyMilliseconds(movie.runtime * 60 * 1000)}</p>
                    <p>Status: {movie.status}</p>
                    <p>Genres: {movie.genres?.join(", ")}</p>
                    {movie.homepage && <p>Homepage: {movie.homepage}</p>}
                </MovieDetailCard>

                {/* Watch details */}
                <MovieDetailCard className="w-full md:w-sm" title="Watch details">
                    <p>Watched at: {new Date(movie.watchedAt ?? 0).toLocaleDateString()}</p>
                    <p>Watched language: {movie.watchedLanguage}</p>
                </MovieDetailCard>
            </div>

            {/* Actors */}
            {/* <MovieDetailCard title="Actors" className="w-sm">
        <p>Actors: {movie.actors.map(actor -> (<Fragment />))}</p>
      </MovieDetailCard> */}
        </div>
    ) : isFetching ? (
        <div className="flex h-screen items-center justify-center">
            <p className="text-xl">Loading...</p>
        </div>
    ) : (
        <div className="flex h-screen items-center justify-center">
            <p className="text-xl">Error fetching movie details</p>
        </div>
    );
};
