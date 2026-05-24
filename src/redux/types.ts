// ###########
//   Requests
// ###########

// export type Request<T> = PaginableRequest & SortableRequest<T>;

// export type PaginableRequest = Partial<{
//   page: number;
//   pageSize: number;
// }>;

// export type SortableRequest<T> = {
//   sort?: Array<{
//     field: keyof T;
//     direction: "asc" | "desc";
//   }>;
// };

// ###########
//   Responses
// ###########

export type PageResponse<T> = {
  content: T[];
  page: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
};
