// @ts-nocheck
import styled, { css } from 'styled-components';
import { IconBaseProps } from 'react-icons';

import { VsButtonWrapper } from 'components/VsButton';
import { CardWrapper } from 'components/Card';

export const CardResultWrapper = styled.div<Props>`
  max-width: 65rem;

  ${CardWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    ${theme.media.below('small')`
      ${VsButtonWrapper} {
        display: none;
      }
    `};
  `};
`;

export const ArrowIcon = styled.div<IconBaseProps>`
  ${({ theme }) => css`
    & > * {
      fill: ${theme.color.accent};
      width: 6rem;
      height: 6rem;
      cursor: pointer;
      margin-left: 0.5rem;
    }
  `};
`;
