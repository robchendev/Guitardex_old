import styled from "@emotion/styled"
import { btnReset, v, maxq } from "../../styles/variables"
import { COLORS } from "../../styles/theme"

export const SSidebar = styled.div`
  min-width: ${v.sidebarWidth};
  width: ${v.sidebarWidth};
  background: var(--color-bg, ${COLORS.bg.light});
  border-radius: calc(${v.borderRadius} * 2);
  box-shadow: 0 0 4px ${COLORS.bgAlpha.dark};
  padding: ${v.smSpacing} ${v.mdSpacing} ${v.smSpacing} ${v.mdSpacing};
  font-family: 'Fredoka', sans-serif;
  position: relative;
  pointer-events: auto;
  width: 25%;
  ${maxq[1]} {
    margin-top: calc(${v.lgSpacing} * 2);
    border-radius: calc(${v.borderRadius} * 2);
    width: 90%;
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