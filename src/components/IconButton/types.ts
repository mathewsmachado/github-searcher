import { ButtonHTMLAttributes } from 'react';

export type IconButtonProps = {
  children: JSX.Element;
  onClick: () => void;
  color?: 'primary' | 'accent';
  size?: 'small' | 'medium' | 'large';
  minimal?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type WrapperProps = Exclude<IconButtonProps, 'children'>;
