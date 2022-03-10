import styled from "@emotion/styled"
import { btnReset, v, m } from "../../styles/variables" 
import { COLORS } from "../../styles/theme"

export const SSidebar = styled.div`
  min-width: ${v.sidebarWidth};
  width: ${v.sidebarWidth};
  background: var(--color-bg, ${COLORS.bg.light});
  height: 100vh;
  padding: ${v.lgSpacing};
  font-family: 'Fredoka', sans-serif;
  position: relative;
`

export const SLogo = styled.div`
  width: 52px;

  img {
    max-width: 100%;
    height: auto;
  }
  cursor: pointer;

  margin-bottom: ${v.lgSpacing};
`

export const SSearch = styled.div`
  background: var(--color-bgAlpha, ${COLORS.bgAlpha.light});
  border: 1px solid var(--color-bg3, ${COLORS.bg3.light});
  border-radius: ${v.borderRadius};
  input {
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
`

export const SSearchIcon = styled.button`
  ${btnReset};
  padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
  display: flex;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
`