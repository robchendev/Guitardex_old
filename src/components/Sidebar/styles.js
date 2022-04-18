import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { v, maxq } from "../../styles/globalstyles/variables"
import { COLORS } from "../../styles/globalstyles/theme"

export const SSidebar = styled.div`
  min-width: ${v.sidebarWidth};
  width: ${v.sidebarWidth};
  background: var(--color-bg, ${COLORS.bg.light});
  border-radius: calc(${v.borderRadius} * 2);
  box-shadow: 0 0 4px ${COLORS.bgAlpha};
  padding: ${v.smSpacing} ${v.mdSpacing};
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
export const SDivider = styled.div`
  height: 1px;
  width: 100%;
  background: var(--color-bg3, ${COLORS.bg3.light});
  margin: ${v.smSpacing} 0;
`
export const SLinkContainer = styled.div`
  background: ${({ isActive }) => (!isActive ? `none` : `var(--color-primary, ${COLORS.primary.light})`)};
  color: ${({ isActive }) => (!isActive ? `var(--color-text, ${COLORS.text.light})` : COLORS.buttonText)};
  border-radius: ${v.borderRadius};
  margin: 6px 0;
  :hover {
    box-shadow: inset 0 0 0 1px var(--color-bg3, ${COLORS.bg3.light});
  }
`
export const SToggle = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
  cursor: pointer;
`
export const SToggleLabel = styled.span`
  display: block;
  flex: 1;
  ::after{
    content: var(--color-toggleName, ${COLORS.toggleName.light});
  } 
`
const colorModeIcon = css`
  padding: ${v.smSpacing} ${v.mdSpacing};
  svg {
    font-size: 24px;
  }
`
export const MoonContainer = styled.span`
  display: var(--color-moonIcon, ${COLORS.moonIcon.light});
  ${colorModeIcon};
`
export const SunContainer = styled.span`
  display: var(--color-sunIcon, ${COLORS.sunIcon.light});
  ${colorModeIcon};
`