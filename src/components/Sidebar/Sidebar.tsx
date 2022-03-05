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

import {
  COLORS,
  COLOR_MODE_KEY,
  SIDEBAR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
  INITIAL_SIDEBAR_MODE_CSS_PROP,
} from '../../styles/theme';

// import createPersistedState from "use-persisted-state"
// const useTheme = createPersistedState('colorScheme');

const Sidebar = () => {
  const cookies = new Cookies()
  const expiry = {path: '/', expires: new Date(Date.now()+(20*24*60*60*1000))}
  const searchRef = useRef(null)
  const { colorMode, setColorMode } = useContext(ThemeContext);
  const { sidebarMode, setSidebarMode } = useContext(ThemeContext);
  const fitContent = sidebarMode === "closed" ? { width: `fit-content` } : {}
  const location = useLocation().pathname
  const searchClickHandler = () => {
    if (sidebarMode === "closed") {
      setSidebarMode("open")
      searchRef.current.focus()
      localStorage.setItem(SIDEBAR_MODE_KEY, sidebarMode === "closed" ? "open" : "closed")
    } else {
      // search functionality
    }
  }

  // Set Cookies
  useEffect(() => {
    if (typeof localStorage.getItem(COLOR_MODE_KEY) === 'string'){
      setColorMode(localStorage.getItem(COLOR_MODE_KEY))
    }
    if (typeof localStorage.getItem(SIDEBAR_MODE_KEY) === 'string'){
      setSidebarMode(localStorage.getItem(SIDEBAR_MODE_KEY) === "open" ? 'open' : 'closed')
    }
  }, [])

  return (
    <SSidebar isOpen={sidebarMode === "open"}> {/** might need to remove */}
      <>
        <SSidebarButton 
          isOpen={sidebarMode === "open"} 
          onClick={
            () => {
              setSidebarMode(sidebarMode === "open" ? "closed" : "open")
              // console.log(`set ${!sidebarMode}`)
              localStorage.setItem(SIDEBAR_MODE_KEY, sidebarMode === "open" ? "closed" : "open")
              document.documentElement.style.setProperty(INITIAL_SIDEBAR_MODE_CSS_PROP, sidebarMode === "open" ? "closed" : "open");
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
          style={sidebarMode === "closed" ? {width: 0, padding: 0} : {}}
        />
      </SSearch>
      <SDivider />
      {linksArray.map(({label, icon, link, notification}) => (
        <SLinkContainer key={label} isActive={location === link}>
          <SLink to={link} style={fitContent}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarMode === "open" && (
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
            {sidebarMode === "open" && <SLinkLabel>{label}</SLinkLabel>}           
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      
      <STheme>
        {sidebarMode === "open" && <SThemeLabel>Dark Mode</SThemeLabel>}
        
        <SThemeToggler 
          onClick={
            () => {
              //console.log('before change: ' + colorMode)
              setColorMode(colorMode === "light" ? 'dark' : 'light');
              localStorage.setItem(COLOR_MODE_KEY, colorMode === "light" ? 'dark' : 'light')
              // this needs to be here otherwise we get that "wrong initial state" bug
              document.documentElement.style.setProperty(INITIAL_COLOR_MODE_CSS_PROP, colorMode === "light" ? 'dark' : 'light');
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