import { IconType } from 'react-icons';

export type AllowedSocialMedias = 'github' | 'linkedin' | 'twitter';
type AllowedSizes = 'medium' | 'xlarge';

export type IconsSizeMapper = Record<AllowedSizes, number>;

type SocialMediaMapperItem = {
  baseUrl: string;
  Icon: IconType;
};

export type SocialMediaMapper = Record<
  AllowedSocialMedias,
  SocialMediaMapperItem
>;

export type SocialMediaIconsProps = {
  usernames: Partial<Record<AllowedSocialMedias, string>>;
  label?: string;
  size?: AllowedSizes;
};

export type WrapperProps = Required<Pick<SocialMediaIconsProps, 'size'>>;

export type IconsWrapperProps = {
  hasMultipleIcons: boolean;
};
