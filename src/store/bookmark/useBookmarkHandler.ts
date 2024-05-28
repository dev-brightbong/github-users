import { bookmarkStorage } from "@/utils/web-storage/bookmark";
import { BookmarkStoreType, BookmarkType } from "./useBookmarkStore";

interface BookmarkHandlerProps {
  state: BookmarkType;
  handler: Omit<BookmarkStoreType, "bookmarks" | "setBookmarks">;
}

/**
 * @description 북마크의 이벤트 처리를 수행하는 훅입니다.
 * @param state @param handler
 * @returns
 */
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

  const removeBookmark = (id: number) => {
    const updatedBookmarks = state.filter((bookmark) => bookmark.id !== id);
    bookmarkStorage.set(updatedBookmarks);
    handler.remove(id);
  };

  return {
    hasBookmark,
    addBookmark,
    removeBookmark,
  };
};
