export type LogoProps = {
  size?: 'small' | 'medium' | 'large';
  githubColor?: 'primary' | 'secondary';
};

export type ComponentsProps = Pick<LogoProps, 'size'>;
