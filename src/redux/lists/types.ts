import { type PageResponse } from "@/redux/types";

// ###########
//   Models
// ###########

export type List = {
    createdAt: string;
    id: string;
    name: string;
    type: ListType;
    updatedAt: string;
    userId: string;
};

export type ListType = "PERSON" | "MOVIE";

// ###########
//   Requests
// ###########

export type CreateListRequest = Pick<List, "name" | "type">;
export type EditListRequest = Pick<List, "id"> & Partial<Pick<List, "name">>;
// ###########
//   Responses
// ###########

export type GetListsResponse = PageResponse<ListResponse>;
export type CreateListResponse = ListResponse;
export type EditListResponse = ListResponse;

export type ListResponse = List;
