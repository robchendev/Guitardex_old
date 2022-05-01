import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { v, maxq } from "../../styles/globalstyles/variables"
import { COLORS } from "../../styles/globalstyles/theme"

export const MSidebar = styled.div`
  min-width: ${v.sidebarWidth};
  height: 100%;
  background: var(--color-bg, ${COLORS.bg.light});
  padding: 10% 14%;
  font-family: 'Fredoka', sans-serif;
  position: relative;
  pointer-events: auto;
  width: 100%;
`
export const MDivider = styled.div`
  height: 1px;
  width: 100%;
  background: var(--color-bg3, ${COLORS.bg3.light});
  margin: ${v.smSpacing} 0;
`
export const MLinkContainer = styled.div`
  background: ${({ isActive }) => (!isActive ? `none` : `var(--color-primary, ${COLORS.primary.light})`)};
  color: ${({ isActive }) => (!isActive ? `var(--color-text, ${COLORS.text.light})` : COLORS.buttonText)};
  border-radius: ${v.borderRadius};
  margin: 6px 0;
  :hover {
    box-shadow: ${({ isActive }) => (!isActive ? `inset 0 0 0 1px var(--color-bg3, ${COLORS.bg3.light})` : `var(--color-primary, ${COLORS.primary.light})`)};
  }
`
export const MToggle = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
  cursor: pointer;
`
export const MToggleLabel = styled.span`
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