import styled from '@emotion/styled';
import { v } from '../../styles/globalstyles/variables';

export const DContainer = styled.span`
  text-transform: lowercase;
  padding: 0 3px 1px 3px;
  border-radius: calc(${v.borderRadius} / 2);
  color: white;
  background: ${({ diffColor }) => (diffColor)};
`
