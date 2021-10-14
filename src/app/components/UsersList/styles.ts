// @ts-nocheck
import styled, { css } from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { CardWrapper } from 'app/components';

export const UsersListWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    ${theme.media.below('large')`
      justify-content: center;
    `};
  `};
`;

export const UserWrapper = styled(CardWrapper)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 48%;
    margin: 1%;

    ${theme.media.below('large')`
      width: 60%;
      margin: 1% 0;
    `};

    ${theme.media.below('medium')`
      width: 80%;
    `};

    ${theme.media.below('small')`
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

    ${theme.media.below(28)`
      display: none;
    `};
  `};
`;
