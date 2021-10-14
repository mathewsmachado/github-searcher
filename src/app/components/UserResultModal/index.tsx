import { User } from 'core/entities';

import {
  Modal,
  ModalProps,
  SocialMediaIcons,
  SocialMediaIconsProps,
  Status,
  UserAvatar,
} from 'app/components';

import * as S from './styles';

export type UserResultModalProps = Pick<ModalProps, 'isOpen' | 'onClose'> &
  Pick<User, 'name' | 'pictureUrl' | 'username' | 'bio'> & {
    socialMediaUsernames: SocialMediaIconsProps['usernames'];
    statuses: Record<'followers' | 'following' | 'repositories', number>;
  };

export function UserResultModal({
  bio,
  name,
  isOpen,
  onClose,
  statuses,
  username,
  pictureUrl,
  socialMediaUsernames,
}: UserResultModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.ContentWrapper>
        <UserAvatar
          size='large'
          bio={bio}
          name={name}
          pictureUrl={pictureUrl}
          username={username}
        />
        <S.StatusWrapper>
          {Object.entries(statuses).map(([label, count]) => (
            <Status key={label} count={count} label={label} />
          ))}
        </S.StatusWrapper>
        <SocialMediaIcons
          label='check this user on'
          usernames={socialMediaUsernames}
        />
      </S.ContentWrapper>
    </Modal>
  );
}
