import useBookmarkStore from "./useBookmarkStore";
import { useBookmarkHandler } from "./useBookmarkHandler";

const useBookmark = () => {
  const bookmarks = useBookmarkStore((state) => state.bookmarks);
  const add = useBookmarkStore((state) => state.add);
  const remove = useBookmarkStore((state) => state.remove);

  const { addBookmark, removeBookmark, hasBookmark } = useBookmarkHandler({
    state: bookmarks,
    handler: {
      add,
      remove,
    },
  });

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
