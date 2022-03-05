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
  INITIAL_COLOR_MODE_CSS_PROP,
} from '../../styles/theme';

const cookies = new Cookies() 


// createContext should not have any params
// but that only works in js
export const ThemeContext = React.createContext(null)

const Layout = (props) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  React.useEffect(() => {
    const root = window.document.documentElement;

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.

    console.log("Initial Color Mode: " + root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    ))
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    );

    rawSetColorMode(initialColorValue);
    console.log("layout: " + colorMode)
  }, []);

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue) {
      // setColorMode('light')
      console.log("inside setColorMode")
      const root = window.document.documentElement;
      cookies.set(COLOR_MODE_KEY, newValue);
      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;
        root.style.setProperty(cssVarName, colorByTheme[newValue]);
      })
      rawSetColorMode(newValue);
      console.log("colorMode: " + colorMode)
    }
    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

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