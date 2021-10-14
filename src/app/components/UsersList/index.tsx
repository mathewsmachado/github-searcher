import { UserAvatar, UserAvatarProps } from 'app/components';

import * as S from './styles';

export type UsersListProps = {
  users: Omit<UserAvatarProps, 'size'>[];
  onArrowClick: () => void;
};

export function UsersList({ users, onArrowClick }: UsersListProps) {
  return (
    <S.UsersListWrapper>
      {users.map(({ pictureUrl, username, bio, href, name }) => (
        <S.UserWrapper key={username}>
          <UserAvatar
            size='small'
            name={name}
            pictureUrl={pictureUrl}
            username={username}
            bio={bio}
            href={href}
          />
          <S.ArrowIcon onClick={onArrowClick} title='right arrow icon' />
        </S.UserWrapper>
      ))}
    </S.UsersListWrapper>
  );
}

export { UsersListWrapper } from './styles';
