import * as S from './styles';

type Props = Omit<S.Props, 'isChildrenText'>;

function Button({
  children,
  color = 'accent',
  size = 'small',
  minimal = false,
  ...props
}: Props) {
  return (
    <S.Wrapper
      color={color}
      size={size}
      minimal={minimal}
      isChildrenText={typeof children === 'string'}
      {...props}
    >
      {children}
    </S.Wrapper>
  );
}

export { Button };
export type { Props as ButtonProps };
