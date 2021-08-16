import * as S from './styles';

type SecondaryHeadingProps = S.WrapperProps & {
  children: string;
};

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
