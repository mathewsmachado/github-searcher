import * as S from './styles';
import mock from './mock.jpg';

export type AvatarProps = S.Props & {
  name: string;
  username: string;
  type: 'user' | 'repo';
  pictureUrl?: string;
  about?: string;
};

export function Avatar({
  name,
  username,
  as,
  href,
  type,
  pictureUrl = mock,
  direction = 'column',
  about = type === 'user' ? 'A passionate developer.' : 'A passionate tool.',
}: AvatarProps) {
  const wrapperProps = as ? { direction, as, href } : { direction };

  return (
    <S.AvatarWrapper {...wrapperProps}>
      <S.Image src={pictureUrl} alt={name} />
      {direction === 'column' && (
        <>
          <S.Name>{name}</S.Name>
          <S.Username>@{username}</S.Username>
          <S.About>{about}</S.About>
        </>
      )}
      {direction !== 'column' && (
        <S.TextWrapper>
          <S.NamesWrapper>
            <S.Name>{name}</S.Name>
            {type === 'repo' && <S.Username>@{username}</S.Username>}
          </S.NamesWrapper>
          <S.About>{about}</S.About>
        </S.TextWrapper>
      )}
    </S.AvatarWrapper>
  );
}

export { AvatarWrapper } from './styles';
