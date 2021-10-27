import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

import { Button, ButtonProps, Spinner } from 'app/components';

export type ButtonSearchProps = ButtonProps & {
  loading?: boolean;
};

const ButtonWrapper = styled(Button)`
  flex-shrink: 0;
  margin-left: 2rem;

  & svg {
    color: white;
  }
`;

export function ButtonSearch({ loading = false, ...props }: ButtonSearchProps) {
  return (
    <ButtonWrapper color='accent' size='small' disabled={loading} {...props}>
      {!loading && <BiSearch size='20' title='magnifying glass icon' />}
      {!!loading && <Spinner color='secondary' size='xsmall' />}
    </ButtonWrapper>
  );
}
