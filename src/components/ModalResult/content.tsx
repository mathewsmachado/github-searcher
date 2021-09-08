import { Rename } from 'utils/typescript';
import { Avatar, AvatarProps } from 'components/Avatar';
import { Status } from 'components/Status';
import {
  SocialMediaIcons,
  SocialMediaIconsProps,
} from 'components/SocialMediaIcons';

import * as S from './styles';

type Base = Omit<AvatarProps, 'as' | 'direction' | 'href'> &
  Partial<Rename<SocialMediaIconsProps, 'usernames', 'socialMediaUsernames'>>;

type User = {
  type: 'user';
  statuses: Record<'followers' | 'following' | 'repositories', number>;
};

type Repo = {
  type: 'repo';
  statuses: Record<'stars' | 'forks' | 'issues', number>;
};

export type ContentProps = Base & (User | Repo);

export function Content({
  name,
  pictureUrl,
  username,
  type,
  about,
  statuses,
  socialMediaUsernames,
}: ContentProps) {
  const usernamesMapper = {
    user: { ...socialMediaUsernames, github: `${username}`.toLowerCase() },
    repo: {
      ...socialMediaUsernames,
      github: `${username}/${name}`.toLowerCase(),
    },
  };

  return (
    <S.ContentWrapper>
      <S.AvatarWrapper>
        <Avatar
          direction='column'
          about={about}
          name={name}
          pictureUrl={pictureUrl}
          type={type}
          username={username}
        />
      </S.AvatarWrapper>
      <S.StatusWrapper>
        {Object.entries(statuses).map(([label, count]) => (
          <Status key={label} count={count} label={label} />
        ))}
      </S.StatusWrapper>
      <SocialMediaIcons
        size='xlarge'
        label={`check ${type === 'user' ? 'this user' : 'it'} on`}
        usernames={usernamesMapper[type!]}
      />
    </S.ContentWrapper>
  );
}
