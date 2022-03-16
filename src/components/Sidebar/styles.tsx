import styled from "@emotion/styled"
import { btnReset, v, maxq, minq } from "../../styles/variables"
import { COLORS } from "../../styles/theme"

export const SSidebar = styled.div`
  min-width: ${v.sidebarWidth};
  width: ${v.sidebarWidth};
  background: var(--color-bg, ${COLORS.bg.light});
  border-radius: calc(${v.borderRadius} * 4);
  box-shadow: 0 0 10px ${COLORS.bgAlpha.dark};
  padding: ${v.lgSpacing};
  font-family: 'Fredoka', sans-serif;
  position: relative;
  width: 25%;
  pointer-events: auto;
  display: block;
  ${maxq[1]} {
    display: none;
  }
`

export const SLogo = styled.div`
  width: 52px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
  }
  cursor: pointer;

  margin-bottom: ${v.lgSpacing};
`

export const SSearch = styled.div`
  background: var(--color-bgAlpha, ${COLORS.bgAlpha.light});
  border: 1px solid var(--color-bg3, ${COLORS.bg3.light});
  border-radius: ${v.borderRadius};
  input {
    padding: 0 ${v.smSpacing} 0 0;
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

  svg {
    font-size: 20px;
  }
`