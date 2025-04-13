import { useEffect, useState } from "react";
import { Modal } from "../components/Modal.tsx";
import { MovieCard } from "../components/MovieCard.tsx";
import { useGetMoviesQuery } from "../redux/movies/movieApiSlice.ts";
import { LikeMovieModalContent } from "./home/LikeMovieModalContent.tsx";

export const Home = () => {
  const [showAddMovieModal, setShowAddMovieModal] = useState<boolean>(false);

  const { data: likedMovies } = useGetMoviesQuery({ pageSize: 15 });

  const getMaxMovies = () => {
    const screenWidth = globalThis.innerWidth;
    if (screenWidth >= 1536) return 3 * 5; // 2xl:grid-cols-5
    if (screenWidth >= 1280) return 3 * 4; // xl:grid-cols-4
    if (screenWidth >= 768) return 3 * 3; // md:grid-cols-3
    if (screenWidth >= 640) return 3 * 2; // sm:grid-cols-2
    return 3 * 1; // grid-cols-1
  };

  const [maxMovies, setMaxMovies] = useState(getMaxMovies());

  useEffect(() => {
    const handleResize = () => setMaxMovies(getMaxMovies());

    globalThis.addEventListener("resize", handleResize);
    return () => globalThis.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        {/* Add movie button */}
        <button
          type="button"
          className="p-2 rounded-md border-[#F6B17A] border-1 border-dashed hover:border-solid bg-[#424769] hover:text-[#F6B17A] hover:bg-[#F6B17A11] cursor-pointer"
          onClick={() => setShowAddMovieModal(true)}
        >
          Like a movie
        </button>
        <Modal
          showModal={showAddMovieModal}
          setShowModal={setShowAddMovieModal}
          title={<p className="text-xl">Like a movie</p>}
        >
          <LikeMovieModalContent setShowModal={setShowAddMovieModal} />
        </Modal>
      </div>

      {/* 3 rows of recently liked movies */}
      <div className="pt-8 flex flex-col gap-2">
        <h2 className="text-xl font-bold">Recently liked movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {likedMovies
            ?.slice(0, maxMovies)
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)}
        </div>
      </div>
    </>
  );
};
