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
    overflow: scroll;
  }
  h1,h2,h3,h4,h5,h6,strong {
    font-weight: 500;
    margin-bottom: 1em;
  }
  h1 {
    font-size: 30px;
  }
  p:not(:last-child) {
    line-height: 1.5em;
    margin-bottom: 1em;
  }
  .yt-lite::after {
    content: "";
    display: block;
    padding-bottom: calc(100% / (16 / 9));
  }
  
`