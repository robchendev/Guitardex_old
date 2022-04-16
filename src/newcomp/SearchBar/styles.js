import styled from '@emotion/styled'
import { COLORS } from '../../styles/theme'
import { v, maxq } from '../../styles/variables'
import { Link } from "gatsby"

export const Search = styled.div`
  background: var(--color-bg, ${COLORS.bg.light});
  border: 1px solid var(--color-bg3, ${COLORS.bg3.light});
  border-radius: ${v.borderRadius};
  display: flex;
  margin-bottom: 1em;
  input {
    padding: 0 ${v.smSpacing} 0 0;
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    background: transparent;
  }
`
export const ResultLink = styled(Link)`
  color: var(--color-text, ${COLORS.text.light}) !important;
`
export const ResultBlock = styled.div`
  background: var(--color-bg, ${COLORS.bg.light});
  border-radius: ${v.borderRadius};
  padding: calc(${v.smSpacing} * 1.5) ${v.mdSpacing};
  margin: 0 0 5px 0;
  position: relative;
  transition: 0.3s ease margin;
  :hover {
    margin-left: 1em;
    color: var(--color-link, ${COLORS.link.light});
    ${maxq[1]} {
      margin-left: 0;
    }
  }
`
export const MetaContainer = styled.div`
  width: calc(100% - 4.5em);
  ${maxq[1]} {
    width: calc(100% - 4em);
  }
`
export const Title = styled.h4`
  margin-bottom: 0.1em;
`
export const Category = styled.p`
  color: ${COLORS.placeholder};
  text-transform: capitalize;
`
export const SaveContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 ${v.borderRadius} ${v.borderRadius} 0;
  height: 100%;
  width: 4.5em;
  ${maxq[1]} {
    width: 4em;
  }
`