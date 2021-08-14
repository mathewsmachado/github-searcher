import { InputHTMLAttributes } from 'react';

export type InputProps = {
  icon?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;
