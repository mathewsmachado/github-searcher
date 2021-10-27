import styled, { css } from 'styled-components';

export const BannerNoteWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    text-align: center;
    font-size: ${theme.font.size.small};
    color: ${theme.color.secondary};
    background-color: ${theme.color.primary};
    border-bottom: 1px solid #46494d;
  `};
`;

const Text = styled.span``;

export type BannerNoteProps = {
  text: string;
};

export function BannerNote({ text }: BannerNoteProps) {
  return (
    <BannerNoteWrapper>
      <Text>{text}</Text>
    </BannerNoteWrapper>
  );
}
