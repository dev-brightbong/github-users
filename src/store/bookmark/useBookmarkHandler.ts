import { bookmarkStorage } from "@/utils/web-storage/bookmark";
import { BookmarkStoreType, BookmarkType } from "./useBookmarkStore";

interface BookmarkHandlerProps {
  state: BookmarkType;
  handler: Omit<BookmarkStoreType, "bookmarks">;
}

export const useBookmarkHandler = ({
  state,
  handler,
}: BookmarkHandlerProps) => {
  const hasBookmark = (_id: number) => {
    const index = state.findIndex(({ id }) => id === _id);
    return index !== -1;
  };

  const addBookmark = (_bookmark: BookmarkType[number]) => {
    const updatedBookmarks = [...(state || []), _bookmark];
    bookmarkStorage.set(updatedBookmarks);
    handler.add(_bookmark);
  };

  const setBookmark = (_bookmarks: BookmarkType) => {
    bookmarkStorage.set(_bookmarks);
    handler.setBookmarks(_bookmarks);
  };

  const removeBookmark = (id: number) => {
    const updatedBookmarks = state.filter((bookmark) => bookmark.id !== id);
    bookmarkStorage.set(updatedBookmarks);
    handler.remove(id);
  };

  return {
    hasBookmark,
    addBookmark,
    removeBookmark,
    setBookmark,
  };
};
