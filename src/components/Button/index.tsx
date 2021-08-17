import * as S from './styles';

type Props = Omit<S.Props, 'isChildrenText'>;

export function Button({
  children,
  onClick,
  color = 'accent',
  size = 'small',
  minimal = false,
  ...props
}: Props) {
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
