import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import Layout from "../components/Layout/Layout"
import { GlobalStyle } from "../styles/globalStyles"
import { darkTheme, lightTheme } from "../styles/theme"



const NavBarPage = () => {
  const [theme, setTheme] = useState("light")
  const themeStyle = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet> 
          <title>Sidebar - Code Focus</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" data-crossorigin />
          <link 
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" 
          />
        </Helmet>
        <>
          <Layout>test</Layout>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const ThemeContext = React.createContext(null)
export default NavBarPage