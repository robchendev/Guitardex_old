import React, { useContext, useRef, useState, useEffect } from 'react'
import { SLogo, SSearch, SSidebar, SSearchIcon, SSidebarButton } from './styles'
import { logoSVG } from "../../assets"
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, STheme, SThemeLabel, SThemeToggler, SToggleThumb } from '../Layout/styles'
import Cookies from 'universal-cookie';

//Change these to what fits
import { MdOutlineAnalytics, MdSave } from "react-icons/md"
import { BsPeople } from "react-icons/bs"
import { AiFillQuestionCircle,  AiOutlineHome, AiOutlineLeft, AiOutlineSearch, AiOutlineSetting, AiOutlineTool } from "react-icons/ai"

import { ThemeContext } from "../Layout/Layout"
import { useLocation } from "@reach/router"

const cookies = new Cookies()

const Sidebar = () => {
  const searchRef = useRef(null)
  const {setTheme, theme} = useContext(ThemeContext)
  const expiry = {path: '/', expires: new Date(Date.now()+(20*24*60*60*1000))}
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation().pathname
  const fitContent = !sidebarOpen ? { width: `fit-content` } : {}
  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true)
      searchRef.current.focus()
      cookies.set("sidebarOpen", !sidebarOpen, expiry)
    } else {
      // search functionality
    }
  }

  // Set Cookies
  useEffect(() => {
    setTheme(cookies.get("theme"))
    setSidebarOpen(cookies.get("sidebarOpen") === "true" ? true : false)
  }, [])

  
  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton 
          isOpen={sidebarOpen} 
          onClick={
            () => {
              setSidebarOpen((p) => !p)
              console.log(`set ${!sidebarOpen}`)
              cookies.set("sidebarOpen", !sidebarOpen, expiry)
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
          isActive={theme === "dark"}
          onClick={
            () => {
              setTheme((p) => p === "light" ? "dark" : "light" )
              cookies.set("theme", theme === "dark" ? "light" : "dark", expiry)
            }
          }
        >
          <SToggleThumb 
            style={theme === "dark" ? { right: "2px" } : {}}
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