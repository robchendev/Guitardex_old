import React, { useContext, useRef, useEffect, useState } from 'react'
import { SLogo, SSearch, SSidebar, SSearchIcon } from './styles'
import { logoPNG } from "../../assets"
import { SDivider, STheme, SThemeLabel, SThemeToggler, SToggleThumb } from '../Layout/styles'
import { AiFillHome, AiOutlineSearch, AiFillSetting, AiOutlineTool, AiFillStar, AiFillSave, AiFillYoutube } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"
import { ThemeContext } from "../Layout/Layout"
import { useLocation } from "@reach/router";
import { COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from '../../styles/theme';
import { InternalLinks, ExternalLinks, UtilityLinks } from '../SidebarLinks'

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
  const parentLocation = "/" + location.split('/')[1]
  console.log(parentLocation)

  // Set Cookies / LocalStorage
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
      {internalLinks.map(({label, icon, link, notification}) => (
        <InternalLinks
          label={label}
          icon={icon}
          link={link}
          notification={notification}
          isActive={parentLocation === link}
        />
      ))}
      <SDivider />
      {externalLinks.map(({label, icon, link}) => (
        <ExternalLinks label={label} icon={icon} link={link}/>
      ))}
      <SDivider />
      {utilityLinks.map(({label, icon}) => (
        <UtilityLinks label={label} icon={icon}/>
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

// TODO: Move all this into some other file or files

const internalLinks = [
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
]

const externalLinks = [
  {
    label: "YouTube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/channel/UCvgSO-_LP2L9nTga7qbUhcw",
  },
  {
    label: "Discord",
    icon: <FaDiscord />,
    link: "https://discord.gg/wgyqBZK",
  },
]

const utilityLinks = [
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