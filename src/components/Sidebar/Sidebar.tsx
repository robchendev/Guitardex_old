import React, { useContext, useRef, useEffect } from 'react'
import { SLogo, SSearch, SSidebar, SSearchIcon } from './styles'
import { logoPNG } from "../../assets"
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, STheme, SThemeLabel, SThemeToggler, SToggleThumb } from '../Layout/styles'

//Change these to what fits
import { MdOutlineAnalytics, MdSave } from "react-icons/md"
import { BsPeople } from "react-icons/bs"
import { AiFillQuestionCircle,  AiFillHome, AiOutlineSearch, AiFillSetting, AiOutlineTool, AiFillStar, AiFillSave, AiFillYoutube } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"

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
        <img src={logoPNG} alt="logo" />
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
    icon: <AiFillHome />,
    link: "/",
    notification: "NEW",
  },
  {
    label: "Techniques",
    icon: <AiFillStar />,
    link: "/techniques",
    notification: 0,
  },
  {
    label: "YouTube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/channel/UCvgSO-_LP2L9nTga7qbUhcw",
    notification: 0,
  },
  {
    label: "Discord",
    icon: <FaDiscord />,
    link: "https://discord.gg/wgyqBZK",
    notification: 0,
  },
]

const secondaryLinksArray = [
  {
    label: "Settings",
    icon: <AiFillSetting />
  },
  {
    label: "Saved",
    icon: <AiFillSave />
  },
]

export default Sidebar