import Sidebar from "../Sidebar/Sidebar"
import { SLayout, SMain } from "./styles"
import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import FontLoad from "../../assets/fonts"
import { GlobalStyle } from "../../styles/globalStyles"
import { darkTheme, lightTheme } from "../../styles/theme"

// This can also be exported from somewhere else for Sidebar.tsx
export const ThemeContext = React.createContext(null)

const Layout = (props) => {
  const [theme, setTheme] = useState("light")
  const themeStyle = theme === 'light' ? lightTheme : darkTheme
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>{props.title}</title>
          <FontLoad />
        </Helmet>
        <SLayout>
          <Sidebar />
          <SMain>{props.children}</SMain>
        </SLayout>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Layout