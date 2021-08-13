import * as S from './styles';
import { ButtonProps } from './types';

export function Button({
  children,
  onClick,
  color = 'accent',
  size = 'small',
  minimal = false,
  ...props
}: ButtonProps) {
  const isChildrenText = typeof children === 'string';

  return (
    <S.Wrapper
      onClick={onClick}
      color={color}
      size={size}
      minimal={minimal}
      isChildrenText={isChildrenText}
      {...props}
    >
      {children}
    </S.Wrapper>
  );
}
