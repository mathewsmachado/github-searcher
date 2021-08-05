import * as S from './styles';
import { PrimaryHeadingProps } from './types';

export function PrimaryHeading({
  children,
  color = 'primary',
  unfilled = false,
}: PrimaryHeadingProps) {
  return (
    <S.Wrapper color={color} unfilled={unfilled}>
      {children}
    </S.Wrapper>
  );
}
