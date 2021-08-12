import * as S from './styles';

type StatusProps = {
  count: number;
  label: string;
};

export function Status({ count, label }: StatusProps) {
  return (
    <S.Wrapper>
      <S.Count>{count}</S.Count>
      <S.Label>{label}</S.Label>
    </S.Wrapper>
  );
}
