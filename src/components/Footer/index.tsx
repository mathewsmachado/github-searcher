import { SocialMediaIcons } from 'components/SocialMediaIcons';

import * as S from './styles';

export function Footer() {
  return (
    <S.FooterWrapper>
      <S.Text>Mathews Machado, 2021</S.Text>
      <S.IconsWrapper>
        <SocialMediaIcons
          size='medium'
          usernames={{ github: 'mathewsmachado', linkedin: 'mathewsmachado' }}
        />
      </S.IconsWrapper>
    </S.FooterWrapper>
  );
}

export { FooterWrapper, FooterHeight } from './styles';
