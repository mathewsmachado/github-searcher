import * as S from './styles';

type PrimaryHeadingProps = S.WrapperProps & {
  children: string;
};

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
