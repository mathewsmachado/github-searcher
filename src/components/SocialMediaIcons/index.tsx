import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

import * as S from './styles';
import { ComponentData, SocialMedia, SocialMediaIconsProps } from './types';

const COMPONENT_DATA: ComponentData = {
  iconsSizes: {
    medium: 20,
    xlarge: 40,
  },
  socialMedias: [
    {
      name: 'twitter',
      baseUrl: 'https://twitter.com',
      Icon: AiOutlineTwitter,
    },
    {
      name: 'linkedin',
      baseUrl: 'https://www.linkedin.com/in',
      Icon: FaLinkedinIn,
    },
    {
      name: 'github',
      baseUrl: 'https://www.github.com',
      Icon: AiFillGithub,
    },
  ],
};

export function SocialMediaIcons({
  usernames,
  label,
  size = 'xlarge',
}: SocialMediaIconsProps) {
  const iconSize = COMPONENT_DATA.iconsSizes[size];
  const socialMedias = COMPONENT_DATA.socialMedias
    .map((media) => usernames[media.name] && media)
    .filter(Boolean) as SocialMedia[];
  const hasMultipleIcons = socialMedias.length > 1;

  return (
    <S.Wrapper size={size}>
      {!!label && <S.Label>{label}</S.Label>}

      <S.IconsWrapper hasMultipleIcons={hasMultipleIcons}>
        {socialMedias.map(({ name, baseUrl, Icon }) => {
          const link = `${baseUrl}/${usernames[name]}`;
          const title = `${name} icon`;

          return (
            <S.IconWrapper key={baseUrl} href={link}>
              <Icon title={title} size={iconSize} />
            </S.IconWrapper>
          );
        })}
      </S.IconsWrapper>
    </S.Wrapper>
  );
}
