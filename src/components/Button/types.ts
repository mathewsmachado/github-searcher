import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  onClick: () => void;
  color?: 'primary' | 'accent';
  size?: 'small' | 'medium' | 'large';
  minimal?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type WrapperProps = {
  isChildrenText: boolean;
} & ButtonProps;
