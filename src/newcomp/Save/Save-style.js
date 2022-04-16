import styled from '@emotion/styled'
import { COLORS } from '../../styles/theme'
import { v } from '../../styles/variables'

export const SaveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 8px;
  border: none;
  background: var(--color-bg, ${COLORS.bg.light});
  border-radius: ${v.borderRadius};
  margin-bottom: ${v.mdSpacing};
  cursor: pointer;
`
export const UnChecked = styled.div`
  font-size: 30px;
  color: var(--color-checkMarkBorder, ${COLORS.checkMarkBorder.light});
  :hover {
    color: var(--color-link, ${COLORS.link.light});
  }
`
export const Checked = styled.div`
  margin-top: -2px;
  font-size: 24px;
  color: var(--color-link, ${COLORS.link.light});
  :hover {
    color: var(--color-checkMarkBorder, ${COLORS.checkMarkBorder.light});
  }
`