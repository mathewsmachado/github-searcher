import * as S from './styles';
import { SecondaryHeadingProps } from './types';

export function SecondaryHeading({
  children,
  size = 'huge',
  thin = false,
}: SecondaryHeadingProps) {
  return (
    <S.Wrapper size={size} thin={thin}>
      {children}
    </S.Wrapper>
  );
}
