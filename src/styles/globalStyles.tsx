import { COLORS } from "../styles/theme"
import { css } from '@emotion/react'

export const globalStyle = css`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--color-bg2, ${COLORS.bg2.light});
    color: var(--color-text, ${COLORS.text.light});
    font-family: 'Fredoka', sans-serif;
    letter-spacing: .6px;
  }
  h1 {
    font-size: 30px;
  }
  h2 {
    font-family: 'Fredoka', sans-serif;
    font-weight: 500;
  }
`