import { IconType } from 'react-icons';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

import { SOCIAL_MEDIAS } from 'core/constants';

import * as S from './styles';

type AllowedSocialMedias = 'github' | 'linkedin' | 'twitter';

type SocialMediaMapperItem = {
  baseUrl: string;
  Icon: IconType;
};

export type SocialMediaIconsProps = Pick<S.Props, 'size'> & {
  usernames: Partial<Record<AllowedSocialMedias, string>>;
  label?: string;
};

const iconsSizesMapper: Record<S.AllowedSizes, number> = {
  medium: 20,
  xlarge: 40,
};

const socialMediaMapper: Record<AllowedSocialMedias, SocialMediaMapperItem> = {
  twitter: { baseUrl: SOCIAL_MEDIAS.TWITTER.BASE_URL, Icon: AiOutlineTwitter },
  linkedin: { baseUrl: SOCIAL_MEDIAS.LINKEDIN.BASE_URL, Icon: FaLinkedinIn },
  github: { baseUrl: SOCIAL_MEDIAS.GITHUB.BASE_URL, Icon: AiFillGithub },
};

export function SocialMediaIcons({
  usernames,
  label,
  size = 'xlarge',
}: SocialMediaIconsProps) {
  const SocialMediaData = Object.entries(usernames || {})
    .filter(([, username]) => !!username)
    .map(([socialMediaName, username]) => {
      const { baseUrl, Icon } =
        socialMediaMapper[socialMediaName as AllowedSocialMedias];

      return {
        Icon,
        href: `${baseUrl}/${username}`,
        title: `${socialMediaName} icon`,
      };
    });

  return (
    <S.SocialMediaIconsWrapper
      hasMultipleIcons={SocialMediaData.length > 1}
      mostInner={!label}
      size={size}
    >
      {!!label && (
        <>
          <S.Label>{label}</S.Label>
          <S.IconsWrapper>
            {SocialMediaData.map(({ Icon, href, title }) => (
              <S.IconWrapper key={href} href={href} target='_blank'>
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
    </S.SocialMediaIconsWrapper>
  );
}

export { SocialMediaIconsWrapper } from './styles';
