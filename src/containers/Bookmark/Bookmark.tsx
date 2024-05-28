import React from "react";
import TabMenu from "@/components/TabMenu/TabMenu";
import BasisSection from "@/components/Layout/BasisSection";
import useBookmark from "@/store/bookmark/useBookmark";
import BookmarkList from "./BookmarkList";

const Bookmark = () => {
  const { state } = useBookmark();

  return (
    <BasisSection>
      <TabMenu />
      <BookmarkList />
    </BasisSection>
  );
};

export default Bookmark;
