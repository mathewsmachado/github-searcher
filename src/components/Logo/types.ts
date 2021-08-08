type AllowedColors = 'primary' | 'secondary';

type SvgMapperItem = { src: string; alt: string };

export type SvgMapper = Record<AllowedColors, SvgMapperItem>;

export type LogoProps = {
  size?: 'small' | 'medium' | 'large';
  githubColor?: AllowedColors;
};

export type ComponentsProps = Pick<LogoProps, 'size'>;
