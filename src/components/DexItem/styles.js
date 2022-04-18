import styled from '@emotion/styled';
import { v, maxq } from '../../styles/globalstyles/variables';
import { COLORS } from '../../styles/globalstyles/theme';

export const DexResultBlock = styled.div`
  background: var(--color-bg, ${COLORS.bg.light});
  border-radius: ${v.borderRadius};
  padding: calc(${v.smSpacing} * 1.5) ${v.mdSpacing};
  position: relative;
  transition: 0.3s ease margin;
`
export const DexResultContainer = styled.div`
  :hover {
    ${DexResultBlock} {
      margin-left: 1em;
      color: var(--color-link, ${COLORS.link.light});
      ${maxq[1]} {
        margin-left: 0;
      }
    }
  }
`
export const DexMetaContainer = styled.span`
  width: calc(100% - 4.5em);
  ${maxq[1]} {
    width: calc(100% - 3.5em);
  }
`
export const MetaInfo = styled.div`
  color: var(--color-text, ${COLORS.text.light});
  
  :hover {
    color: var(--color-link, ${COLORS.link.light}) !important;
  }
  h4 {
    width: calc(100% - 3em);
    ${maxq[1]} {
      width: calc(100% - 2em);
    }
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0.1em;
  }
  p {
    color: ${COLORS.placeholder};
    text-transform: capitalize;
  }
`
