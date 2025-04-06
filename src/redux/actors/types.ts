// ###########
//   General
// ###########

import { PaginableRequest, PaginableResponse, Request } from "../types.ts";

export type Actor = {
  id: number;
  name: string;
  birthday: string;
  profilePath: string | null;
};

// ###########
//   Requests
// ###########

export type GetActorsRequest = undefined | Request<Actor>;
export type GetActorByIdRequest = Pick<Actor, "id">;
export type CreateActorRequest = Pick<Actor, "id">;
export type DeleteActorRequest = Pick<Actor, "id">;
export type SearchActorRequest = Pick<PaginableRequest, "page"> & {
  query: Actor["name"];
};

// ###########
//   Responses
// ###########

export type GetActorsResponse = PaginableResponse<Actor>;
export type GetActorByIdResponse = Actor;
export type CreateActorResponse = Actor;
export type DeleteActorResponse = void;
export type SearchActorResponse = Pick<Actor, "id" | "name" | "profilePath">;
