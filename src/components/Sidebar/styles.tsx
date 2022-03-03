import styled from "styled-components"
import { btnReset, v, m } from "../../styles/variables" 

export const SSidebar = styled.div`
  width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
  background: ${({ theme }) => theme.bg};
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
  background: ${({ theme }) => theme.bg};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  //transition: transform 0.8s;
  transform: ${({ isOpen }) => !isOpen ? `rotateY(180deg)` : `initial`};

  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};

  
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
  background: ${({ theme }) => theme.bgAlpha};
  border: 1px solid ${({ theme }) => theme.bg3};
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