import styled from 'styled-components';

import { Button, ButtonProps } from 'components/Button';
import { Vs } from 'components/Vs';

export const VsWrapper = styled.span`
  width: 100%;
  padding: 0.5rem 0.3rem 0;
`;

export function VsButton({
  color = 'accent',
  minimal = false,
  ...props
}: ButtonProps) {
  return (
    <Button color={color} minimal={minimal} {...props}>
      <VsWrapper>
        <Vs color={minimal ? color : 'secondary'} />
      </VsWrapper>
    </Button>
  );
}

export { Button as VsButtonWrapper };
