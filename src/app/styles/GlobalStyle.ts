import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.font.family.primary}, ${theme.font.family.default};
  }

  html {
    font-size: 62.5%;
  }

  img {
    max-width: 100%;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`}
`;
