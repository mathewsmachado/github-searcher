import { IconType } from 'react-icons';

type AllowedSocialMedias = 'github' | 'linkedin' | 'twitter';
type AllowedSizes = 'medium' | 'xlarge';

export type SocialMedia = {
  name: AllowedSocialMedias;
  baseUrl: string;
  Icon: IconType;
};

export type ComponentData = {
  iconsSizes: Partial<Record<AllowedSizes, number>>;
  socialMedias: SocialMedia[];
};

export type SocialMediaIconsProps = {
  usernames: Partial<Record<AllowedSocialMedias, string>>;
  label?: string;
  size?: AllowedSizes;
};

export type WrapperProps = Required<Pick<SocialMediaIconsProps, 'size'>>;

export type IconsWrapperProps = {
  hasMultipleIcons: boolean;
};
