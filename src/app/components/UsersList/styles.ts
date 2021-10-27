// @ts-nocheck
/* eslint-disable  */

import styled, { css } from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { CardWrapper } from 'app/components';

export const UsersListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

export const UserWrapper = styled(CardWrapper)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 48.9%;

    ${theme.media.below('large')`
      width: 100%;
    `};
  `};
`;

export const ArrowIcon = styled(MdKeyboardArrowRight)`
  ${({ theme }) => css`
    fill: ${theme.color.accent};
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    margin-left: 0.5rem;
  `};
`;
