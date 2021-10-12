import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

import { Button, ButtonProps } from 'app/components';

export type ButtonSearchProps = ButtonProps;

const ButtonWrapper = styled(Button)`
  flex-shrink: 0;
  margin-left: 2rem;

  & svg {
    color: white;
  }
`;

export function ButtonSearch({ ...props }: ButtonSearchProps) {
  return (
    <ButtonWrapper color='accent' size='small' {...props}>
      <BiSearch size='20' title='magnifying glass icon' />
    </ButtonWrapper>
  );
}
