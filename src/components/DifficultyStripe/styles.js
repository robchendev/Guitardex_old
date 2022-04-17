import styled from '@emotion/styled';
import { v } from '../../styles/globalstyles/variables';
import { COLORS } from '../../styles/globalstyles/theme';

export const DStripe = styled.span`
  position: absolute;
  height: 100%;
  background: ${({ diffColor }) => (diffColor)};
  width: 0.4em;
  margin: -0.75em 0 0 -1em;
  border-radius: ${v.borderRadius} 0 0 ${v.borderRadius};
`

export const DContainer = styled.span`
  padding: 0 3px 1px 3px;
  border-radius: calc(${v.borderRadius} / 2);
  color: white;
  background: ${({ diffColor }) => (diffColor)};
`
