import { PaginableRequest, PaginableResponse, Request } from "../types.ts";

// ###########
//   Models
// ###########

// TODO?: Should store the poster path also?
export type Movie = {
  id: number;
  title: string;
  releaseDate: string;
  runtime: number;
  originalTitle: string;
  originalLanguage: string;
  status: string;
  voteAverage: number;
  voteCount: number;
  genres: Set<string>;
  homepage?: string;
  overview?: string;
};

export type CastMember = {
  id: number;
  name: string;
  originalName: string;
  profilePath?: string;
  character: string;
};

// ###########
//   Requests
// ###########

export type GetMoviesRequest = undefined | Request<Movie>;
export type GetMovieByIdRequest = Pick<Movie, "id">;
export type GetMovieCastByMovieIdRequest = Pick<Movie, "id">;
export type SearchMoviesRequest = Pick<PaginableRequest, "page"> & {
  query: Movie["title"];
};
export type CreateMovieRequest = Pick<Movie, "id">;
export type DeleteMovieRequest = Pick<Movie, "id">;

// ###########
//   Responses
// ###########

export type GetMoviesResponse = PaginableResponse<Movie>;
export type GetMovieByIdResponse = Movie;
export type GetMovieCastByMovieIdResponse = CastMember[];
export type SearchMoviesResponse = PaginableResponse<
  Pick<Movie, "id" | "title" | "releaseDate" | "originalTitle"> & {
    posterPath?: string;
  }
>;
export type CreateMovieResponse = Movie;
export type DeleteMovieResponse = void;
