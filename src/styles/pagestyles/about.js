import styled from "@emotion/styled"
import { v, maxq } from "../globalstyles/variables"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import { COLORS } from "../globalstyles/theme"

export const CustomUL = styled.ul`
  li {
    display: flex;
    align-items: center;
    margin: 5px 0;
  }
`
export const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`
export const ProfilePictureContainer = styled.div`
  width: 8em;
  ${maxq[1]} {
    display: none;
  }
`
export const ProfilePicture = styled.img`
  max-width: 100%;
  display: block;
  border-radius: calc(${v.borderRadius} * 2);
`
export const InfoContainer = styled.div`
  padding: 0 0 0 ${v.lgSpacing};
  ${maxq[1]} {
    padding: 0;
  }
  flex: 1;
  h4 {
    margin-bottom: 0;
    margin-top: -0.2em;
  }
  p {
    margin-bottom: 0.5em;
  }
`
export const LinksBackground = styled.div`
  padding: ${v.smSpacing};
  border-radius: ${v.borderRadius};
  background: var(--color-bg, ${COLORS.bg.light});
  :not(:last-child) {
    margin-bottom: ${v.smSpacing};
  }  
`

export const LinkContainer = styled.span`
  display: inline-flex;
`
export const IconLink = styled.a`
  justify-content: start;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
  border-radius: ${v.borderRadius};
`
export const LinkedSiteIcon = styled.div`
  display: flex;
  padding: 0 ${v.smSpacing};
  svg {
    font-size: 28px;
  }
`
export const CookieWarning = styled.p`
  padding: ${v.mdSpacing};
  display: flex;
  justify-content: center;
`