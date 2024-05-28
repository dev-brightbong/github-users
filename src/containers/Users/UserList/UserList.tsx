import React, { Children } from "react";
import useUserList from "./_hooks/useUserList";
import LoadingView from "@/components/LoadingView";
import InfinityList from "@/components/InfinityList";
import UserCard from "@/components/UserCard/UserCard";
import ListLoadingView from "./_components/ListLoadingView";
import ListEmptyView from "./_components/ListEmptyView";
import SearchInput from "../SearchInput";

const UserList = () => {
  const { state, handler } = useUserList();
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
          <InfinityList
            data={state.list}
            hasMore={!!state.hasNextPage}
            isFetching={state.isFetching}
            onFetchMore={handler.loadMore}
            listEmptyComponent={<ListEmptyView />}
            renderItem={(item) => {
              return <UserCard item={item} />;
            }}
          />
        </LoadingView>
      )}
    </>
  );
};

export default UserList;
