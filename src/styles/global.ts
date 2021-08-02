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

  a:focus,
  input:focus,
  button:focus {
    outline: 0.1rem solid ${theme.color.accent};
  }

  a {
    text-decoration: none;
    position: relative;
    color: ${theme.color.primary};
    transition: ${theme.transition.fast};
  }

  a:hover {
    color: ${theme.color.accent};
  }

  a:after {
    content: '';
    position: absolute;
    top: 100%;
    bottom: -10%;
    left: 1%;
    right: 1%;
    background-color: ${theme.color.accent};
    transition: ${theme.transition.fast};
  }

  a:hover:after {
    margin-bottom: 20%;
  }
`}
`;
