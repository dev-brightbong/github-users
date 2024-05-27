import { BookmarkType } from "@/store/bookmark/useBookmarkStore";
import { WebLocalStorage } from "./local-storage";

export const bookmarkStorage = new WebLocalStorage<BookmarkType>("bookmark");
