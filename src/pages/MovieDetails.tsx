import prettyMilliseconds from "pretty-ms";
import { useParams } from "react-router-dom";
import { MovieDetailCard } from "@/components/MovieDetailCard.tsx";
import { useGetMovieByIdQuery } from "@/redux/movies/movieApiSlice.ts";

export const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const movieIdNumber = Number(movieId);

  const { data: movie, isFetching } = useGetMovieByIdQuery({
    id: movieIdNumber,
  });

  return movie ? (
    <div className="flex flex-col gap-2">
      {/* Header */}
      {movie.backdropPath ? (
        <div className="relative bg-black">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdropPath}`}
            alt="Poster"
            className="w-full object-cover h-96 opacity-60"
            style={{ objectPosition: "50% 20%" }}
          />
          <h1 className="absolute bottom-16 w-full text-xl font-bold text-center text-[72px]">
            {movie.title}
          </h1>
          {movie.title !== movie.originalTitle && (
            <h2 className="absolute bottom-8 w-full text-xl font-bold text-center text-[24px] italic">
              {movie.originalTitle}{" "}
              <span className="text-xs align-super">
                {movie.originalLanguage}
              </span>
            </h2>
          )}
        </div>
      ) : (
        <h1 className="w-full text-xl font-bold text-center text-[48px]">
          {movie.title}
        </h1>
      )}

      {/* Overview */}
      <MovieDetailCard title="Overview">
        <p>{movie.overview}</p>
      </MovieDetailCard>

      <div className="flex flex-col gap-2 md:flex-row md:gap-8 justify-center">
        <MovieDetailCard title="Details" className="w-full md:w-sm">
          <p>
            Release Date: {new Date(movie.releaseDate).toLocaleDateString()}
          </p>
          <p>Runtime: {prettyMilliseconds(movie.runtime * 60 * 1000)}</p>
          <p>Status: {movie.status}</p>
          <p>Genres: {movie.genres?.join(", ")}</p>
          {movie.homepage && <p>Homepage: {movie.homepage}</p>}
        </MovieDetailCard>

        {/* Watch details */}
        <MovieDetailCard title="Watch details" className="w-full md:w-sm">
          <p>
            Watched at: {new Date(movie.watchedAt ?? 0).toLocaleDateString()}
          </p>
          <p>Watched language: {movie.watchedLanguage}</p>
        </MovieDetailCard>
      </div>

      {/* Actors */}
      {/* <MovieDetailCard title="Actors" className="w-sm">
        <p>Actors: {movie.actors.map(actor -> (<Fragment />))}</p>
      </MovieDetailCard> */}
    </div>
  ) : isFetching ? (
    <div className="flex justify-center items-center h-screen">
      <p className="text-xl">Loading...</p>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <p className="text-xl">Error fetching movie details</p>
    </div>
  );
};
