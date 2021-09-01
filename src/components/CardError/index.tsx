import { CloseButton } from 'components/CloseButton';

import * as S from './styles';

type Props = {
  text: string;
};

export function CardError({ text }: Props) {
  return (
    <S.Wrapper>
      <CloseButton size='large' minimal />
      <S.Text>{text}</S.Text>
      <CloseButton size='large' minimal />
    </S.Wrapper>
  );
}
