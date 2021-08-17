import { IconType } from 'react-icons';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

import * as S from './styles';

type AllowedSocialMedias = 'github' | 'linkedin' | 'twitter';

type SocialMediaMapperItem = {
  baseUrl: string;
  Icon: IconType;
};

type SocialMediaIconsProps = Pick<S.WrapperProps, 'size'> & {
  usernames: Partial<Record<AllowedSocialMedias, string>>;
  label?: string;
};

const iconsSizesMapper: Record<S.AllowedSizes, number> = {
  medium: 20,
  xlarge: 40,
};

const socialMediaMapper: Record<AllowedSocialMedias, SocialMediaMapperItem> = {
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
    <S.Wrapper size={size} hasMultipleIcons={hasMultipleIcons}>
      {!!label && <S.Label>{label}</S.Label>}

      <S.IconsWrapper>
        {socialMedias.map(({ link, title, Icon }) => (
          <S.IconWrapper key={link} href={link}>
            <Icon title={title} size={iconsSizesMapper[size]} />
          </S.IconWrapper>
        ))}
      </S.IconsWrapper>
    </S.Wrapper>
  );
}
