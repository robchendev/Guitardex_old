import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    font-family: 'Roboto', sans-serif;
    letter-spacing: .6px;
  }
`