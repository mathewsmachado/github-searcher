// @ts-nocheck
import styled, { css } from 'styled-components';

import { Card } from 'components/Card';
import { CloseButtonWrapper } from 'components/CloseButton';

export const Wrapper = styled(Card)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 12rem;
    box-shadow: 0rem 1rem 1rem -0.5rem rgba(255, 0, 127, 0.3);

    &:active {
      box-shadow: 0rem 1rem 1rem -0.5rem rgba(255, 0, 127, 0.3);
    }

    ${CloseButtonWrapper} {
      flex-shrink: 0;
    }

    ${theme.media.below('medium')`
      justify-content: center;
      padding: 5rem 1rem;

      ${CloseButtonWrapper} {
        display: none;
      }
    `};
  `};
`;

export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.accent};
    font-size: ${theme.font.size.xhuge};
    font-weight: ${theme.font.weight.xbold};
    text-align: center;

    ${theme.media.below('large')`
      font-size: ${theme.font.size.xlarge};
    `};
  `};
`;
