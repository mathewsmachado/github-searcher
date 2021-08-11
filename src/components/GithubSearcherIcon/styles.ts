import styled, { css } from 'styled-components';

import { LineSeparator } from 'components/LineSeparator';

import { GithubSearcherIconProps } from './types';

export const Wrapper = styled.div<GithubSearcherIconProps>`
  ${({ separator }) =>
    separator &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;

      & svg {
        width: 50%;
      }

      ${LineSeparator} {
        width: 50%;
      }
    `};
`;
