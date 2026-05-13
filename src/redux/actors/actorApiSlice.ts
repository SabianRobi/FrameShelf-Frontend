import { restApi } from "@/redux/restApi.ts";
import {
  Actor,
  CreateActorRequest,
  CreateActorResponse,
  DeleteActorRequest,
  DeleteActorResponse,
  GetActorByIdRequest,
  GetActorByIdResponse,
  GetActorsRequest,
  GetActorsResponse,
  SearchActorRequest,
  SearchActorResponse,
} from "./types.ts";

export const movieApi = restApi.injectEndpoints({
  endpoints: (builder) => ({
    getActors: builder.query<Actor[], GetActorsRequest>({
      query: (params) => ({
        url: `/actors`,
        params,
      }),
      transformResponse: (response: GetActorsResponse) => response.content,
    }),
    getActorById: builder.query<GetActorByIdResponse, GetActorByIdRequest>({
      query: ({ id }) => `/actors/${id}`,
    }),
    searchActor: builder.query<SearchActorResponse[], SearchActorRequest>({
      query: (params) => ({
        url: `/actors/search`,
        params,
      }),
    }),
    createActor: builder.mutation<CreateActorResponse, CreateActorRequest>({
      query: (body) => ({
        url: `/actors`,
        method: "POST",
        body,
      }),
    }),
    deleteActor: builder.mutation<DeleteActorResponse, DeleteActorRequest>({
      query: ({ id }) => ({
        url: `/actors/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
