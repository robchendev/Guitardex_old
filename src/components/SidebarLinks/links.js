import React from 'react'
import { HiOutlineChatAlt, HiOutlineUserGroup, HiOutlineHome, HiOutlineViewGrid, HiOutlineQuestionMarkCircle, HiOutlineDatabase } from "react-icons/hi"
import changeLogData from "../../assets/development/change-log-data.json"

export const internalLinks = [
  {
    label: "My Guitardex",
    icon: <HiOutlineHome />,
    link: "/"
  },
  {
    label: "Techniques",
    icon: <HiOutlineViewGrid />,
    link: "/t"
  },
  {
    label: "About",
    icon: <HiOutlineUserGroup />,
    link: "/about"
  }
]
export const devLinks = [
  {
    label: `Updated: ${changeLogData.changelog[0].date}`,
    icon: <HiOutlineDatabase />,
    link: "/dev"
  }
]
export const externalLinks = [
  {
    label: "Community",
    icon: <HiOutlineChatAlt />,
    link: "community",
  },
]
export const utilityLinks = [
  {
    label: "Help",
    icon: <HiOutlineQuestionMarkCircle />,
    link: "/help"
  },
]