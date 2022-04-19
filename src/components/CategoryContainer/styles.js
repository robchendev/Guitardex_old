import styled from '@emotion/styled';
import { v } from '../../styles/globalstyles/variables';
import { COLORS } from '../../styles/globalstyles/theme';

export const CContainer = styled.span`
  text-transform: capitalize;
  padding-bottom: 1px;
  border-radius: calc(${v.borderRadius} / 2);
  color: var(--color-placeholder, ${COLORS.placeholder.light});
`