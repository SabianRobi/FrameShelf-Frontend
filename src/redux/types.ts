// ###########
//   Requests
// ###########

// Export type Request<T> = PaginableRequest & SortableRequest<T>;

// Export type PaginableRequest = Partial<{
//   Page: number;
//   PageSize: number;
// }>;

// Export type SortableRequest<T> = {
//   Sort?: Array<{
//     Field: keyof T;
//     Direction: "asc" | "desc";
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
