import React, { useContext, useEffect } from 'react'
import { SLogo, SSidebar } from './styles'
import { logoPNG } from "../../assets"
import { MoonContainer, SDivider, SLinkContainer, SLinkIcon, SLinkLabel, STheme, SThemeLabel, SThemeToggler, SToggle, SToggleLabel, SToggleThumb, SunContainer } from '../Layout/styles'
import { FaDiscord } from "react-icons/fa"
import { FiFolder, FiHome, FiInfo, FiLayers, FiMoon, FiSun, FiHelpCircle, FiUser } from "react-icons/fi"

import { ThemeContext } from "../Layout/Layout"
import { useLocation } from "@reach/router";
import { COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from '../../styles/theme';
import { InternalLinks, ExternalLinks } from '../SidebarLinks'

const Sidebar = () => {
  // if I ever need cookie functionality:
  // const cookies = new Cookies()
  // const expiry = {path: '/', expires: new Date(Date.now()+(30*24*60*60*1000))}
  //const searchRef = useRef(null)
  const { colorMode, setColorMode } = useContext(ThemeContext);
  const location = useLocation().pathname

  const parentLocation = "/" + location.split('/')[1]

  // Set Cookies / LocalStorage
  useEffect(() => {
    if (typeof localStorage.getItem(COLOR_MODE_KEY) === 'string') {
      setColorMode(localStorage.getItem(COLOR_MODE_KEY))
    }
  })

  return (
    <SSidebar>
      {/* <h2>Guitardex</h2> */}
      {/* <SLogo>
        <img src={logoPNG} alt="logo" />
      </SLogo> */}
      {internalLinks.map(({ label, icon, link, notification }) => (
        <InternalLinks
          key={label}
          label={label}
          icon={icon}
          link={link}
          notification={notification}
          isActive={parentLocation === link}
        />
      ))}
      {externalLinks.map(({ label, icon, link }) => (
        <ExternalLinks key={label} label={label} icon={icon} link={link} />
      ))}
      <SDivider />
      {utilityLinks.map(({ label, icon, link, notification }) => (
        <InternalLinks
          key={label}
          label={label}
          icon={icon}
          link={link}
          notification={notification}
          isActive={parentLocation === link}
        />
      ))}

      <SLinkContainer key={colorMode === "light" ? 'Dark Theme' : 'Light Theme'}>
        <SToggle
          onClick={
            () => {
              setColorMode(colorMode === "light" ? 'dark' : 'light');
              localStorage.setItem(COLOR_MODE_KEY, colorMode === "light" ? 'dark' : 'light')
              // this needs to be here otherwise we get that "wrong initial state" bug
              document.documentElement.style.setProperty(INITIAL_COLOR_MODE_CSS_PROP, colorMode === "light" ? 'dark' : 'light');
              console.log("hi")
            }
          }
        >

          <MoonContainer>
            <FiMoon />
          </MoonContainer>
          <SunContainer>
            <FiSun />
          </SunContainer>

          <SToggleLabel></SToggleLabel>
          <SThemeToggler>
            <SToggleThumb />
          </SThemeToggler>
        </SToggle>
      </SLinkContainer>


      {/* <STheme>
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
          <SToggleThumb style={colorMode === "dark" ? { right: "2px" } : {}} />
        </SThemeToggler>
      </STheme> */}
    </SSidebar>
  )
}

// TODO: Move all this into some other file or files

const internalLinks = [
  {
    label: "My Guitardex",
    icon: <FiHome />,
    link: "/",
    notification: 0
  },
  {
    label: "Techniques",
    icon: <FiLayers />,
    link: "/t",
    notification: 0,
  },
  {
    label: "About",
    icon: <FiUser />,
    link: "/about",
    notification: 0,
  },
]

const externalLinks = [
  {
    label: "Discord",
    icon: <FaDiscord />,
    link: "https://discord.gg/wgyqBZK",
  },
]

const utilityLinks = [
  {
    label: "Help",
    icon: <FiHelpCircle />,
    link: "/help",
    notification: 0
  },
]

export default Sidebar