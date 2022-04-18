import styled from "@emotion/styled"
import { COLORS } from "../globalstyles/theme"

export const LogRender = styled.div`
  h4 {
    margin-bottom: 0;
  }
  p {
    color: var(--color-text, ${COLORS.text.light});
    opacity: 0.9;
  }
  margin-bottom: 1em;
  :not(:last-child) {
    border-bottom: 1px solid var(--color-bg3, ${COLORS.bg3.light});
  }
`
export const ItemList = styled.ul`
  padding-bottom: 1em;
  li {
    margin: 5px 0 5px 1em;
  }
  transition: 0.3s ease padding;
`
export const PlansIssuesRender = styled.div`
  margin-bottom: 1em;
`