import { useEffect, useMemo } from "react";
import { bookmarkStorage } from "@/utils/web-storage/bookmark";
import useBookmarkStore, { BookmarkType } from "./useBookmarkStore";

interface BookmarkHandlerProps {
  state: BookmarkType;
}

export const useBookmarkHandler = ({ state }: BookmarkHandlerProps) => {
  const { add, remove, setBookmarks } = useBookmarkStore();

  const hasBookmark = (_id: number) => {
    const index = state.findIndex(({ id }) => id === _id);
    return index === -1;
  };

  const addBookmark = (_bookmark: BookmarkType[number]) => {
    const updatedBookmarks = [...(state || []), _bookmark];
    bookmarkStorage.set(updatedBookmarks);
    add(_bookmark);
  };

  const setBookmark = (_bookmarks: BookmarkType) => {
    bookmarkStorage.set(_bookmarks);
    setBookmarks(_bookmarks);
  };

  const removeBookmark = (id: number) => {
    const updatedBookmarks = state.filter((bookmark) => bookmark.id !== id);
    bookmarkStorage.set(updatedBookmarks);
    remove(id);
  };

  return {
    hasBookmark,
    addBookmark,
    removeBookmark,
    setBookmark,
  };
};

export const useBookmark = () => {
  const { bookmarks, setBookmarks } = useBookmarkStore();
  const { addBookmark, removeBookmark, hasBookmark } = useBookmarkHandler({
    state: bookmarks,
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
