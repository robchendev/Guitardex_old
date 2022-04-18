import styled from "@emotion/styled"
import { COLORS } from "../styles/globalstyles/theme"
import { v, maxq } from "../styles/globalstyles/variables"

export const EmbedContainer = styled.div`
  border-radius: ${v.borderRadius};
  overflow: hidden;
  position: relative;
`
export const HeadingContainer = styled.div`
  background: var(--color-bg, ${COLORS.bg.light});
  padding: ${v.mdSpacing};
  border-radius: calc(${v.borderRadius} * 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin-top: -0.2em;
    margin-bottom: 0.1em;
    justify-content: start;
  }
  span {
    margin-bottom: 0.1em;
  }
  margin-bottom: 1.5em;
`
export const PageHeader = styled.div`
  margin-bottom: 0.25em;
`
export const TechniqueName = styled.h2`
  margin-bottom: 0;
`
export const PreRequisites = styled.div`
  margin-bottom: 0.5em;
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
  background-color: var(--color-bg2, ${COLORS.bg2.light});
  border: 2px solid var(--color-bg3, ${COLORS.bg3.light});
  border-radius: ${v.borderRadius};

  margin-top: 0.2em;
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
  padding: ${v.mdSpacing};
  border-radius: calc(${v.borderRadius} * 2);
  background: var(--color-bg, ${COLORS.bg.light});
  p {
    margin: 0;
  }
`
export const Explanation = styled.div`
  padding: 1.5em 0;
  border-radius: calc(${v.borderRadius} * 2);
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