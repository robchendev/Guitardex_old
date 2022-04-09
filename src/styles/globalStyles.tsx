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
    overflow-y: scroll;
    font-size: 1rem;
  }
  button {
    font-family: 'Fredoka', sans-serif;
    font-size: 1rem;
  }
  h1,h2,h3,h4,h5,h6,strong {

    font-weight: 500;

    margin-bottom: 0.6em;
  }
  h1 {
    font-size: 30px;
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
  }
  h2 {
    font-size: 1.6rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  h4 {
    font-size: 1.2rem;
  }
  p {
    line-height: 1.5em;
    :not(:last-child) {
      margin-bottom: 1em;
    }
  }
  
  .yt-lite::after {
    content: "";
    display: block;
    padding-bottom: calc(100% / (16 / 9));
  }
`