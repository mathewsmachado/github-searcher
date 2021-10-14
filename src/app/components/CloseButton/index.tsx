import styled, { css } from 'styled-components';
import { IoMdClose } from 'react-icons/io';

import { Button, ButtonWrapper, ButtonProps } from 'app/components/Button';

export type CloseButtonProps = ButtonProps;

const CloseButtonWrapper = styled(ButtonWrapper)<CloseButtonProps>`
  ${({ theme, color, minimal }) => css`
    & > svg {
      width: 100%;
      height: 100%;
      color: ${theme.color[minimal ? color! : 'secondary']};
    }
  `};
`;

export function CloseButton({
  color = 'accent',
  minimal = false,
  ...props
}: CloseButtonProps) {
  return (
    <CloseButtonWrapper color={color} minimal={minimal} {...props}>
      <IoMdClose title='Close icon' />
    </CloseButtonWrapper>
  );
}

export { Button as CloseButtonWrapper };
