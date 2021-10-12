import styled, { css } from 'styled-components';

import { CREATOR, DATE } from 'core/constants';
import { SocialMediaIcons } from 'app/components';

export const FooterHeight = '4rem';

export const FooterWrapper = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: ${FooterHeight};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${theme.spacing.xxlarge};
    background-color: ${theme.color.primary};

    ${theme.media.below('small')`
      padding: 0 1rem;
    `};
  `};
`;

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.size.xsmall};
    font-weight: ${theme.font.weight.medium};
    color: ${theme.color.secondary};
  `};
`;

export const IconsWrapper = styled.div`
  margin-top: 0.6rem;
  width: 9rem;
`;

export function Footer() {
  return (
    <FooterWrapper>
      <Text>
        {CREATOR.NAME}, {DATE.CURRENT_YEAR}
      </Text>
      <IconsWrapper>
        <SocialMediaIcons
          size='medium'
          usernames={{ github: CREATOR.USERNAME, linkedin: CREATOR.USERNAME }}
        />
      </IconsWrapper>
    </FooterWrapper>
  );
}
