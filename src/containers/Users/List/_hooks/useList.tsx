import { useSearchUsersInfiniteQuery } from "@/apis/user/user.query";
import React, { useEffect, useMemo, useState } from "react";

const useList = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [fetchEnabled, setFetchEnabled] = useState(false);

  const { data, hasNextPage, isLoading, isFetching, fetchNextPage, refetch } =
    useSearchUsersInfiniteQuery({
      variables: { q: query },
      options: {
        enabled: fetchEnabled,
      },
    });

  const list = useMemo(() => {
    return data?.pages.flatMap((v) => v) || [];
  }, [data?.pages]);

  const handleSearch = () => {
    setFetchEnabled(true);
    setQuery(input);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
  };

  useEffect(() => {
    if (fetchEnabled) {
      refetch();
    }
  }, [query, fetchEnabled, refetch]);

  return {
    state: {
        input,
        list,
        fetchEnabled,
        hasNextPage,
        isLoading,
        isFetching,
    },
    handler: {
        fetchNextPage,
        onChangeInput,
        handleSearch,
    }
  };
};

export default useList;
