import styled from "@emotion/styled"
import { COLORS } from "../styles/theme"
import { maxq, minq } from "../styles/variables"

export const TechList = styled.div`
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
  padding: 1em;
  border-radius: 12px;
  background: var(--color-bg, ${COLORS.bg.light});
  p {
    margin: 0;
  }

`
export const Explanation = styled.div`

  padding: 1.5em 0;
  border-radius: 12px;
  ${maxq[1]} {
    padding: 1.5em 0;
  }
`
export const VideoContainer = styled.div`
  
`