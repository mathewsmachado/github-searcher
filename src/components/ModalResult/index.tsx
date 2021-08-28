import { Rename } from 'utils/typescript';
import { Avatar, AvatarProps } from 'components/Avatar';
import { Modal, ModalProps } from 'components/Modal';
import {
  SocialMediaIcons,
  SocialMediaIconsProps,
} from 'components/SocialMediaIcons';
import { Status } from 'components/Status';

import * as S from './styles';

type UserStatus = Record<'followers' | 'following' | 'repositories', number>;
type RepoStatus = Record<'stars' | 'forks' | 'issues', number>;
type Statuses = UserStatus | RepoStatus;

type Props = Pick<ModalProps, 'isOpen' | 'onClose'> &
  Pick<AvatarProps, 'pictureUrl' | 'username' | 'about' | 'type' | 'name'> &
  Rename<SocialMediaIconsProps, 'usernames', 'socialMediaUsernames'> & {
    statuses: Statuses;
  };

function isUserStatus(status: any): status is UserStatus {
  return !!status.followers || !!status.following || !!status.repositories;
}

function isRepoStatus(status: any): status is RepoStatus {
  return !!status.stars || !!status.forks || !!status.issues;
}

function isStatusValid(type: Props['type'], status: Statuses) {
  if (
    (type === 'user' && isRepoStatus(status)) ||
    (type === 'repo' && isUserStatus(status))
  ) {
    return false;
  }

  return true;
}

function ModalResult({
  isOpen,
  onClose,
  name,
  pictureUrl,
  username,
  type,
  about,
  statuses,
  socialMediaUsernames,
}: Props) {
  if (!isStatusValid(type, statuses)) {
    throw new Error('"type" doesn\'t corresponds to the "statuses" passed');
  }

  const usernamesMapper = {
    user: { ...socialMediaUsernames, github: `${username}`.toLowerCase() },
    repo: {
      ...socialMediaUsernames,
      github: `${username}/${name}`.toLowerCase(),
    },
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <S.Wrapper>
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
        <S.SocialMediaWrapper>
          <SocialMediaIcons
            size='xlarge'
            label={`check ${type === 'user' ? 'this user' : 'it'} on`}
            usernames={usernamesMapper[type!]}
          />
        </S.SocialMediaWrapper>
      </S.Wrapper>
    </Modal>
  );
}

export { ModalResult };
export type { Props as ModalResultProps };
