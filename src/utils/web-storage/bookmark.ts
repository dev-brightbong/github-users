import { BookmarkType } from "@/store/bookmark";
import { WebLocalStorage } from "./local-storage";

export const bookmarkStorage = new WebLocalStorage<BookmarkType>("bookmark");
