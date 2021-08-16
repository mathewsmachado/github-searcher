import * as S from './styles';

type ButtonProps = Omit<S.WrapperProps, 'isChildrenText'>;

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
