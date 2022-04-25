import styled from '@emotion/styled'
import { COLORS } from '../../styles/globalstyles/theme'
import { btnReset, v } from '../../styles/globalstyles/variables'

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
    color: var(--color-text, ${COLORS.text.light});
    ::placeholder {
      color: var(--color-placeholder, ${COLORS.placeholder.light});
    }
  }
`
export const SearchIcon = styled.button`
  ${btnReset};
  padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
  display: flex;
  svg {
    font-size: 20px;
  }
`