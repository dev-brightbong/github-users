import UserCard from "@/components/UserCard/UserCard";
import useBookmark from "@/store/bookmark/useBookmark";
import { VStack } from "@chakra-ui/react";
import React from "react";

const BookmarkList = () => {
  const { state } = useBookmark();
  return (
    <VStack mt="24px" w="100%" spacing={0}>
      {state.bookmarks.map((item) => {
        return <UserCard key={item.id} item={item} />;
      })}
    </VStack>
  );
};

export default BookmarkList;
