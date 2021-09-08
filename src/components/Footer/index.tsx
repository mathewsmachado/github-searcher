import {
  SocialMediaIcons,
  SocialMediaIconsProps,
} from 'components/SocialMediaIcons';

import * as S from './styles';

export type FooterProps = Pick<SocialMediaIconsProps, 'usernames'> & {
  text: string;
};

export function Footer({ usernames, text }: FooterProps) {
  return (
    <S.FooterWrapper>
      <S.Text>{text}</S.Text>
      <S.IconsWrapper>
        <SocialMediaIcons size='medium' usernames={usernames} />
      </S.IconsWrapper>
    </S.FooterWrapper>
  );
}

export { FooterWrapper } from './styles';
