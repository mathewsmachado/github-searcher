/* eslint-disable @typescript-eslint/lines-between-class-members */
type Statuses = {
  followers: number;
  following: number;
  repositories: number;
};

type SocialMediaUsernames = {
  github?: string;
  twitter?: string;
  linkedin?: string;
};

export class User {
  readonly username!: string;
  readonly pictureUrl!: string;
  readonly statuses!: Statuses;
  readonly socialMediaUsernames!: SocialMediaUsernames;
  readonly fetchedAt: number;
  readonly name?: string | undefined;
  readonly bio?: string | undefined;

  constructor(props: Omit<User, 'fetchedAt'>) {
    Object.assign(this, props);
    this.fetchedAt = new Date().getTime();

    if (!this.name) {
      this.name = `${props.username
        .charAt(0)
        .toUpperCase()}${props.username.substring(1)}`;
    }

    if (!props.bio) {
      this.bio = 'A passionate developer.';
    }
  }
}
