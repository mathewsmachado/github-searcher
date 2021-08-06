import * as S from './styles';
import { ButtonProps } from './types';

export function Button({
  children,
  onClick,
  color = 'primary',
  size = 'large',
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper onClick={onClick} color={color} size={size} {...props}>
      {children}
    </S.Wrapper>
  );
}
