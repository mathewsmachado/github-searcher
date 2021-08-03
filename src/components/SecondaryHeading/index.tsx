import * as S from './styles';
import { SecondaryHeadingProps } from './types';

export function SecondaryHeading({
  children,
  size = 'huge',
  thin = false,
}: SecondaryHeadingProps) {
  if (thin) {
    return <S.Wrapper thin={thin}>{children}</S.Wrapper>;
  }

  return <S.Wrapper size={size}>{children}</S.Wrapper>;
}
