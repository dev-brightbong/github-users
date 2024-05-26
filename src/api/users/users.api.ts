import { Octokit } from "octokit";
import { SearchUsersParams } from "./users.type";
import octokitInstance from "@/configs/octokit/instance";

export class Api {
  private instance;

  constructor(instance: Octokit) {
    this.instance = instance;
  }

  searchUsers(params: SearchUsersParams) {
    this.instance.rest.search.users({ ...params });
  }
}

const api = new Api(octokitInstance);

export default api;
