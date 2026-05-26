import type { PaginableRequest, PaginableResponse, Request } from "@/redux/types";

// ###########
//   Models
// ###########

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
    genres: Array<string>;
    homepage: string | null;
    overview: string | null;
    posterPath: string | null;
    backdropPath: string | null;
    watchedAt: string | null;
    watchedLanguage: string | null;
};

export type MovieSearchResult = Pick<Movie, "id" | "title" | "releaseDate" | "originalTitle"> & {
    posterPath?: string;
};

export type CastMember = {
    id: number;
    name: string;
    originalName: string;
    profilePath: string | null;
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
export type CreateMovieRequest = Pick<Movie, "id" | "watchedAt" | "watchedLanguage">;
export type DeleteMovieRequest = Pick<Movie, "id">;

// ###########
//   Responses
// ###########

export type GetMoviesResponse = PaginableResponse<Movie>;
export type GetMovieByIdResponse = Movie;
export type GetMovieCastByMovieIdResponse = CastMember[];
export type SearchMoviesResponse = PaginableResponse<MovieSearchResult>;
export type CreateMovieResponse = Movie;
export type DeleteMovieResponse = void;
