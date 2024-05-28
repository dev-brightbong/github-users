import { useRouter } from "next/router";
import { useMemo } from "react";
import { useSearchUsersInfiniteQuery } from "@/apis/user/user.query";

const useUserList = () => {
  const router = useRouter();
  const query = router.query.query;
  const fetchEnabled = !!query;

  const { data, hasNextPage, isLoading, isFetching, fetchNextPage } =
    useSearchUsersInfiniteQuery({
      variables: { q: String(query) },
      options: {
        enabled: fetchEnabled,
      },
    });

  const list = useMemo(() => {
    return data?.pages.flatMap((v) => v) || [];
  }, [data?.pages]);

  const loadMore = () => {
    fetchNextPage();
  };

  return {
    state: {
      list,
      fetchEnabled,
      hasNextPage,
      isLoading,
      isFetching,
    },
    handler: {
      loadMore,
    },
  };
};

export default useUserList;
