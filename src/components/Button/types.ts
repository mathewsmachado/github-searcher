import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  onClick: () => void;
  color?: 'primary' | 'accent';
  size?: 'small' | 'medium' | 'large';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type WrapperProps = Pick<ButtonProps, 'color' | 'size'>;
