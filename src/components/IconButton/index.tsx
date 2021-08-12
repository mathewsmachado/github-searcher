import * as S from './styles';
import { IconButtonProps } from './types';

export function IconButton({
  children,
  onClick,
  color = 'accent',
  size = 'small',
  minimal = false,
  ...props
}: IconButtonProps) {
  return (
    <S.Wrapper
      onClick={onClick}
      color={color}
      size={size}
      minimal={minimal}
      {...props}
    >
      {children}
    </S.Wrapper>
  );
}
