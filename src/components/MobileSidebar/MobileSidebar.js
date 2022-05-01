import React, { useContext, useEffect } from 'react'
import { FiMoon, FiSun } from "react-icons/fi"
import { ThemeContext } from "../Layout/Layout"
import { useLocation } from "@reach/router";
import { COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from '../../styles/globalstyles/theme';
import { InternalLinks, ExternalLinks } from '../SidebarLinks/SidebarLinks'
import { internalLinks, devLinks, externalLinks, utilityLinks } from '../SidebarLinks/links'
import { MSidebar, MDivider, MLinkContainer, MToggle, MToggleLabel, SunContainer, MoonContainer } from './styles'


const Sidebar = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  const location = useLocation().pathname
  const parentLocation = "/" + location.split('/')[1]
  useEffect(() => {
    if (typeof localStorage.getItem(COLOR_MODE_KEY) === 'string') {
      setColorMode(localStorage.getItem(COLOR_MODE_KEY))
    }
  })
  return (
    <MSidebar>
      {internalLinks.map(({ label, icon, link }) => (
        <InternalLinks
          key={label}
          label={label}
          icon={icon}
          link={link}
          isActive={parentLocation === link}
        />
      ))}

      <MDivider />
      {devLinks.map(({ label, icon, link }) => (
        <InternalLinks
          key={label}
          label={label}
          icon={icon}
          link={link}
          isActive={parentLocation === link}
        />
      ))}
      <MDivider />
      {externalLinks.map(({ label, icon, link }) => (
        <ExternalLinks key={label} label={label} icon={icon} link={link} />
      ))}
      {utilityLinks.map(({ label, icon, link }) => (
        <InternalLinks
          key={label}
          label={label}
          icon={icon}
          link={link}
          isActive={parentLocation === link}
        />
      ))}
      <MLinkContainer key={colorMode === "light" ? 'Dark Theme' : 'Light Theme'}>
        <MToggle
          onClick={
            () => {
              setColorMode(colorMode === "light" ? 'dark' : 'light');
              localStorage.setItem(COLOR_MODE_KEY, colorMode === "light" ? 'dark' : 'light')
              // this needs to be here otherwise we get that "wrong initial state" bug
              document.documentElement.style.setProperty(INITIAL_COLOR_MODE_CSS_PROP, colorMode === "light" ? 'dark' : 'light');
            }
          }
        >
          <MoonContainer><FiMoon /></MoonContainer>
          <SunContainer><FiSun /></SunContainer>
          <MToggleLabel></MToggleLabel>
        </MToggle>
      </MLinkContainer>
    </MSidebar>
  )
}

export default Sidebar