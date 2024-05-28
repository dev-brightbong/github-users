import { useEffect } from "react";
import { bookmarkStorage } from "@/utils/web-storage/bookmark";
import useBookmarkStore from "./useBookmarkStore";
import { useBookmarkHandler } from "./useBookmarkHandler";

const useBookmark = () => {
  const bookmarks = useBookmarkStore((state) => state.bookmarks);
  const add = useBookmarkStore((state) => state.add);
  const remove = useBookmarkStore((state) => state.remove);
  const setBookmarks = useBookmarkStore((state) => state.setBookmarks);

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
