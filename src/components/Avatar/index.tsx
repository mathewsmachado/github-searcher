import * as S from './styles';

type AvatarProps = S.WrapperProps & {
  name: string;
  pictureUrl: string;
  username: string;
  about?: string;
  type?: 'user' | 'repo';
};

export function Avatar({
  name,
  username,
  pictureUrl,
  as,
  href,
  type = 'user',
  about = type === 'user' ? 'A passionate developer.' : 'A passionate tool.',
  direction = 'column',
}: AvatarProps) {
  const wrapperProps = as ? { direction, as, href } : { direction };

  return (
    <S.Wrapper {...wrapperProps}>
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
    </S.Wrapper>
  );
}
