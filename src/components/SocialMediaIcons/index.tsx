import { IconType } from 'react-icons';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

import * as S from './styles';

type AllowedSocialMedias = 'github' | 'linkedin' | 'twitter';

type SocialMediaMapperItem = {
  baseUrl: string;
  Icon: IconType;
};

type Props = Pick<S.Props, 'size'> & {
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

export function SocialMediaIcons({ usernames, label, size = 'xlarge' }: Props) {
  const SocialMediaData = Object.entries(usernames).map(
    ([socialMediaName, username]) => {
      const { baseUrl, Icon } =
        socialMediaMapper[socialMediaName as AllowedSocialMedias];

      return {
        Icon,
        href: `${baseUrl}/${username}`,
        title: `${socialMediaName} icon`,
      };
    }
  );
  const mostInner = !label;
  const hasMultipleIcons = SocialMediaData.length > 1;

  return (
    <S.Wrapper
      hasMultipleIcons={hasMultipleIcons}
      mostInner={mostInner}
      size={size}
    >
      {!!label && (
        <>
          <S.Label>{label}</S.Label>
          <S.IconsWrapper>
            {SocialMediaData.map(({ Icon, href, title }) => (
              <S.IconWrapper key={href} href={href}>
                <Icon title={title} size={iconsSizesMapper[size]} />
              </S.IconWrapper>
            ))}
          </S.IconsWrapper>
        </>
      )}
      {!label &&
        SocialMediaData.map(({ Icon, href, title }) => (
          <S.IconWrapper key={href} href={href}>
            <Icon title={title} size={iconsSizesMapper[size]} />
          </S.IconWrapper>
        ))}
    </S.Wrapper>
  );
}
