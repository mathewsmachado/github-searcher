export interface GithubUser {
  name?: string;
  login: string;
  bio?: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
  twitter_username?: string;
  [unknownPropsKeys: string]: any;
}
