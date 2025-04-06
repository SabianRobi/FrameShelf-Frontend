// ###########
//   Requests
// ###########

export type Request<T> = PaginableRequest & SortableRequest<T>;

export type PaginableRequest = Partial<{
  page: number;
  pageSize: number;
}>;

export type SortableRequest<T> = {
  sort?: Array<{
    field: keyof T;
    direction: "asc" | "desc";
  }>;
};

// ###########
//   Responses
// ###########

export type PaginableResponse<T> = {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};
