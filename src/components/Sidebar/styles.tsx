import styled from "styled-components"
import { btnReset, v, m } from "../../styles/variables" 
import {
  COLORS,
  SIDEBAR,
} from "../../styles/theme"

export const SSidebar = styled.div`
  width: var(--sidebar-width, ${SIDEBAR.width.open});
  background: var(--color-bg, ${COLORS.bg.light});
  height: 100vh;
  padding: ${v.lgSpacing};

  position: relative;
`

export const SSidebarButton = styled.button`
  ${btnReset};
  position: absolute;

  top: ${v.xxlSpacing};
  right: ${({ isOpen }) => (!isOpen ? `-20px` : `20px`)};
  font-size: ${m.menuToggleSize};

  display: flex;
  width: 40px;
  height: 40px;
  border-radius: ${v.borderRadius};
  background: var(--color-bg, ${COLORS.bg.light});

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: transform 0.8s;
  transform: ${({ isOpen }) => !isOpen ? `rotateY(180deg)` : `initial`};

  box-shadow: inset 0 0 0 1px var(--color-bg3, ${COLORS.bg3.light});

  
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