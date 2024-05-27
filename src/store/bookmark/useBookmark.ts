import { useEffect } from "react";
import { bookmarkStorage } from "@/utils/web-storage/bookmark";
import useBookmarkStore from "./useBookmarkStore";
import { useBookmarkHandler } from "./useBookmarkHandler";

const useBookmark = () => {
  const { bookmarks, setBookmarks, add, remove } = useBookmarkStore();
  const { addBookmark, removeBookmark, hasBookmark } = useBookmarkHandler({
    state: bookmarks,
    handler: {
      add,
      remove,
      setBookmarks,
    },
  });

  useEffect(() => {
    setBookmarks(bookmarkStorage.data || []);
  }, [setBookmarks]);

  return {
    state: { bookmarks },
    handler: {
      hasBookmark,
      addBookmark,
      removeBookmark,
    },
  };
};

export default useBookmark;
