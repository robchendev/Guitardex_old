import styled from "@emotion/styled"
import { Link } from "gatsby"
import { btnReset, v, maxq } from "../../styles/globalstyles/variables"
import { COLORS } from "../../styles/globalstyles/theme"


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

