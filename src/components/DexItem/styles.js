import styled from '@emotion/styled';
import { v, maxq } from '../../styles/globalstyles/variables';
import { COLORS } from '../../styles/globalstyles/theme';



export const MetaInfo = styled.div`
  padding: calc(${v.smSpacing} * 1.5) ${v.mdSpacing};
  color: var(--color-text, ${COLORS.text.light});
  width: calc(100% - 4.5em);
  ${maxq[1]} {
    width: calc(100% - 3.5em);
  } 
  :hover {
    color: var(--color-link, ${COLORS.link.light}) !important;
  }
  h4 {

    margin-bottom: 0.1em;
  }
  p {
    color: ${COLORS.placeholder};
    text-transform: capitalize;
  }
`