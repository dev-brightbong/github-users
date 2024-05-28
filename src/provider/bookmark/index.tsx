import useEffectOnce from "@/hooks/useEffectOnce";
import useBookmarkStore from "@/store/bookmark/useBookmarkStore";
import { bookmarkStorage } from "@/utils/web-storage/bookmark";

interface BookmarkProviderProps {
  children: React.ReactNode;
}

const BookmarkProvider = ({ children }: BookmarkProviderProps) => {
  const setBookmarks = useBookmarkStore((state) => state.setBookmarks);

  const init = () => {
    setBookmarks(bookmarkStorage.data === null ? [] : bookmarkStorage.data);
  };

  useEffectOnce(() => {
    init();
  });

  return <>{children}</>;
};

export default BookmarkProvider;
