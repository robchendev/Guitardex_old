import React, { useRef, useState } from 'react'
import { SLogo, SSearch, SSidebar, SSearchIcon } from './styles'
import { logoSVG } from "../../assets"
import { SDivider, SLink, SLinkA, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification } from '../Layout/styles'

//Change these to what fits
import { MdOutlineAnalytics } from "react-icons/md"
import { BsPeople } from "react-icons/bs"
import { AiFillQuestionCircle,  AiOutlineHome, AiOutlineSearch, AiOutlineTool } from "react-icons/ai"
import { FaDiscord, FaYoutube } from "react-icons/fa"

import { useLocation } from "@reach/router"

const Sidebar = () => {
  const searchRef = useRef(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation().pathname
  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true)
      searchRef.current.focus()
    } else {
      // search functionality
    }
  }

  return (
    <SSidebar>
      <SLogo>
        <img src={logoSVG} alt="logo" />
      </SLogo>
      <SSearch onClick={searchClickHandler}>
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
      {secondaryLinksArray.map(({label, icon, link}) => (
        <SLinkContainer key={label}>
          <SLinkA href={link} target="_blank" rel="noopener noreferrer">
            <SLinkIcon>{icon}</SLinkIcon>
            <SLinkLabel>{label}</SLinkLabel>         
          </SLinkA>
        </SLinkContainer>
      ))}
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
    notification: "NEW",
  },
  {
    label: "GearCare",
    icon: <BsPeople />,
    link: "/gearcareqol",
    notification: 0,
  },
  {
    label: "Tools",
    icon: <AiOutlineTool />,
    link: "/tools",
    notification: 0,
  },
  {
    label: "About",
    icon: <AiFillQuestionCircle />,
    link: "/about",
    notification: 0,
  },
]

const secondaryLinksArray = [
  {
    label: "Discord",
    icon: <FaDiscord />,
    link: "https://discord.com/"
  },
  {
    label: "YouTube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/"
  },
]

export default Sidebar