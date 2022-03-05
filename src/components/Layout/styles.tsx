import styled from "styled-components"
import { Link } from "gatsby"
import { btnReset, v } from "../../styles/variables"
import { COLORS } from "../../styles/theme"

export const SLayout = styled.div`
  display: flex;
`

export const SMain = styled.main`
  padding: calc(${v.smSpacing} * 2);

  h1 {
    font-size: 14px;
  }
`

export const SDivider = styled.div`
  height: 1px;
  width: 100%;
  background: var(--color-bg3, ${COLORS.bg3.light});
  margin: ${v.lgSpacing} 0;
`

export const SLinkContainer = styled.div`
  background: var(--color-bg, ${COLORS.bg.light}); 
  color: var(--color-text, ${COLORS.text.light}); 
  border-bottom: 3px solid ${({ isActive }) => (!isActive ? `transparent` : COLORS.primary.light)};  
  border-radius: ${v.borderRadius};
  margin: 8px 0;

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

export const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;

  svg {
    font-size: 20px;
  }
`

export const SLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
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
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: var(--color-toggle, ${COLORS.toggle.light}); 

  position: relative;
`

export const SToggleThumb = styled.div`
  height: 16px;
  width: 16px;
  position: absolute;
  top: 2px;
  bottom: 2px;
  right: calc(100% - 16px - 2px);
  border-radius: 50%;
  background: var(--color-bg, ${COLORS.bg.light});
`