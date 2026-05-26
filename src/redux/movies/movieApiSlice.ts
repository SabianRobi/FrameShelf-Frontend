import { restApi } from "@/redux/restApi";
import {
  CreateMovieRequest,
  CreateMovieResponse,
  DeleteMovieRequest,
  DeleteMovieResponse,
  GetMovieByIdRequest,
  GetMovieByIdResponse,
  GetMovieCastByMovieIdRequest,
  GetMovieCastByMovieIdResponse,
  GetMoviesRequest,
  GetMoviesResponse,
  Movie,
  SearchMoviesRequest,
  SearchMoviesResponse,
} from "./types";

export const movieApi = restApi.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query<Movie[], GetMoviesRequest>({
      query: (params) => ({
        url: `/movies`,
        params,
      }),
      transformResponse: (response: GetMoviesResponse) => response.content,
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: "Movies" as const, id })),
            { type: "Movies", id: "LIST" },
          ]
          : [{ type: "Movies", id: "LIST" }],
    }),
    getMovieById: build.query<GetMovieByIdResponse, GetMovieByIdRequest>({
      query: ({ id }) => `/movies/${id}`,
      providesTags: (_result, _error, { id }) => [{ type: "Movies", id }],
    }),
    getMovieCastByMovieId: build.query<
      GetMovieCastByMovieIdResponse,
      GetMovieCastByMovieIdRequest
    >({
      query: ({ id }) => `/movies/${id}/cast`,
    }),
    searchMovies: build.query<SearchMoviesResponse, SearchMoviesRequest>({
      query: (params) => ({
        url: `/movies/search`,
        params,
      }),
    }),
    createMovie: build.mutation<CreateMovieResponse, CreateMovieRequest>({
      query: (body) => ({
        url: `/movies`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Movies", id: "LIST" }],
    }),
    deleteMovie: build.mutation<DeleteMovieResponse, DeleteMovieRequest>({
      query: ({ id }) => ({
        url: `/movies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Movies", id }],
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useLazyGetMoviesQuery,
  useGetMovieByIdQuery,
  useLazySearchMoviesQuery,
  useCreateMovieMutation,
} = movieApi;
