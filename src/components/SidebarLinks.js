import React from 'react'
import { SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, SLinkA } from './Layout/styles'

export const InternalLinks = ({label, icon, link, notification, isActive}) => {
  return (
    <SLinkContainer key={label} isActive={isActive}>
      <SLink to={link}>
        <SLinkIcon>{icon}</SLinkIcon>
        <SLinkLabel>{label}</SLinkLabel>
          {
            !!notification && 
            (<SLinkNotification>{notification}</SLinkNotification>
          )}
      </SLink>
    </SLinkContainer>
  )
}

// Change to <a> component
export const ExternalLinks = ({label, icon, link}) => {
  return (
    <SLinkContainer key={label}>
      <SLinkA href={link}>
        <SLinkIcon>{icon}</SLinkIcon>
        <SLinkLabel>{label}</SLinkLabel>
      </SLinkA>
    </SLinkContainer>
  )
}

export const UtilityLinks = ({label, icon}) => {
  return (
    <SLinkContainer key={label}>
      <SLink to="#">
        <SLinkIcon>{icon}</SLinkIcon>
        <SLinkLabel>{label}</SLinkLabel>
      </SLink>
    </SLinkContainer>
  )
}

