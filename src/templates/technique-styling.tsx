import styled from "@emotion/styled"
import { COLORS } from "../styles/theme"

export const TechList = styled.div`
  // resetting styling
  a {
    border: none;
    padding: 0;
    color: var(--color-text, ${COLORS.text.light});
  }
  a:hover {
    border: none;
    background-color: transparent;
    color: var(--color-text, ${COLORS.text.light});
  }
`

export const DarkBackground = styled.div`
  padding: 2em;
  border-radius: 12px;
  background: var(--color-bg, ${COLORS.bg.light});
  p {
    margin: 0;
  }
`
export const Explanation = styled.div`

  padding: 2em;
  border-radius: 12px;

`