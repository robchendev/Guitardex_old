import styled from "@emotion/styled"
import { COLORS } from "../styles/globalstyles/theme"
import { v, maxq } from "../styles/globalstyles/variables"

export const EmbedContainer = styled.div`
  border-radius: ${v.borderRadius};
  overflow: hidden;
  position: relative;
`
export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  h2 {
    margin-bottom: 0.1em;
  }
  margin: 0 !important;
`
export const PageHeader = styled.div`
  margin-bottom: 1em;
`
export const TechniqueName = styled.h2`
  margin-bottom: 0;
`
export const ExerciseLinks = styled.ul`
  margin-bottom: 0.5em;
  li {
    display: flex;
    align-items: center;
    margin: 5px 0;
  }
`
export const EntireWrapper = styled.div`
  .ttEdit {
    padding: 3px 6px 4px 6px;
    background-color: var(--color-text, ${COLORS.text.light});
    color: var(--color-ttText, ${COLORS.ttText.light});
    opacity: 1 !important;
    font-size: 1rem;
    max-width: 13em;
    text-align: center;
    transition: none;
  }
`
export const SaveContainer = styled.div`
  top: 0;
  right: 0;
  border-radius: 0 ${v.borderRadius} ${v.borderRadius} 0;
  height: 3.5em;
  width: 3.5em;
`
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