import { Octokit } from "octokit";
import { SearchUsersParams } from "./user.type";
import octokitInstance from "@/configs/octokit/instance";

export class UserApi {
  private instance;

  constructor(instance: Octokit) {
    this.instance = instance;
  }

  async searchUsers(params: SearchUsersParams) {
    const response = await this.instance.rest.search.users({
      ...params,
    });
    return response.data.items;
  }
}

export const userApi = new UserApi(octokitInstance);
