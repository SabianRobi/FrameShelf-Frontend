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

// ###########
//   Responses
// ###########

export type GetListsResponse = PageResponse<ListResponse>;

export type ListResponse = List;
