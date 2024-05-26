import { useInfiniteQuery } from "@tanstack/react-query";
import { InfiniteQueryHookParams, Parameter } from "../react-query.type";
import { userApi } from "./user.api";

export const USER_API_QUERY_KEY = {
  SEARCH_USERS_INFINITE: (params?: Parameter<typeof userApi.searchUsers>) =>
    ["SEARCH_USERS_INFINITE", params].filter(
      (key) => typeof key !== "undefined"
    ),
};

export const useSearchUsersInfiniteQuery = (
  params: InfiniteQueryHookParams<typeof userApi.searchUsers, any>
) => {
  const queryKey = USER_API_QUERY_KEY.SEARCH_USERS_INFINITE(params.variables);
  return useInfiniteQuery(
    queryKey,
    ({ pageParam }) => {
      return userApi.searchUsers({
        ...params.variables,
        page: pageParam as number | undefined,
      });
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const isEnd = lastPage.length < 20;
        return isEnd ? undefined : allPages.length + 1;
      },
      ...params.options,
    }
  );
};
