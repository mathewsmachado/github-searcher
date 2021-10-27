import { User } from 'core/entities';
import { UserAvatar } from 'app/components';

import * as S from './styles';

export type UsersListProps = {
  users: User[];
  onArrowClick: (user: User) => () => void;
};

export function UsersList({ users, onArrowClick }: UsersListProps) {
  return (
    <S.UsersListWrapper>
      {users.map((u) => (
        <S.UserWrapper key={u.username}>
          <UserAvatar
            size='small'
            name={u.name}
            pictureUrl={u.pictureUrl}
            username={u.username}
            bio={u.bio}
          />
          <S.ArrowIcon onClick={onArrowClick(u)} title='right arrow icon' />
        </S.UserWrapper>
      ))}
    </S.UsersListWrapper>
  );
}

export { UsersListWrapper } from './styles';
