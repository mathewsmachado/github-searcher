import styled from 'styled-components';

import { Button, ButtonProps } from 'components/Button';
import { Vs } from 'components/Vs';

const VsWrapper = styled.span`
  width: 100%;
  padding: 0.5rem 0.3rem 0;
`;

function VsButton({
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

export { VsButton };
export { Button as VsButtonWrapper };
