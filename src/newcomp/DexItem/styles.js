import styled from '@emotion/styled';
import { v, maxq } from '../../styles/variables';
import { COLORS } from '../../styles/theme';

export const MetaInfo = styled.div`
  padding: calc(${v.smSpacing} * 1.5) ${v.mdSpacing} !important;
  color: var(--color-text, ${COLORS.text.light}) !important;
  background-color: transparent !important;
  width: calc(100% - 4.5em);
  ${maxq[1]} {
    width: calc(100% - 3.5em);
  } 
  :hover {
    border: none !important;
    background-color: transparent !important;
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