import { IconType } from 'react-icons';

type AllowedSocialMedias = 'github' | 'linkedin' | 'twitter';
type Usernames = Partial<Record<AllowedSocialMedias, string>>;

type AllowedSizes = 'medium' | 'xlarge';
type IconsSizes = Partial<Record<AllowedSizes, number>>;

export type SocialMedia = {
  name: AllowedSocialMedias;
  baseUrl: string;
  Icon: IconType;
};

export type ComponentData = {
  iconsSizes: IconsSizes;
  socialMedias: SocialMedia[];
};

export type SocialMediaIconsProps = {
  usernames: Usernames;
  label?: string;
  size?: AllowedSizes;
};

export type WrapperProps = Required<Pick<SocialMediaIconsProps, 'size'>>;

export type IconsWrapperProps = {
  hasMultipleIcons: boolean;
};
