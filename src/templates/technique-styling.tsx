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
  ol, ul {
    margin-left: 2em;
    margin-bottom: 1em;
    li {
      margin: 5px 0;
      line-height: 1.5em;
    }
    ${maxq[1]} {
      margin-left: 1em;
    }
  }
  p:last-child {
    padding-bottom: 1em;
  }
  h3:not(first-child),h4:not(first-child) {
    padding-top: 0.5em;
  }

`
export const VideoContainer = styled.div`
  margin-bottom: 0.5em;
`