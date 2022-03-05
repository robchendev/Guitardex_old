import React, { useContext, useRef, useState, useEffect } from 'react'
import { SLogo, SSearch, SSidebar, SSearchIcon, SSidebarButton } from './styles'
import { logoSVG } from "../../assets"
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, STheme, SThemeLabel, SThemeToggler, SToggleThumb } from '../Layout/styles'

//Change these to what fits
import { MdOutlineAnalytics, MdSave } from "react-icons/md"
import { BsPeople } from "react-icons/bs"
import { AiFillQuestionCircle,  AiOutlineHome, AiOutlineLeft, AiOutlineSearch, AiOutlineSetting, AiOutlineTool } from "react-icons/ai"

import { ThemeContext } from "../Layout/Layout"

import { useLocation } from "@reach/router";
import Cookies from "universal-cookie"
//import DarkToggle from '../DarkToggle';

// import createPersistedState from "use-persisted-state"
// const useTheme = createPersistedState('colorScheme');

const Sidebar = () => {
  const cookies = new Cookies()
  const expiry = {path: '/', expires: new Date(Date.now()+(20*24*60*60*1000))}
  const searchRef = useRef(null)
  //const {rawSetColorMode, theme} = useContext(ThemeContext)//
  const { colorMode, setColorMode } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const fitContent = !sidebarOpen ? { width: `fit-content` } : {}
  const location = useLocation().pathname
  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true)
      searchRef.current.focus()
      localStorage.setItem("sidebarOpen", !sidebarOpen ? "open" : "closed")
    } else {
      // search functionality
    }
  }

  // Set Cookies
  useEffect(() => {
    setColorMode(localStorage.getItem('color-mode'))
    setSidebarOpen(localStorage.getItem("sidebarOpen") === "open" ? true : false)
  }, [])

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton 
          isOpen={sidebarOpen} 
          onClick={
            () => {
              setSidebarOpen((p) => !p)
              // console.log(`set ${!sidebarOpen}`)
              localStorage.setItem("sidebarOpen", !sidebarOpen ? "open" : "closed")
            }
          }
        >
          <AiOutlineLeft />
        </SSidebarButton>
      </>
      <SLogo>
        <img src={logoSVG} alt="logo" />
      </SLogo>
      <SSearch onClick={searchClickHandler} style={fitContent}>
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input 
          ref={searchRef}
          placeholder="Search" 
          style={!sidebarOpen ? {width: 0, padding: 0} : {}}
        />
      </SSearch>
      <SDivider />
      {linksArray.map(({label, icon, link, notification}) => (
        <SLinkContainer key={label} isActive={location === link}>
          <SLink to={link} style={fitContent}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
                {/* when notifications are 0 or null, don't show */}
                {
                  !!notification && 
                  (<SLinkNotification>{notification}</SLinkNotification>
                )}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {secondaryLinksArray.map(({label, icon}) => (
        <SLinkContainer key={label}>
          <SLink to="/" style={fitContent}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}           
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      
      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        
        <SThemeToggler 
          onClick={
            () => {
              //console.log('before change: ' + colorMode)
              setColorMode(colorMode === "light" ? 'dark' : 'light');
              localStorage.setItem('color-mode', colorMode === "light" ? 'dark' : 'light')
            }
          }
        >
          <SToggleThumb 
            style={colorMode === "dark" ? { right: "2px" } : {}}
          />
        </SThemeToggler>
      </STheme>
    </SSidebar>
  )
}

const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    link: "/",
    notification: 0,
  },
  {
    label: "Techniques",
    icon: <MdOutlineAnalytics />,
    link: "/techniques",
    notification: 3,
  },
  {
    label: "GearCareQoL",
    icon: <BsPeople />,
    link: "/gearcareqol",
    notification: 0,
  },
  {
    label: "Tools",
    icon: <AiOutlineTool />,
    link: "/tools",
    notification: 1,
  },
  {
    label: "About",
    icon: <AiFillQuestionCircle />,
    link: "/about",
    notification: 5,
  },
]

const secondaryLinksArray = [
  {
    label: "Settings",
    icon: <AiOutlineSetting />
  },
  {
    label: "Saved",
    icon: <MdSave />
  },
]

export default Sidebar