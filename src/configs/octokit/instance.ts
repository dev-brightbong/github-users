import { Octokit } from "octokit";

const auth = process.env.NEXT_PUBLIC_TOKEN;
const octokitInstance = new Octokit({
  auth,
});

export default octokitInstance;
