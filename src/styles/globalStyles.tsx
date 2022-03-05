import { createGlobalStyle } from "styled-components"
import {
  COLORS,
  SIDEBAR,
} from "../styles/theme"

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--color-bg2, ${COLORS.bg2.light});
    color: var(--color-text, ${COLORS.text.light});
    font-family: 'Roboto', sans-serif;
    letter-spacing: .6px;
  }
`