import * as S from './styles';
import { PrimaryHeadingProps } from './types';

export function PrimaryHeading({
  children,
  color = 'primary',
  unfilled = false,
}: PrimaryHeadingProps) {
  // this makes the properties exclusionary
  if (unfilled) {
    return <S.Wrapper unfilled={unfilled}>{children}</S.Wrapper>;
  }

  return <S.Wrapper color={color}>{children}</S.Wrapper>;
}
