import { userApi } from "@/apis/user/user.api";
import { create } from "zustand";

export type SearchUserType = ReturnType<typeof userApi.searchUsers>;
export type BookmarkType = Awaited<SearchUserType>;

type BookmarkStoreType = {
  bookmarks: BookmarkType;
  add: (bookmark: BookmarkType[number]) => void;
  remove: (id: number) => void;
};

const useBookmarkStore = create<BookmarkStoreType>()((set) => ({
  bookmarks: [],
  add: (_bookmark) =>
    set((state) => ({
      bookmarks: [...state.bookmarks, _bookmark],
    })),
  remove: (id) =>
    set((state) => ({
      bookmarks: state.bookmarks?.filter((bookmark) => bookmark.id !== id),
    })),
}));

export default useBookmarkStore;
