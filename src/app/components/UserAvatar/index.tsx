import { User } from 'core/entities';

import * as S from './styles';

export type UserAvatarProps = Pick<S.Props, 'size' | 'href'> &
  Pick<User, 'name' | 'bio' | 'username' | 'pictureUrl'>;

const BIO_MAX_SIZE = 35;

export function UserAvatar({
  bio,
  name,
  href,
  username,
  pictureUrl,
  size = 'large',
}: UserAvatarProps) {
  return (
    <S.UserAvatarWrapper
      size={size}
      href={href}
      as={href ? 'a' : 'div'}
      target={href ? '_blank' : undefined}
    >
      <S.Image src={pictureUrl} alt={name} />
      {size === 'small' && (
        <S.TextWrapper>
          <S.Name>{`${name?.split(' ')[0]}`}</S.Name>
          <S.Bio>
            {bio?.length > BIO_MAX_SIZE
              ? `${bio!.substring(0, BIO_MAX_SIZE).trim()}...`
              : bio}
          </S.Bio>
        </S.TextWrapper>
      )}
      {size === 'large' && (
        <>
          <S.Name>{name}</S.Name>
          <S.Username>@{username}</S.Username>
          <S.Bio>{bio}</S.Bio>
        </>
      )}
    </S.UserAvatarWrapper>
  );
}

export { UserAvatarWrapper } from './styles';
