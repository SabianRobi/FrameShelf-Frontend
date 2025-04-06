import { restApi } from "../restApi.ts";
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
} from "./types.ts";

export const movieApi = restApi.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query<Movie[], GetMoviesRequest>({
      query: (params) => ({
        url: `/movies`,
        params,
      }),
      transformResponse: (response: GetMoviesResponse) => response.content,
    }),
    getMovieById: build.query<GetMovieByIdResponse, GetMovieByIdRequest>({
      query: ({ id }) => `/movies/${id}`,
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
    }),
    deleteMovie: build.mutation<DeleteMovieResponse, DeleteMovieRequest>({
      query: ({ id }) => ({
        url: `/movies/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
