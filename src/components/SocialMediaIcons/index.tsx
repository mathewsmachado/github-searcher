import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

import * as S from './styles';
import {
  AllowedSocialMedias,
  IconsSizeMapper,
  SocialMediaMapper,
  SocialMediaIconsProps,
} from './types';

const iconsSizesMapper: IconsSizeMapper = { medium: 20, xlarge: 40 };

const socialMediaMapper: SocialMediaMapper = {
  twitter: { baseUrl: 'https://www.twitter.com', Icon: AiOutlineTwitter },
  linkedin: { baseUrl: 'https://www.linkedin.com/in', Icon: FaLinkedinIn },
  github: { baseUrl: 'https://www.github.com', Icon: AiFillGithub },
};

export function SocialMediaIcons({
  usernames,
  label,
  size = 'xlarge',
}: SocialMediaIconsProps) {
  const socialMedias = Object.entries(usernames).map(
    ([socialMedia, username]) => {
      const { baseUrl, Icon } =
        socialMediaMapper[socialMedia as AllowedSocialMedias];
      const link = `${baseUrl}/${username}`;
      const title = `${socialMedia} icon`;

      return { Icon, link, title };
    }
  );

  const hasMultipleIcons = socialMedias.length > 1;

  return (
    <S.Wrapper size={size}>
      {!!label && <S.Label>{label}</S.Label>}

      <S.IconsWrapper hasMultipleIcons={hasMultipleIcons}>
        {socialMedias.map(({ link, title, Icon }) => (
          <S.IconWrapper key={link} href={link}>
            <Icon title={title} size={iconsSizesMapper[size]} />
          </S.IconWrapper>
        ))}
      </S.IconsWrapper>
    </S.Wrapper>
  );
}
