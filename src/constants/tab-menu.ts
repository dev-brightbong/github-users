export type TabMenuValueType = "users" | "bookmark";

export const TAB_MENU: Record<"id", TabMenuValueType>[] = [
  {
    id: "users",
  },
  {
    id: "bookmark",
  },
] as const;
