import Sidebar from "../Sidebar/Sidebar"
import { SLayout, SMain } from "./styles"
import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import FontLoad from "../../assets/fonts"
import { GlobalStyle } from "../../styles/globalStyles"
import { darkTheme, lightTheme } from "../../styles/theme"
import Cookies from "universal-cookie"
const cookies = new Cookies() 



function getInitialColorMode() {
  const persistedColorPreference = cookies.get('theme');
  const hasPersistedPreference = typeof persistedColorPreference === 'string';
  if (hasPersistedPreference) {
    return persistedColorPreference;
  }
  return 'light';
}

// createContext should not have any params
// but that only works in js
export const ThemeContext = React.createContext(null)

const Layout = (props) => {
  const [theme, rawSetColorMode] = useState(getInitialColorMode)

  const setColorMode = (value) => {
    rawSetColorMode(value);
    // Persist it on update
    cookies.set('theme', value);
  };

  const themeStyle = theme === 'light' ? lightTheme : darkTheme
  return (
    <ThemeContext.Provider value={{ rawSetColorMode, theme }}>
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