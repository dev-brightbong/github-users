import React, { Children, useEffect, useState } from "react";
import { useSearchUsersInfiniteQuery } from "@/apis/user/user.query";
import { Button, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import Card from "@/components/Card/Card";
import LoadingView from "@/components/LoadingView";
import InfiniteList from "@/components/InfiniteList";
import ListLoadingView from "./_components/ListLoadingView";
import ListEmptyView from "./_components/ListEmptyView";

const List = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [enabled, setEnabled] = useState(false);

  const { data, hasNextPage, fetchNextPage, refetch, isLoading, isFetching } =
    useSearchUsersInfiniteQuery({
      variables: { q: query },
      options: {
        enabled,
      },
    });

  const list = data?.pages.flatMap((v) => v);

  const handleSearch = () => {
    setEnabled(true);
    setQuery(input);
  };

  useEffect(() => {
    if (enabled) {
      refetch();
    }
  }, [query, enabled, refetch]);

  return (
    <>
      <InputGroup>
        <Input
          mb="24px"
          placeholder="유저를 검색해보세요."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <InputRightAddon>
          <Button isLoading={isFetching} onClick={handleSearch}>
            검색
          </Button>
        </InputRightAddon>
      </InputGroup>

      {enabled && (
        <LoadingView
          isLoading={isLoading}
          fallback={Children.toArray(
            Array.from({ length: 10 }).map(() => {
              return <ListLoadingView />;
            })
          )}
        >
          <InfiniteList
            data={list}
            hasMore={!!hasNextPage}
            isFetching={isFetching}
            onFetchMore={fetchNextPage}
            listEmptyComponent={<ListEmptyView />}
            renderItem={(item) => {
              const { login, avatar_url } = item;
              return <Card mb="24px" username={login} profile={avatar_url} />;
            }}
          />
        </LoadingView>
      )}
    </>
  );
};

export default List;
