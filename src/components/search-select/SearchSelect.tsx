import { TypedLazyQueryTrigger } from "@reduxjs/toolkit/query/react";
import { GroupBase, OptionsOrGroups } from "react-select";
import {
  AsyncPaginate,
  type AsyncPaginateProps,
} from "react-select-async-paginate";
import CustomOption from "./CustomOption";

type SearchSelectProps<
  Option,
  Group extends GroupBase<Option>,
  IsMulti extends boolean,
  QueryResponse
> = Omit<
  AsyncPaginateProps<Option, Group, AdditionalFields, IsMulti>,
  "loadOptions"
> & {
  rtkQuery: [
    lazyTrigger: TypedLazyQueryTrigger<QueryResponse, any, any>,
    {
      data?: QueryResponse;
      isLoading: boolean;
      isFetching: boolean;
      isError: boolean;
    },
    any
  ];
  convertResponse: (response: QueryResponse) => Option[];
  calcHasMore: (response: QueryResponse) => boolean;
};

type AdditionalFields = {
  page: number;
};

const SearchSelect = <
  Option,
  Group extends GroupBase<Option>,
  IsMulti extends boolean,
  QueryResponse
>({
  rtkQuery,
  convertResponse,
  calcHasMore,
  ...props
}: SearchSelectProps<Option, Group, IsMulti, QueryResponse>) => {
  const loadMore = async (
    query: string,
    _options: OptionsOrGroups<Option, GroupBase<Option>>,
    { page }: AdditionalFields = { page: 1 }
  ) => {
    if (query.length === 0) {
      return {
        options: [],
        hasMore: false,
        additional: {
          page: 1,
        },
      };
    }

    const response = await rtkQuery[0]({ query, page }).unwrap();
    const options = convertResponse(response);
    const hasMore = calcHasMore(response);

    return {
      options,
      hasMore,
      additional: {
        page: page + 1,
      },
    };
  };

  return (
    <AsyncPaginate<Option, Group, AdditionalFields, IsMulti>
      loadOptions={loadMore}
      isLoading={rtkQuery[1].isFetching}
      debounceTimeout={400}
      additional={{ page: 1 }}
      components={{
        Option: CustomOption,
      }}
      {...props}
    />
  );
};

export default SearchSelect;
