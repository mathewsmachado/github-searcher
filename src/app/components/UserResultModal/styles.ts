import styled, { css } from 'styled-components';

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing.small} 0;
  `};
`;

export const StatusWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem;

    ${theme.media.below('small')`
      padding: 4rem 1rem;
    `};
  `};
`;
