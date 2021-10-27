import styled, { css } from 'styled-components';

export const UpperWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    gap: 6rem;

    ${theme.media.below('medium')`
      flex-direction: column;
      align-items: flex-start;
      gap: 4rem;
    `};
  `};
`;

export const BottomWrapper = styled.div`
  margin-top: 4rem;
  width: 100%;
  height: 100%;
`;
