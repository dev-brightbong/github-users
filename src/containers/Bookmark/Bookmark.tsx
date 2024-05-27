import React from "react";
import TabMenu from "@/components/TabMenu/TabMenu";
import BasisSection from "@/components/Layout/BasisSection";
import useBookmark from "@/store/bookmark/useBookmark";

const Bookmark = () => {
  const { state } = useBookmark();

  console.log(state.bookmarks);
  return (
    <BasisSection>
      <TabMenu />
    </BasisSection>
  );
};

export default Bookmark;
