// @ts-nocheck
import styled, { css } from 'styled-components';

export type Props = {
  isOpen: boolean;
};

export const MenuHeight = '5.8rem';
const sideSpace = { large: '4rem', small: '2rem' };

export const MenuWrapper = styled.menu<Props>`
  ${({ theme, isOpen }) => css`
    height: ${MenuHeight};
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 1.4rem ${sideSpace.large} 1rem;
    background-color: ${theme.color.primary};
    border-bottom: 0.2rem solid ${theme.color.accent};
    transition: all ${theme.transition.fast};

    ${theme.media.below('small')`
      padding: 1.4rem ${sideSpace.small} 1rem;
    `}

    ${isOpen && modifiers.open()}
  `};
`;

export const OpenClose = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: ${sideSpace.large};
    opacity: 0;

    ${theme.media.below('large')`
      opacity: 1;
      z-index: ${theme.layer.overlay};
      cursor: pointer;
    `};

    ${theme.media.below('small')`
      right: ${sideSpace.small};
    `}
  `};
`;

export const RightSide = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    transition: transform ${theme.transition.default}, opacity 0.5s ease-in-out;

    ${theme.media.below('large')`
      width: 50%;
      height: 100vh;
      z-index: ${theme.layer.menu};
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      top: 0;
      right: 0;
      left: -999rem;
      transform: translateX(100%);
      opacity: 0;
      padding: 2rem 0;
      background-color: ${theme.color.primary};
      box-shadow: 0 0 3rem 0 rgba(0, 0, 0, 0.3);
    `};

    ${theme.media.below('medium')`
      width: 70%;
    `};

    ${theme.media.below('small')`
      width: 100%;
    `};
  `};
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    margin-right: 2rem;

    ${theme.media.below('large')`
      margin-right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `};
  `};
`;

export const NavItem = styled.a`
  ${({ theme }) => css`
    margin-right: ${theme.spacing.medium};
    font-size: ${theme.font.size.xsmall};
    color: ${theme.color.secondary};
    transition: color ${theme.transition.fast};

    &:hover {
      color: ${theme.color.accent};
    }

    ${theme.media.below('large')`
      margin-right: 0;
      margin-top: 4rem;
    `};
  `};
`;

const modifiers = {
  open: () => css`
    ${RightSide} {
      left: unset;
      transform: translateX(0%);
      opacity: 1;
    }
  `,
};
