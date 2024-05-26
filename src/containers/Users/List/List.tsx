import React, { Children } from "react";

import Card from "@/components/Card/Card";
import LoadingView from "@/components/LoadingView";
import InfiniteList from "@/components/InfiniteList";
import ListLoadingView from "./_components/ListLoadingView";
import ListEmptyView from "./_components/ListEmptyView";
import useList from "./_hooks/useList";
import SearchInput from "../SearchInput";

const List = () => {
  const { state, handler } = useList();
  return (
    <>
      <SearchInput />

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
            onFetchMore={handler.loadMore}
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
