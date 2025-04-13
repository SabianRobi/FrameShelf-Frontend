import { useEffect, useState } from "react";
import { Button } from "../components/Button.tsx";
import { MovieCard } from "../components/MovieCard.tsx";
import { useLazyGetMoviesQuery } from "../redux/movies/movieApiSlice.ts";
import { Movie } from "../redux/movies/types.ts";

export const LikedMovies = () => {
  const pageSize = 20;
  const [page, setPage] = useState(0);
  const [likedMovies, setLikedMovies] = useState<Movie[]>([]);

  // TODO: Add sorting by watch date
  const [getMovies, { data, isFetching }] = useLazyGetMoviesQuery();

  useEffect(() => {
    getMovies({ page, pageSize })
      .unwrap()
      .then((response) =>
        setLikedMovies((prevMovies) =>
          page === 0 ? response : [...prevMovies, ...response]
        )
      );
  }, [page, pageSize, getMovies]);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold">Recently liked movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {likedMovies?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      <Button
        onClick={() => setPage((prevPage) => prevPage + 1)}
        disabled={(data?.length ?? 0) < pageSize}
        isLoading={isFetching}
      >
        {isFetching
          ? "Loading..."
          : (data?.length ?? 0) < pageSize
            ? "Reached the end of the list"
            : "Load more"}
      </Button>
    </div>
  );
};
