import styled from "@emotion/styled"
import { Link } from "gatsby"
import { btnReset, v } from "../../styles/variables"
import { COLORS } from "../../styles/theme"
import { maxq, minq } from "../../styles/variables"


export const SLayout = styled.div`
  display: flex;
`

export const SContainer = styled.div`
  width: 90%;
  
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;

`
export const SidebarRelative = styled.div`
  position: relative;
  z-index: 10;

`
export const SidebarContainer = styled.div`
  position: fixed;
  top: 2em;
  max-width: 1100px;
  width: 100%;
  pointer-events: none;

  ${maxq[1]} {
    display: none;
  }

  /* z-index: 10; // can prob delete */
`
export const MainContainer = styled.div`
  padding-left: 26%;
  ${maxq[1]} {
    padding: 0 0 5% 0;
  }
`
export const SMain = styled.main`  
  padding: 2em;
  ${maxq[1]} {
    padding: 0;
    margin-top: 5%;
  }

  a {
    text-decoration: none;
    color: var(--color-link, ${COLORS.link.light});
  }
  a:hover {
    color: var(--color-linkHover, ${COLORS.linkHover.light});
    background-color: var(--color-link, ${COLORS.link.light});
  }
`

export const SDivider = styled.div`
  height: 1px;
  width: 100%;
  background: var(--color-bg3, ${COLORS.bg3.light});
  margin: ${v.mdSpacing} 0;
`

export const SLinkContainer = styled.div`
  background: ${({ isActive }) => (!isActive ? `none` : `var(--color-primary, COLORS.primary.light)`)};
  color: ${({ isActive }) => (!isActive ? `var(--color-text, COLORS.text.light)` : `#fff`)};
  border-radius: ${v.borderRadius};
  margin: 6px 0;

  :hover {
    box-shadow: inset 0 0 0 1px var(--color-bg3, ${COLORS.bg3.light});
  }
`

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
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

export const SLinkA = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`

export const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;
  svg {
    font-size: 24px;
  }
`

export const SLinkLabel = styled.span`
  display: block;
  flex: 1;  
`

export const SToggleLabel = styled.span`
  display: block;
  flex: 1;
  ::after{
    content: var(--color-toggleName, ${COLORS.toggleName.light});
  } 
`

export const SLinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
  border-radius: calc(${v.borderRadius} / 2);
  background: var(--color-primary, ${COLORS.primary.light});
  color: #fff;

  margin-right: ${v.mdSpacing};
`

export const STheme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`

export const SThemeLabel = styled.span`
  display: block;
  flex: 1;
`

export const SThemeToggler = styled.button`
  ${btnReset};
  margin: 0 ${v.mdSpacing};
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${COLORS.placeholder}; 

  position: relative;
`

export const SToggleThumb = styled.div`
  height: 16px;
  width: 16px;
  position: absolute;
  top: 2px;
  bottom: 2px;
  right: var(--color-toggleThumb, ${COLORS.toggleThumb.light});
  border-radius: 50%;
  background: var(--color-bg, ${COLORS.bg.light});
`

export const MoonContainer = styled.span`
  display: var(--color-moonIcon, ${COLORS.moonIcon.light});
  padding: ${v.smSpacing} ${v.mdSpacing};
  svg {
    font-size: 24px;
  }
`

export const SunContainer = styled.span`
  display: var(--color-sunIcon, ${COLORS.sunIcon.light});
  padding: ${v.smSpacing} ${v.mdSpacing};
  svg {
    font-size: 24px;
  }
`