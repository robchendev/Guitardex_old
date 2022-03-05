import React, { useContext, useRef, useEffect } from 'react'
import { SLogo, SSearch, SSidebar, SSearchIcon } from './styles'
import { logoSVG } from "../../assets"
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, STheme, SThemeLabel, SThemeToggler, SToggleThumb } from '../Layout/styles'

//Change these to what fits
import { MdOutlineAnalytics, MdSave } from "react-icons/md"
import { BsPeople } from "react-icons/bs"
import { AiFillQuestionCircle,  AiOutlineHome, AiOutlineSearch, AiOutlineSetting, AiOutlineTool } from "react-icons/ai"

import { ThemeContext } from "../Layout/Layout"

import { useLocation } from "@reach/router";
//import Cookies from "universal-cookie";

import { COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from '../../styles/theme';

const Sidebar = () => {
  // if I ever need cookie functionality:
  // const cookies = new Cookies()
  // const expiry = {path: '/', expires: new Date(Date.now()+(30*24*60*60*1000))}
  const searchRef = useRef(null)
  const { colorMode, setColorMode } = useContext(ThemeContext);
  const location = useLocation().pathname
  const searchClickHandler = () => {
    // search functionality
  }

  // Set Cookies
  useEffect(() => {
    if (typeof localStorage.getItem(COLOR_MODE_KEY) === 'string'){
      setColorMode(localStorage.getItem(COLOR_MODE_KEY))
    }
  }, [])

  return (
    <SSidebar>
      <SLogo>
        <img src={logoSVG} alt="logo" />
      </SLogo>
      <SSearch onClick={searchClickHandler}>
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input ref={searchRef} placeholder="Search"/>
      </SSearch>
      <SDivider />
      {linksArray.map(({label, icon, link, notification}) => (
        <SLinkContainer key={label} isActive={location === link}>
          <SLink to={link}>
            <SLinkIcon>{icon}</SLinkIcon>
              <SLinkLabel>{label}</SLinkLabel>
              {/* when notifications are 0 or null, don't show */}
              {
                !!notification && 
                (<SLinkNotification>{notification}</SLinkNotification>
              )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {secondaryLinksArray.map(({label, icon}) => (
        <SLinkContainer key={label}>
          <SLink to="/">
            <SLinkIcon>{icon}</SLinkIcon>
            <SLinkLabel>{label}</SLinkLabel>           
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      
      <STheme>
        <SThemeLabel>Dark Mode</SThemeLabel>
        
        <SThemeToggler 
          onClick={
            () => {
              setColorMode(colorMode === "light" ? 'dark' : 'light');
              localStorage.setItem(COLOR_MODE_KEY, colorMode === "light" ? 'dark' : 'light')
              // this needs to be here otherwise we get that "wrong initial state" bug
              document.documentElement.style.setProperty(INITIAL_COLOR_MODE_CSS_PROP, colorMode === "light" ? 'dark' : 'light');
            }
          }
        >
          <SToggleThumb style={colorMode === "dark" ? { right: "2px" } : {}}/>
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