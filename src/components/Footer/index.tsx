import {
  SocialMediaIcons,
  SocialMediaIconsProps,
} from 'components/SocialMediaIcons';

import * as S from './styles';

type Props = Pick<SocialMediaIconsProps, 'usernames'> & {
  text: string;
};

export function Footer({ usernames, text }: Props) {
  return (
    <S.Wrapper>
      <S.Text>{text}</S.Text>
      <S.IconsWrapper>
        <SocialMediaIcons size='medium' usernames={usernames} />
      </S.IconsWrapper>
    </S.Wrapper>
  );
}
