export type SearchUsersParams = {
  q: string;
  sort?: "followers" | "repositories" | "joined";
  order?: "desc" | "asc";
  per_page?: number;
  page?: number;
};
