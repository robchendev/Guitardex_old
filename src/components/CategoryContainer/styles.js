import styled from '@emotion/styled';
import { v } from '../../styles/globalstyles/variables';
import { COLORS } from '../../styles/globalstyles/theme';

export const CContainer = styled.span`
  text-transform: lowercase;
  padding: 0 3px 1px 3px;
  border-radius: calc(${v.borderRadius} / 2);
  color: ${COLORS.buttonText};
  background: var(--color-category, ${COLORS.category.light});
`