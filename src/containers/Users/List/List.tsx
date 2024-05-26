import React, { Children } from "react";
import { Button, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";

import Card from "@/components/Card/Card";
import LoadingView from "@/components/LoadingView";
import InfiniteList from "@/components/InfiniteList";
import ListLoadingView from "./_components/ListLoadingView";
import ListEmptyView from "./_components/ListEmptyView";
import useList from "./_hooks/useList";

const List = () => {
  const { state, handler } = useList();
  return (
    <>
      <InputGroup>
        <Input
          mb="24px"
          placeholder="유저를 검색해보세요."
          value={state.input}
          onChange={handler.onChangeInput}
        />
        <InputRightAddon>
          <Button isLoading={state.isFetching} onClick={handler.handleSearch}>
            검색
          </Button>
        </InputRightAddon>
      </InputGroup>

      {state.fetchEnabled && (
        <LoadingView
          isLoading={state.isLoading}
          fallback={Children.toArray(
            Array.from({ length: 10 }).map(() => {
              return <ListLoadingView />;
            })
          )}
        >
          <InfiniteList
            data={state.list}
            hasMore={!!state.hasNextPage}
            isFetching={state.isFetching}
            onFetchMore={handler.fetchNextPage}
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
