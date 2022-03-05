import Sidebar from "../Sidebar/Sidebar"
import { SLayout, SMain } from "./styles"
import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import FontLoad from "../../assets/fonts"
import { GlobalStyle } from "../../styles/globalStyles"
import Cookies from "universal-cookie"
import {
  COLORS,
  COLOR_MODE_KEY,
  SIDEBAR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
  INITIAL_SIDEBAR_MODE_CSS_PROP,
  SIDEBAR,
} from '../../styles/theme';

const cookies = new Cookies() 


// createContext should not have any params
// but that only works in js
export const ThemeContext = React.createContext(null)

const Layout = (props) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);
  const [sidebarMode, rawSetSidebarMode] = React.useState(undefined);

  React.useEffect(() => {
    const root = window.document.documentElement;

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    );
    const initialSidebarValue = root.style.getPropertyValue(
      INITIAL_SIDEBAR_MODE_CSS_PROP
    );// this isnt updating correctly, and its really weird, depends on localstorage i guess
    //getInitialColorMode() in gatsby-ssr.js is returning wrong values sometimes

    rawSetColorMode(initialColorValue); 
    rawSetSidebarMode(initialSidebarValue); 
  }, []);

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue) {
      const root = window.document.documentElement;
      localStorage.setItem(COLOR_MODE_KEY, newValue);
      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;
        root.style.setProperty(cssVarName, colorByTheme[newValue]);
      })
      rawSetColorMode(newValue);
    }
    function setSidebarMode(newValue) {
      const root = window.document.documentElement;
      localStorage.setItem(SIDEBAR_MODE_KEY, newValue);
      Object.entries(SIDEBAR).forEach(([name, sidebarByTheme]) => {
        const cssVarName = `--sidebar-${name}`;
        root.style.setProperty(cssVarName, sidebarByTheme[newValue]);
      })
      rawSetSidebarMode(newValue);
    }
    return {
      colorMode, ////////////// CAN RETURN SIDEBAR HERE OR NO???
      setColorMode,
      sidebarMode,
      setSidebarMode
    };
  }, [colorMode, rawSetColorMode, sidebarMode, rawSetSidebarMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {/* <ThemeProvider theme={themeStyle}> */}
        <GlobalStyle />
        <Helmet>
          <title>{props.title}</title>
          <FontLoad />
        </Helmet>
        <SLayout>
          
          <Sidebar />
          <SMain>{props.children}</SMain>
        </SLayout>
      {/* </ThemeProvider> */}
    </ThemeContext.Provider>
  )
}

export default Layout