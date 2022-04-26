import styled from '@emotion/styled'
import { COLORS } from '../../styles/globalstyles/theme'
import { v, maxq } from '../../styles/globalstyles/variables'
import { Link } from "gatsby"

export const ResultLink = styled(Link)`
  color: var(--color-text, ${COLORS.text.light}) !important;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
export const ResultBlock = styled.div`
  background: var(--color-bg, ${COLORS.bg.light});
  border-radius: ${v.borderRadius};
  padding: calc(${v.smSpacing} * 1.5) ${v.mdSpacing} calc(${v.smSpacing} * 1.5 + 1px) ${v.mdSpacing};
  margin: 0 0 5px 0;
  position: relative;
  transition: 0.3s ease margin;
`
export const ResultContainer = styled.div`
  :hover {
    ${ResultBlock} {
      margin-left: 1em;
      color: var(--color-link, ${COLORS.link.light});
      ${maxq[1]} {
        margin-left: 0;
      }
    }
  }
`
export const MetaContainer = styled.span`
  width: calc(100% - 4.5em);
  ${maxq[1]} {
    width: calc(100% - 4em);
  }
`
export const Title = styled.h4`
  width: calc(100% - 3em);
  ${maxq[1]} {
    width: calc(100% - 2em);
  }
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 0.2em;
`
export const Category = styled.p`
  color: var(--color-placeholder, ${COLORS.placeholder.light});
  text-transform: capitalize;
`
export const Reqs = styled.p`
  color: var(--color-placeholder, ${COLORS.placeholder.light});
  margin-bottom: 0 !important;
`
export const ReqList = styled.span`
  color: var(--color-text, ${COLORS.text.light});
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